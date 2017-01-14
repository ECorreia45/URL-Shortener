# URL-Shortener API
A simple static api that allows the user to shorten any url

>This a very exciting promising projects that intends to provide the user to take long junk of url and make it simple to share with others without it looking long, inviting and spammy.

### Instalation

1- Download this to your localhost folder. 
> Ex: /Sites **on mac**

2- Assuming you already have node and npm installed in your machine, from terminal or command prompt navigate to this project folder and **install express**

``npm install express --save``

3- Install all the **dependencies**:

``npm install sequelize --save-dev``

``npm install body-parser --save-dev``

``npm install dotenv --save-dev``

``npm install chalk --save``

4- Install all the **devDependencies**:

``npm install eslint --save-dev`` to conform airbnb rules

``npm install mysql --save-dev``

5- Create Your .env file with followings:

``DB_name = ``

``DB_user = ``

``DB_pass = ``

``DB_host = localhost``

``DB_schema = mysql``

``DB_port = 3306``

``PORT = 3000``

``DEBUG = false``

### Test it

* From terminal, run this command

``node urlShortApi/server.js``

This API should be running at **port 3000** at your localhost. Use this link 

>_localhost:3000/_

### Perform CRUD

`` To CREATE a Link: ``  /api/v1/url/:url **POST method**

`` To Get ALL Links: ``  /api/v1/urls **GET method**

`` To Get Single Link: ``  /api/v1/urls/:id  **GET method**

`` To Update Single Record: ``  /api/v1/urls/:id **POST method**

`` To DELETE Single Record: ``  /api/v1/urls/:id  **DELETE method**

Any further instruction of how to use this api is included with this program. 
In the browser you should follow the instruction to fully enjoy this simple API

### Usage

> Start debug mode from >> **Terminal**

run command ``node urlShortApi/server.js --debug true`` to activate **DEBUG MODE**

run command ``node urlShortApi/server.js --debug false`` to deactivate **DEBUG MODE**

> Run API from any port from  >> **Terminal**

run command ``node urlShortApi/server.js --port port#`` to specify a **PORT**

**_______________________________________**

> Author: Elson Correia
