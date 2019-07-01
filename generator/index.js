const cheerio = require('cheerio');
const fs = require('fs-extra');
const ejs = require('ejs');
const path = require('path');

const API_URL = 'https://api.groundspeak.com/documentation';
const OUT_DIR = __dirname + '/out';
const SOURCE_DIR = __dirname + '/../geocaching';
const opts = {
  objects: {ids: ['objects'], tpl: 'objects.ejs', fn: parse_objects},
  references: {ids: ['reference-data'], tpl: 'references.ejs', fn: parse_references},
  endpoints: {
    ids: [
      'trackable-methods',
      'trackablelog-methods',
      'logdraft-methods',
      'userwaypoint-methods',
      'list-methods',
      'user-methods',
      'friend-methods',
      'utility-methods'
    ],
    tpl: 'endpoints.ejs',
    fn: parse_endpoints
  }
};

function main() {
  mkdirSilent(OUT_DIR).then(loadHtml);
}

function loadHtml() {
  fs.readFile(__dirname + '/doc/Geocaching API.htm', function(err, data) {
    if (err) {
      throw err;
    }
    parseHtml(data.toString());
    console.log('Generation done !');
    setInterval(() => {
      fs.copySync(OUT_DIR, SOURCE_DIR);
      process.exit();
    }, 1000);
  });
}

function parseHtml(html) {
  const $ = cheerio.load(html, {
    //normalizeWhitespace: true,
    //xmlMode: true
  });
  // sections for objects = >types
  parseSections('objects', $);
  // sections for references => enum
  parseSections('references', $);
  //section for endpoints => methods
  parseSections('endpoints', $);
}

function parseSections(key, $) {
  const ids = opts[key].ids;
  ids.forEach(sectionId => {
    parseSection(key, sectionId, $);
  });
}
function parseSection(key, sectionId, $) {
  const tpl = opts[key].tpl;
  const filename = sectionId.replace(/-.*$/, '');
  const out = key + '/' + filename + '.ts';
  // const out = opts[key].out || (key+'.ts');
  const fn = opts[key].fn;
  const s = $('section#' + sectionId);
  const divs = $('>div', s);
  let items = [];
  divs.map((i, div) => {
    const data = fn(div, sectionId, $);
    items.push(data);
  });
  let r = {
    id: sectionId,
    apiName: snakeToCamel(sectionId) + 'Api',
    apiInterfaceName: toInterface(sectionId) + 'Api'
  };
  r[key] = items;
  renderTpl(out, tpl, r);
}
function renderTpl(out, tpl, data) {
  try {
    const template = fs.readFileSync(__dirname + '/tpl/' + tpl, 'utf-8');
    const js = ejs.render(template, data);
    const file = OUT_DIR + '/' + out;
    writeFile(file, js);
  } catch (e) {
    console.error('Error in tpl ' + tpl, e);
    console.log(e.message);
  }
}
function parse_references(div, sectionId, $) {
  const id = $(div).attr('id');
  const rows = $('table>tbody>tr', div);
  let r = {
    id,
    name: snakeToCamel(id),
    interfaceName: toInterface(id),
    title: $('h2', div).text(),
    fields: []
  };
  rows.map((j, row) => {
    const values = $('td', row);
    const field = {
      value: values.eq(0).text(),
      name: values.eq(1).text()
    };
    field.interfaceName = snakeToCamel(normalize(field.name));
    r.fields.push(field);
  });
  return r;
}
function parse_objects(div, sectionId, $) {
  const id = $(div).attr('id');
  let row = $('.row', div).eq(0);
  if (row.length === 0) {
    row = $(div);
  }
  const fields = row.find('table>tbody>tr');
  const title = $('h3>strong', div).text();
  let r = {
    id,
    name: snakeToCamel(id),
    interfaceName: toInterface(id),
    title,
    params: []
  };
  if (fields.length === 0) {
    throw new Error('No fields under #' + id);
  }

  fields.map((j, field) => {
    const values = $('td', field);
    const param = {
      name: values.eq(0).text(),
      type: values.eq(1).text(),
      // or more complex
      type_href: cleanAnchor(
        values
          .eq(1)
          .find('a')
          .attr('href')
      ),
      description: values.eq(2).text(),
      description_href: cleanAnchor(
        values
          .eq(2)
          .find('a')
          .attr('href')
      )
    };
    param.isArray = /^array/.test(param.type);
    checkType(param);
    r.params.push(param);
  });

  return r;
}

