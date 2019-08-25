# brew install openapi-generator
export JS_POST_PROCESS_FILE="/usr/local/bin/js-beautify -r -f"
SWAGGER_YAML=../contracts/openapi.yaml
SWAGGER_JSON=../contracts/swagger.json
SWAGGER_URL=https://api.groundspeak.com/api-docs/v1/swagger
DIR=out/open-api/javascript

# install
# npm install -g api-spec-converter
# npm install replace-x -g

# Un comment these lines if file changed
wget $SWAGGER_URL -O $SWAGGER_JSON
api-spec-converter --from=swagger_2 --to=openapi_3 --syntax=yaml --order=alpha $SWAGGER_URL > $SWAGGER_YAML

openapi-generator generate -i $SWAGGER_YAML -g javascript -o $DIR/ --auth AccessToken
mv $DIR/src/index.js $DIR/src/Api-v10.js
mv $DIR/package.json  $DIR/api-package.json
rm $DIR/git_push.sh

# replace-x "let authNames = [];" "let authNames = ['AccessToken'];" $DIR -r --include="*.js"
find . -type f -name '*.js' | xargs sed -i "" "s/let authNames = \[\]/let authNames = \['AccessToken'\]/g"

cp -r $DIR/ ..
#openapi-generator generate -i $SWAGGER_URL -g typescript-fetch -o out/open-api/typescript-fetch/
#openapi-generator generate -i $SWAGGER_YAML -g typescript-node -o out/open-api/typescript-node/

