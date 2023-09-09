# Local-App

## Description

Provide a brief description of your Node.js service. Explain what it does, its purpose, and any key features.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)

## Getting Started: 🚀

You can follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Installation

1. Clone this repository 
```bash
git clone https://github.com/your/repository.git
```
2. Get inside repository folder
```bash
cd your-repository
```
3. Install dependencies
```bash
npm install
```

## Configuration 
- `3000`: The port on which the service listens.
- `API_KEY`: An API key is required for news_api authentication. link to register and get Api Key: [https://newsapi.org/register](https://newsapi.org/register) 

## Api Endpoints

### GET /news/search

**Description**: Retrieve newslist.

**Optional Parameters**: alter response based on given parameters
- `q`: filter query using title, content, and description.
- `country`: filter query based on country.
- `language`: filter query based on language.
- `form` and `to` date: filter query by providing from date and to date
- `domains`: filter query based on domains, filters data only of those domains
- `exludeDomains`: shows data excluding the domains in the excluded domains

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
