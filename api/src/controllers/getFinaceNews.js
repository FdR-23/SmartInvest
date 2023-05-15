require('dotenv').config()
const API_KEY = process.env.API_KEY
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(API_KEY);


const FinanceNews = async (req, res) => {
    const date = new Date()
    const dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000))
        .toISOString()
        .split("T")[0];
//esta mal todo esto hay que arreglar
    console.log(dateString)
    try {

        const data = await newsapi.v2.topHeadlines({
           

                domains: 'elpais.com/economia',
            }).then(response => console.log(response))
            
            console.log("data",data)
            res
            .status(202)
            .send("data")

        }
    catch (error) {

        }
    }



module.exports =  FinanceNews;