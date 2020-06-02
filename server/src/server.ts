import express from "express";

const app = express();

//app.use(express.json());
app.get("/", (request, response) => {
    response.send(["juliano", "Edezio"]);
});

app.listen(3333);
