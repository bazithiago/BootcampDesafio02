const express = require("express");
const cors = require("cors");

const { v4: uuid } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  const {title} = request.query;   

  const results = title  
      ? repositories.filter(project => project.title.includes(title))  // se tiver um title, results será igual o que tiver buscado
      : repositories;        // se não tem, retorna todos os projects

  return response.json(results);
});

app.post("/repositories", (request, response) => {
  const {title, url, techs} = request.body;          

    const project = {id: uuid(), title, url, techs}     

    repositories.push(project)   

    return response.json(project);    
});

app.put("/repositories/:id", (request, response) => {
  // TODO
});

app.delete("/repositories/:id", (request, response) => {
  // TODO
});

app.post("/repositories/:id/like", (request, response) => {
  // TODO
});

module.exports = app;
