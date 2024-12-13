# Backend API Authentication and Article for MaggotIN App
This project implements a backend API for user authentication and articles. The application is built using `Node.js` as the runtime environment and `Express.js` as the framework. 

## Cloud Computing Team 
| Student ID | Name | University |
| ------ | ------ | ------ |
|C296B4KY2742|Muhammad Arizaldi Eka Prasetya | Universitas Pembangunan Nasional "Veteran" Jawa Timur|
|C296B4KX0841|Berlian Viga Septiani| Universitas Pembangunan Nasional "Veteran" Jawa Timur|

## APIs Services
- User Authentication
- Articles

## Google Cloud Platform Services
- Cloud SQL with database engine MySQL
- Cloud Storage
- Cloud Run
- Artifact Registry
- Secret Manager

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
To set up and deploy the backend model application, first clone the source code from the specified GitHub repository and navigate to the project directory. Create a `Dockerfile` to define the container configuration details can be found at. Ensure that the required Google Cloud APIs, including Artifact Registry, Cloud Build, and Cloud Run, are enabled. Next, create an Artifact Registry repository to store the Docker image. Build the container image using the `Dockerfile`, then upload it to Artifact Registry using the `gcloud builds submit` command. Finally, deploy the application to Cloud Run using the created container image for scalable and serverless hosting with the `gcloud run deploy` command.

## Endpoint
### Users
  <pre>POST /users/register</pre>
  
Example Request

```
{
    "name": "phamhanni",
    "email": "phamhanni@gmail.com",
    "password": "hanni123",
    "confirmPassword": "hanni123"
}

```
Result Response
 
```
 {
    "error": false,
    "message": "User Created"
}

```

  <pre>POST /users/login</pre>
Example Request

```
{
    "email": "phamhanni@gmail.com",
    "password": "hanni123"
}

```
Result Response
 
```
{
    "error": false,
    "message": "Success",
    "loginResult": {
        "userId": "user-wGB92E8LRl4MawEsMl5pC",
        "name": "phamhanni",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyLXdHQjkyRThMUmw0TWF3RXNNbDVwQyIsImlhdCI6MTczMjg5NDYyMywiZXhwIjoxNzMyODk1MjIzfQ.6f7_Pl8ixoP-2hsEzbOt_oK5Bfv2urZjV-YSpKxuybY"
    }
}

```

 <pre>POST /users/logout</pre>
Example Response

```
{
  "error": false,
  "message": "Success" 
}

```
### Articles

 <pre>GET /articles</pre>
Example Response

```
{
    "message": "GET all articles success",
    "data": [
        {
            "id": 1,
            "image": "https://agr-agree-homepage-images-public-prod.oss-ap-southeast-5.aliyuncs.com/agreepedia/Agreepedia/Blog/e4b9f46a-ec4d-4862-a97f-dd9db497df96.jpeg",
            "title": "Budidaya Maggot sebagai Solusi Sampah Organik dan Pakan Alternatif Ikan Lele",
            "date": "2024-11-19T00:00:00.000Z",
            "description": "Budidaya maggot dari sampah organik menjadi solusi kreatif untuk mengatasi masalah limbah sekaligus menciptakan pakan berkualitas tinggi bagi ikan. Prosesnya sederhana: sampah organik difermentasi dengan bantuan mikroba EM4, menarik lalat BSF betina untuk bertelur. Setelah 14 hari, maggot siap dipanen—efektif mengurai limbah hingga 5 kali berat tubuhnya dalam sehari! Dengan kandungan protein tinggi dan manfaat antimikroba, maggot tidak hanya mengatasi masalah sampah, tetapi juga menekan biaya pakan ikan dan mendukung lingkungan yang lebih sehat.",
            "link_article": "https://agreeculture.id/agreepedia/artikel/be0046bd-bdc1-40ff-9234-e2c29d21851a/budidaya-maggot-sebagai-solusi-sampah-organik-dan-pakan-alternatif-ikan-lele"
        },
        {
            "id": 2,
            "image": "https://aliansizerowaste.id/wp-content/uploads/2023/02/maggot-bsf.webp",
            "title": "Budidaya Maggot BSF, Solusi Kurangi Sampah Makanan yang Bernilai Ekonomis",
            "date": "2024-11-19T00:00:00.000Z",
            "description": "Maggot BSF adalah larva Black Soldier Fly yang mampu mengolah sampah organik menjadi pakan ternak bernutrisi tinggi dan pupuk organik. Dengan modal terjangkau, budidaya ini mudah dilakukan dan memiliki potensi pasar luas. Dari 1 gram telur BSF, Anda bisa menghasilkan maggot segar bernilai jutaan rupiah dalam waktu singkat. Solusi cerdas untuk lingkungan sekaligus peluang bisnis menjanjikan!",
            "link_article": "https://aliansizerowaste.id/2023/02/01/budidaya-maggot-bsf-solusi-kurangi-sampah-makanan-yang-menguntungkan/"
        }
    ]
}
```

<pre>GET /articles/{articleId}</pre>
Example Response

```
{
    "message": "GET detail article success",
    "data": [
        {
            "id": 7,
            "image": "https://asset.kompas.com/crops/36CbiF6z22B45T3sZc5D5QJ7WEQ=/0x0:1200x800/1200x800/data/photo/2022/10/27/635a5af34d237.jpg",
            "title": "Tips Meraup Cuan dari Bisnis Budidaya Maggot",
            "date": "2024-11-20T00:00:00.000Z",
            "description": "Maggot, larva lalat black soldier fly (BSF), efisien mengurai sampah organik dan menjadi pakan ternak bernutrisi tinggi. Dengan kandungan protein 44% dan lemak 29%, maggot cocok untuk pakan ikan dan unggas. Budidaya maggot mudah dimulai dengan menetasnya telur, pemindahan larva ke biopond, dan pemberian pakan sampah organik. Dalam 2-3 minggu, maggot siap dipanen. Maggot segar dihargai Rp8.000-Rp10.000/kg, maggot kering hingga Rp120.000/kg, dan kasgot sebagai pupuk organik bisa dijual Rp80.000/kg. Budidaya maggot tidak hanya mengatasi sampah, tapi juga menjadi peluang bisnis yang menguntungkan.",
            "link_article": "https://umkm.kompas.com/read/2023/08/21/070000183/tips-meraup-cuan-dari-bisnis-budidaya-maggot"
        }
    ]
}
```

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

## Resources
* [Planning costs via Google Cloud Pricing Calculator](https://cloud.google.com/products/calculator?hl=en&dl=CjhDaVJtWldGaU16Y3lPUzFqWXpJekxUUTVOR1l0WVdFME5TMHpZelZtWWpBd016Z3lNR1FRQVE9PRAHGiRDRDFBRTI1My1FNjk5LTQ5QjMtOTU3NC1GNURBMkJDMjQ5QUU)
* [Cloud Architecture](https://drive.google.com/file/d/1wp_0DqtgxlcqHYI-55JiAsqNzVaytXrJ/view?usp=sharing)
