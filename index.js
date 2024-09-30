const express = require('express');
const app = express();
app.use(express.json())

const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');


dotenv.config();

// Set up your MongoDB Atlas cluster connection string
const url = process.env.DB

const client = new MongoClient(url);
client.connect();
const db = client.db(process.env.DB_NAME);
const collection = db.collection('APP1');
// CONNECT TO DATABASE


app.get('/', (req, res) => {
    res.send('Hello World!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

app.get('/data/:id', async (req, res) => {    
    // Query the collection
    const data = await collection.find({shopId: Number(req.params.id)}).toArray();
    if(data.length>0){
        if(data[0].surveys.length>0){
            var final = data[0].surveys.filter(a=>a.published);
            res.send(final);
        }else{
            res.send([])
        }
    }else{
        res.send([])
    }
})

