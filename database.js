
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

// Set up your MongoDB Atlas cluster connection string
const url = process.env.DB

const client = new MongoClient(url);
// CONNECT TO DATABASE


app.get('/data/:id', async (req, res) => {    
    await client.connect();
    const db = client.db(process.env.DB_NAME);
    const collection = db.collection('APP1');
    
})