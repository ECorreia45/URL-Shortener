# URL-Shortener API
A simple static api that allows the user to shorten any url

* [Installation](#installation)

* [Serve](#Serve)

* [CRUD](#CRUD)

* [Usage](#Usage)

* [Testing](#Testing)

* [Coding](#Coding)


>This a very exciting promising projects that intends to provide the user to take long junk of url and make it simple to share with others without it looking long, inviting and spammy.

###Installation

1- Download this to your localhost folder. 
> Ex: /Sites **on mac**

2- Assuming you already have node and npm installed in your machine, 
from terminal or command prompt navigate to this project folder and
run this command

``npm install``

3- Create Your .env file with followings:

```.env
DB_name = 
DB_user = 
DB_pass = 
DB_host = localhost
DB_schema = mysql
DB_port = 3306

PORT = 3000
DEBUG = false
```

###Serve

* From terminal, run this command

``node server.js``

This API should be running at **port 3000** at your localhost. Use this link 

>_localhost:3000/_

###CRUD

`` To CREATE a Link: ``  /api/v1/url/:url **GET method**

`` To Get ALL Links: ``  /api/v1/urls **GET method**

`` To Get Single Link: ``  /api/v1/urls/:id  **GET method**

`` To Update Single Record: ``  /api/v1/urls/:id **POST method**

`` To DELETE Single Record: ``  /api/v1/urls/:id  **DELETE method**

Any further instruction of how to use this api is included with this program. 
In the browser you should follow the instruction to fully enjoy this simple API

###Usage

> Start debug mode from >> **Terminal**

run command ``node server.js --debug true`` to activate **DEBUG MODE**

> Run API from any port from  >> **Terminal**

run command ``node server.js --port port#`` to specify a **PORT**

#####Testing

> Start unit testing with mocha >> **Terminal**

run command ``mocha``

you may have to install mocha globally so run this commanc ``npm install mocha``

###Coding_Style

This api was coded following [__airbnb js styleguide__](https://github.com/airbnb/javascript)
so make sure your jslint/eslint supports this coding style.




**_______________________________________**

> Author: _Elson Correia_
