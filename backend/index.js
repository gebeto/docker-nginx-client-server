const express = require('express');

const app = express();

app.use("/static", express.static("static"))

app.get("/", (req, res) => {
	res.send(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /><title>Document</title></head>
	<body>
		<link rel="stylesheet" href="/static/styles.css" />
		
		<h1>Hello world</h1>

		<div id="root">Loading...</div>

		<script src="/static/js/bundle.js"></script>
	</body>
</html>`);
});

app.get("/api", (req, res) => {
	res.json({
		message: "Done!",
	});
});

app.listen(8080, () => {
	console.log("Server started!");
});