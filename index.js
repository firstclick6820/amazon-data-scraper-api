// import modules
const express = require('express');
const request = require('request-promise');
require('dotenv').config();


// Initialize the app
const app = express()
// Define the PORT
const PORT = process.env.PORT || 3000

const apiKey = process.env.API_KEY


const generateScrapURL = (apiKey) =>  `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;


// specify the app to use json format
app.use(express.json());




// Initial Route URL
app.get('/', (req, res)=> {
    res.send('Welcome To The Amazon Scrapper API.')
});



// Get Product detail
app.get('/products/:productId', async (req, res)=> {
    const {productId} = req.params;
    // const {apiKey} = req.query;

        const response = await request(`${generateScrapURL(apiKey)}&url=https://www.amazon.com/dp/${productId}`)
        res.json(JSON.parse(response))
    try {

    }
    catch (error) {
        res.json(error)
    }



});



// Get Product Reviews
app.get('/products/:productId/reviews', async (req, res)=> {
    const {productId} = req.params;
    // const {apiKey} = req.query;
        const response = await request(`${generateScrapURL(apiKey)}&url=https://www.amazon.com/product-reviews/${productId}`)
        res.json(JSON.parse(response))
    try {

    }
    catch (error) {
        res.json(error)
    }



});



// Get Product Offers
app.get('/products/:productId/offers', async (req, res)=> {
    const {productId} = req.params;
    // const {apiKey} = req.query;
        const response = await request(`${generateScrapURL(apiKey)}&url=https://www.amazon.com/gp/offer-listing/${productId}`)
        res.json(JSON.parse(response))
    try {

    }
    catch (error) {
        res.json(error)
    }



});



// Serach For the Product
app.get('/search/:searchQuery', async (req, res)=> {
    const {searchQuery} = req.params;
    const {apiKey} = req.query;
        const response = await request(`${generateScrapURL(apiKey)}&url=https://www.amazon.com/s?k=${searchQuery}`)
        res.json(JSON.parse(response))
    try {

    }
    catch (error) {
        res.json(error)
    }



});





// Running The Server
app.listen(process.env.PORT || PORT, 
	() => console.log(`Server is running on PORT ${PORT}...`));

