# brew install swagger-codegen
swagger-codegen generate -i https://api.groundspeak.com/api-docs/v1/swagger -l nodejs-server -o out/swagger/nodejs/

# brew install openapi-generator
#export JS_POST_PROCESS_FILE="/usr/local/bin/js-beautify -r -f"

#openapi-generator generate -i https://api.groundspeak.com/api-docs/v1/swagger -g typescript-fetch -o out/open-api/typescript-fetch/
#openapi-generator generate -i https://api.groundspeak.com/api-docs/v1/swagger -g javascript -o /