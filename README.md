# dnd5e_api.js
Web-API for [dnd5eapi.co](https://www.dnd5eapi.co/) simple api for things within the Official 5th Edition SRD and easily accessible through a modern RESTful API. [Source](https://github.com/5e-bits/5e-srd-api)

## Example
```JavaScript
async function main() {
	const { Dnd5EApi } = require("./dnd5e_api.js")
	const dnd5EApi = new Dnd5EApi()
	const resourceUrls = await dnd5EApi.getResourceUrls()
	console.log(resourceUrls)
}

main()
```
