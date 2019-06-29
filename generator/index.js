const cheerio = require('cheerio')
const fs = require('fs-extra')
var ejs = require('ejs');
const API_URL = 'https://api.groundspeak.com/documentation';
const OUT_DIR = '/out';
const sections = [
    'trackable-methods',
    'trackablelog-methods',
    'logdraft-methods',
    'userwaypoint-methods',
    'list-methods',
    'user-methods',
    'friend-methods',
    'utility-methods'];

function main(){
    mkdirSilent(__dirname + OUT_DIR).then(loadHtml);
}

function loadHtml() {
    fs.readFile(__dirname + '/doc/Geocaching API.htm', function (err, data) {
        if (err) {
            throw err;
        }
        parseHtml(data.toString());
        console.log('Generation done !')
        process.exit()
    });
}

function parseHtml(html) {
    const $ = cheerio.load(html, {
        //normalizeWhitespace: true,
        //xmlMode: true
    });
    sections.forEach(section => {
        const s = $('section#' + section)
        const data = parseSection(section, s, $);
    });
}
function parseSection(section, s, $) {
    const endpoints = $('div', s);
    let r = {
        endpoints: []
    };
    endpoints.map((i, endpoint) => {
        const data = parseEndpoint(endpoint, $);
        r.endpoints.push(data);
    });
    renderTpl(section, r);
}
function renderTpl(section, data) {
    try {
        const template = fs.readFileSync(__dirname + '/tpl/route.ejs', 'utf-8');
        const js = ejs.render(template, data);
        fs.writeFileSync(__dirname + '/out/' + section + '.js', js, 'utf8');
    } catch (e) {
        console.error(e)
    }
}
function nextText(el){
    return el && el[0] && xtrim(el[0].next.data);
}
function xtrim(txt){
    return txt.trim().replace(/[\n\t\r]/g, '');
}
function parseEndpoint(endpoint, $) {
    const s = endpoint;
    const id = $(s).attr('id');
    const nodesP = $('p', s);
    const n = nodesP.eq(1);

    let r = {
        title: $('h3', s).text(),
        description: xtrim(nodesP.eq(0).text()),
        path: $('code', n).text(),
        httpMethod: nextText($('b', n).eq(1)),
        responseType: $('b', n).eq(2).next('a').text(),
        responseTypeLink: $('b', n).eq(2).next('a').attr('href'),
        responseCodes: nextText($('b', n).eq(3)),
        restrictions: nextText($('b', n).eq(4)),
        link: API_URL + '#' + endpoint,
        access: 'public'        
    }

    r.functionName = snakeToCamel(r.httpMethod.toLowerCase() + '-' + id),
    r.params = [];

    const rows = $('table>tbody>tr', s);
    rows.map((j,row) => {
        const values = $('td', row);
        const param = {
            name: values.eq(0).text(),
            type: values.eq(1).text(),
            example: values.eq(2).text(),
            exampleUrl: values.eq(2).find('a').attr('href'),
            required: values.eq(3).text(),
            description: values.eq(4).text(),
            defaultValue: values.eq(5).text()
        }
        r.params.push(param);
    })
    r.required_params = r.params.filter(param => param.required.toLowerCase()==='yes')
    return r;
}

function snakeToCamel(s) {
    return s.replace(/(\-\w)/g, function (m) { return m[1].toUpperCase(); });
}
function mkdirSilent(path) {
    return fs.ensureDir(path).then(() => {
        return fs.emptyDir(path)
    })
}

main();