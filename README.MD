 # Amethyste Client
 
 <img align="center" src="https://api.amethyste.moe/d983cbfa8bf6413d79bf52ae6c545e25.png">

 ### An unofficial wrapper for [Amethyste-Api](https://api.amethyste.moe/) written in TypeScript


 ## ⚙️ Setup

```shell
//yarn
yarn add amethyste-client

//npm 
npm i amethyste-client
```

## 📑 Usage

#### Note : You can get your api key [here](https://api.amethyste.moe/)
<br>

### JavaScript
```js

const amiapi = require("amethyste-client")

const Client = amiapi("UR_TOKEN")

Client.generate({
	endpoint: "beautiful",
	options: {
		"url": client.user.avatarURL
	}
}).then(img => {
	console.log(img)
})
```


### TypeScript
```ts

import amiapi from "amethyste-client"

const Client:amiapi = amiapi("UR_TOKEN")

Client.generate({
	endpoint: "beautiful",
	options: {
		"url": client.user.avatarURL
	}
  }).then(img => {
	console.log(img)
})
```

### Response

```json
{
  "status": 200,
  "url": "https://cdn.amethyste.moe/wallpaper14ebdfb3f9a9e4025b54ab759f1ad9e60bd0.jpg"
}
```

## 🧾 Endpoints

#### For endpoints and options kindly refer here at the [docs](https://docs.api.amethyste.moe/)
