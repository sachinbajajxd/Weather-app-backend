const express=require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const axios = require('axios');


router.get('/', (req, res) => {
    console.log("Hello we are on home page");
    res.json(202);
});

router.get('/get-info/:city', async (req, res) => {

    try{
        const city=req.params.city;
        console.log(city);

        const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;

        console.log(url);

        const response = await axios.get(url);
        console.log(response);
        // return res.json(response.data);
    }catch(error){
        console.log(error);
        res.json({message: error});
    }
})


module.exports = router;