# CompassLisa 2.0 <img align="right" src="https://img.shields.io/static/v1?label=project&message=Compass&color=F0FD71&style=for-the-badge&logo=ghost"/>
<p align="center">
<img height="250" width="850" src="https://user-images.githubusercontent.com/82064724/153628847-2b2003e9-1567-482b-a069-b8c2e7d4f4f7.gif">
</p>

Welcome.

Hello how are you?! My name is Brendson I am the [author](#-Author) of this project, which shows some of my backend development with TypeScript. I come through this option to show a little of what I learned. Hope you like!!

Let's get to the project!! 🚀

<br>

> <b>Status code:</b>  Finished!! ✔

 ## <img height="18" width="18" src="https://user-images.githubusercontent.com/82064724/151113975-e8ff6813-b253-4670-b626-80e842363ab2.png">Index
<!--ts-->
   * [🧠 Context](#-Context)
     * [Rotas](#-car)
   * [📥 Download and run the project](#-Baixar-e-executar-o-projeto)
     * [Aplication setup](#-Aplication-setup)
     * [Starting the application](#-Starting-the-application)
   * [🐳 Docker](#-docker)
   * [📄 Documentation](#-documentation)
   * [🌐 Deploy](#-deploy)
   * [🛠 Technologies](#-technologies)
   * [✍🏼 Author](#-author)
   * [📝 License](#-license)
<!--te-->

 ---

 ## 🧠 Context
> **Project Feature:**  *API REST* 🌐 

In this part of the [challenge](https://github.com/br3nds0n/reademefinal/files/7939240/Desafio_Final-_Part._1.pdf) final scholarship program will be the creation of a follow-up to luxury and semi Lux. In this API you will have the flows of:

 * Interaction of http methods. (POST, GET, UPDATE and DELETE);
 * Search by query params;
 * Registration authentication;


[<Back](#Index)

---

## 📥 Download and run the project

###  Prerequisites


Before starting, you will need to have the following tools installed on your machine:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Postman](https://www.postman.com/downloads/) and [MongoDB](https://www.mongodb.com/pt-br).
Also, it's good to have an editor to work with code like [VSCode](https://code.visualstudio.com/).


### 💻 Aplication setup

```bash
# clone this repository
$ git clone <https://github.com/br3nds0n/compasslisa2.0.git>

# access the project folder
$ cd compasslisa2.0

# install the dependencies
$ yarn install
```

#

### ⚙ Configure environment variables
> It will be necessary to create a `.env` file in the project root to configure the variables. Example:

```bash
# port to server
PORT_SERVER = <port>

# address for connecting to MongoDB
DATABASE_URI = mongodb://localhost:27017/<name>
# or mongodb://databse:27017/<name> for docker

# secret hash for token configuration
SECRET = hash
```
> You can also go to [.env.example](https://github.com/br3nds0n/compasslisa2.0/blob/main/.env.example) and check the model.

#

### ▶ Starting the application
> After setting the environment variables in `.env`. We will run the following command to run the application:
```bash
# Build the application
$ yarn build

# Running in production mode
$ yarn start


# Running in development mode
$ yarn dev:server

# The project will start at the door sitting on the .env
```
<br>

#

### 🐳 Docker
> You can avoid having to install node and mongo by having [docker](https://docs.docker.com/desktop/windows/install/) and [docker-compose](https://docs.docker.com/compose/install/) on your machine.
```bash
# Running in production mode
$ docker-compose up


# running application in production
```
<br>

[<Back](#Index)

---

## 📄 Documentation
> To access the documentation, and also be able to test the `API`, follow these steps:
```bash
# Start the application
$ yarn start

# Then open your browser search
http://localhost:3333/api/v1/api-docs

# You will have access to API documentation
```
<!-- <img height="620" width="850" src=""> -->

<br>

[<Back](#Index)

___

## 🌐 Deploy 
> Na fase de Deploy foi utilizada a ferramenta [Heroku](https://dashboard.heroku.com/), para fazer a hospedagem da nossa `API`.

para ter acesso a Documentação da compass-lisa na Web. <br> Acesse: <a>https://compasso-lisa.herokuapp.com/api/v1/api-docs/</a>.

<br>

[<Back](#Index)

---
## 🛠 Technologies

The following tools/technologies were used in the construction and testing of the project. By clicking on the technology icon, you will be redirected to the official website for installation: <br>

| logo               | Framework                  | Version      |
| :----------------- | :------------------------- | :----------: |
| <a href="https://www.typescriptlang.org/" target="_blank"><img align="center" alt="ts" height="30" width="40" src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-plain.svg"></a>                   | TypeScript           |  `4.6.3`      |
| <a href="https://www.postgresql.org/download/" target="_blank"><img align="center" alt="node" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/nodejs/nodejs-original.svg"></a>            | NodeJS                    |  `16.14.2`       |
| <a href="https://www.mongodb.com/try/download/community" target="_blank"><img align="center" alt="mongo" height="30" width="40" src="https://github.com/devicons/devicon/blob/master/icons/mongodb/mongodb-original.svg">            | MongoDB                    |  `5.0.5`       |
| <a href="https://code.visualstudio.com/download" target="_blank"><img align="center" alt="VsCode" height="25" width="35" src="https://github.com/devicons/devicon/blob/master/icons/vscode/vscode-original.svg"></a> | VsCode | `1.66.2` |
 
 <br>

[<Back](#Index)
 
---
                 
## ✍🏼 Author


<div align=left>

- <table>
 <p>  Developed by:</p>
  <tr align=center>
    <th><strong> 🎖 Brendson Victor  </strong></th>
  </tr>
   <td>
      <a href="https://github.com/br3nds0n">
        <img width="168" height="140" src="https://media-exp1.licdn.com/dms/image/C4D03AQH4Lyg5QLY14Q/profile-displayphoto-shrink_800_800/0/1649690168220?e=1655337600&v=beta&t=CE9_lwADS7APVkGKaBXv864HxejH2pwiOCwD_wlhHNU" > <p align="left">
</p></a>
    </td>
  </tr>
</table>
</div>

<div align=left>

<br>

[<Back](#Index)
 
---
 
## 📝 License

This repository is licensed under **MIT LICENSE**. For more detailed information, read the [LICENSE](https://github.com/br3nds0n/compasslisa2.0/blob/main/LICENSE) file contained in this repository.

 <br> 
	
 [<Back](#compasslisa-20-)
