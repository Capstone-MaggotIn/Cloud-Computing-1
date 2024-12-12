# Backend API Authorization and Article for MaggotIn App

## Cloud Computing Team 
| Student ID | Name | University |
| ------ | ------ | ------ |
|C296B4KY2742| Muhammad Arizaldi Eka Prasetya | Universitas Pembangunan Nasional "Veteran" Jawa Timur|
|C296B4KX0841|Berlian Viga Septiani| Universitas Pembangunan Nasional "Veteran" Jawa Timur|

## APIs Services
- User Authentication
- Articles

## Project structure
```bash
PROJECT ROOT
│
├── src
│   ├── config
│   │   └── database.js            
│   │
│   ├── controller
│   │   ├── articlesController.js  
│   │   └── userController.js      
│   │
│   ├── middleware
│   │   └── userAuth.js            
│   │
│   ├── models
│   │   ├── articlesModel.js       
│   │   └── userModel.js           
│   │
│   ├── routes
│   │   ├── articlesRoutes.js      
│   │   └── userRoutes.js          
│   │
│   └── index.js                   
│
├── .env                           
├── .gitignore                     
├── env.example                    
├── package.json                   
├── package-lock.json              
└── node_modules                   

README.md
```
## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start
```

## Deployment 

## Dependency
* [ExpressJs](https://www.npmjs.com/package/express)
* [JWT](https://www.npmjs.com/package/jsonwebtoken)
* [Bcrypt](https://www.npmjs.com/package/bcrypt)
* [DotEnv](https://www.npmjs.com/package/dotenv)
* [Nanoid](https://www.npmjs.com/package/nanoid)
* [Cookie-parser](https://www.npmjs.com/package/cookie-parser)
* [Cors](https://www.npmjs.com/package/cors)
* [Mysql2](https://www.npmjs.com/package/mysql2)
* [Nodemon](https://www.npmjs.com/package/nodemon)

## Endpoint
- Users
  <pre>POST /users/register</pre>
  <pre>POST /users/login</pre>
  <pre>DEL /users/logout</pre>

- Articles
  <pre>GET /articles</pre>
  <pre>GET /articles/{articleId}</pre>