function parse_endpoints(div, sectionId, $) {
  const id = $(div).attr('id');
  const nodesP = $('p', div);
  const n = nodesP.eq(1);

  let r = {
    id,
    functionName: snakeToCamel(id),
    interfaceName: toInterface(id),
    title: $('h3', div).text(),
    description: xtrim(nodesP.eq(0).text()),
    path: $('code', n).text(),
    httpMethod: nextText($('b', n).eq(1)).toLowerCase(),
    responseType: $('b', n)
      .eq(2)
      .next('a')
      .text(),
    responseTypeLink: $('b', n)
      .eq(2)
      .next('a')
      .attr('href'),
    responseCodes: nextText($('b', n).eq(3)),
    restrictions: nextText($('b', n).eq(4)),
    link: API_URL + '#' + id,
    access: 'public',
    params: []
  };

  const rows = $('table>tbody>tr', div);
  rows.map((j, row) => {
    const values = $('td', row);
    const param = {
      name: values.eq(0).text(),
      type: values.eq(1).text(),
      example: values.eq(2).text(),
      exampleUrl: values
        .eq(2)
        .find('a')
        .attr('href'),
      required: values.eq(3).text(),
      description: values.eq(4).text(),
      defaultValue: values.eq(5).text()
    };
    r.params.push(param);
  });
  r.required_params = r.params.filter(param => param.required.toLowerCase() === 'yes');
  return r;
}
function normalize(txt) {
  if (!txt) {
    return txt;
  }
  // TODO
  return txt
    .replace(/[\s-\(\)/'\.]+/g, '-')
    .replace(/&#\d+;/g, '-')
    .replace(/^-/g, '')
    .replace(/-$/g, '');
}

function toInterface(name) {
  return snakeToPascal(name);
  // return snakeToPascal(name) + 'Params';
}
function nextText(el) {
  return el && el[0] && xtrim(el[0].next.data);
}
function xtrim(txt) {
  return txt.trim().replace(/[\n\t\r]/g, '');
}
function cleanAnchor(txt) {
  if (!txt) {
    return txt;
  }
  return txt.replace('#', '');
}
const mappers = {
  bool: 'boolean',
  datetime: 'Date',
  decimal: 'number'
};
function checkType(param) {
  param.deprecated = /\(Deprecated\)/.test(param.name);
  if (param.deprecated) {
    param.name = param.name.replace('(Deprecated)', '').trim();
  }
  if (/nullable/.test(param.type)) {
    param.nullable = true;
    param.type = param.type.replace('nullable', '').trim();
  }
  if (mappers[param.type]) {
    param.type = mappers[param.type];
  }
  if (param.type === 'enum') {
    param.type = param.description_href;
  }
  if (param.type_href) {
    param.type = param.type_href;
  }
  param.type = snakeToPascal(param.type);

  if (param.isArray) {
    param.type = param.type + '[]';
  }
}

function snakeToCamel(s) {
  if (!s) {
    return s;
  }
  return s.replace(/([-_]\w)/g, function(m) {
    return m[1].toUpperCase();
  });
}
function snakeToPascal(s) {
  if (!s) {
    return s;
  }
  return capitalize(snakeToCamel(s));
}
function capitalize(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}
function mkdirSilent(dir) {
  return fs.ensureDir(dir).then(() => {
    return fs.emptyDir(dir);
  });
}

function writeFile(file, data) {
  const p = path.dirname(file);
  return fs.ensureDir(p).then(() => {
    return fs.writeFileSync(file, data, 'utf8');
  });
}

main();
