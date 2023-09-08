# Local-App

## Description

Provide a brief description of your Node.js service. Explain what it does, its purpose, and any key features.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)

## Installation

Provide instructions on how to install and set up your Node.js service. Include any prerequisites and step-by-step installation instructions.

1. clone this repository 
```bash
git clone https://github.com/your/repository.git
```
2. get inside repository folder
```bash
cd your-repository
```
3. install dependencies
```bash
npm install
```

## Configuration 
- `3000`: The port on which the service listens.
- `API_KEY`: An API key required for news_api authentication. link to register and get Api Key: [https://newsapi.org/register](https://newsapi.org/register) 

## Api Endpoints

### GET /news/search

**Description**: Retrieve newslist.

**Optional Parameters**: alter repsonse based on given parameters
- `q` : filter query using title, contect and description.
- `country` : filter query based on country.
- `language` : fiter query based on language.
- `form` and `to` date: filter query by providing from date and to date
- `domains`: filter query based on domains , filters data only of those domains
- `exludeDomains`: shows data excluding the domains in the exclude domains

**Response**:
```bash
{
"status": "ok",
"totalResults": 10085,
-"articles": [
-{
-"source": {
"id": null,
"name": ""
},
"author": "",
"title": "",
"description": "",
"url": "",
"urlToImage": "",
"publishedAt": "",
"content": ""
}
```
