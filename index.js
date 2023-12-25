const express = require("express");
const server = express();

server.get("/", (req, res) => {
	res.send("<h1>Hello World</h1>");
});

server.get("/name", (req, res) => {
	res.send(
		`<h1>Your name is: ${req.query.n} and your age is ${req.query.age}</h1>`
	);
});

server.post("/register", (req, res) => {
	res.send(`<h1>Your registration is complete</h1>`);
});

server.listen(8080, () => console.log("Server is running"));
