import fetch from 'node-fetch';

import express from 'express';
const app = express()

app.get('/news/search', function (req, res) {

	let query = "https://newsapi.org/v2/everything?apiKey=85940a4d7b23488ba7ecd9e9e7c6533e"

	const q = req.query.q;

	if (q) {
		query += "&q=" + q
	}

	const language = req.query.language;

	if (language) {
		query += "&language=" + language
	}

	const domains = req.query.domains;
	const excludeDomains = req.query.excludeDomains;

	if (domains) {
		query += "&domains=" + domains
	}
	else if (excludeDomains) {
		query += "&excludeDomains=" + excludeDomains	
	}
	
	const from = req.query.from;
	const to = req.query.to;

	if (from && to) {
		query += "&from=" + from + "&to="  + to
	}
 
	console.log(`${query}`);

  	async function getPosts() {
		const data = await fetch(`${query}`)
		const response = await data.json();
		res.send(response)
	}

	getPosts();
})

app.get('/news/top-headlines', function (req, res) {

	const country = req.query.country;
 
  	async function getPosts() {
		const data = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=f8f860ff9b5c4b21972d5e2ef8a23ea2`)
		const response = await data.json();
		res.send(response)
	}

	getPosts();
})
console.log("running");

app.listen(3000)
