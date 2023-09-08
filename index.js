import fetch from 'node-fetch';

import express from 'express';
const app = express()

app.get('/news/search', function (req, res) {

	let query = "https://newsapi.org/v2/everything?"

	const q = req.query.q;

	if (q) {
		query += q
	}

	const language = req.query.language;

	if (language) {
		query += language
	}

	const domains = req.query.domains;
	const excludeDomains = req.query.excludeDomains;

	if (domains) {
		query += domains
	}
	else if (excludeDomains) {
		query += excludeDomains	
	}
	
	const from = req.query.from;
	const to = req.query.to;

	if (from && to) {
		query += from + to
	}
 
	console.log(query);

  	async function getPosts() {
		const data = await fetch(`${query}&apiKey=cd36d2b4b3984e428ee2fe1d32b6a642`)
		const response = await data.json();
		res.send(response)
	}

	getPosts();
})

app.get('/news/top-headlines', function (req, res) {

	const country = req.query.country;
 
  	async function getPosts() {
		const data = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=cd36d2b4b3984e428ee2fe1d32b6a642`)
		const response = await data.json();
		res.send(response)
	}

	getPosts();
})
console.log("running");

app.listen(3000)
