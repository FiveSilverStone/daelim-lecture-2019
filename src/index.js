const express = require("express");
const app = express();
let user = null;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000);

app.get("/", (req, res) => {
	res.send("hello world");
});

app.get("/users", (req, res) => {
	let result = "유저가 존재하지 않습니다.";
	if(user){
		result = "user "+user.name+" get";
	}
	res.send(result);
});

app.get("/users/:id", (req, res) => {
	let result = "user id "+req.params.id+"가 존재하지 않습니다.";
	if(user && user.id == req.params.id){
		result = "user "+user.name+" get";
	}
	res.send(result);
});

app.post("/users", (req, res) => {
	user = req.body;
	res.send("user add "+user.name);
});

app.put("/users/:id", (req, res) => {
	let result = "user id "+req.params.id+"가 존재하지 않습니다.";
	if(user && user.id == req.params.id){
		user.name = req.body.name;
		result = "user name "+user.name+" 으로 변경";
	}
	res.send(result);
});

app.delete("/users/:id", (req, res) => {
	let result = "user id "+req.params.id+"가 존재하지 않습니다.";
	if(user && user.id == req.params.id){
		user = null;
		result = "user id "+req.params.id+" 삭제";
	}
	res.send(result);
});