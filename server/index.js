const express = require('express');
const app = express()
require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const corsOptions = {
    origin: ['http://localhost:5000'],
    credential: true,
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.riywk8u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {

    // Solo Sphere Collection Get
    const jobsCollection = client.db('soloSphere').collection('jobs');
    const bidsCollection = client.db('soloSphere').collection('bids');

    // Jobs data get API
    app.get('/jobs', async (req, res) => {
      const result = await jobsCollection.find().toArray()
      res.send(result)
    })

    // Get single job using by Id
    app.get('/jobDetails/:id', async (req, res) => {
      const id = req.params.id
      const query = { _id: new ObjectId(id)}
      const result = await jobsCollection.findOne(query)
      res.send(result)
    })

    // Post single bid data in db
    app.post('/bid', async (req, res) => {
      const bidData = req.body
      const result = await bidsCollection.insertOne(bidData);
      res.send(result)
    })

    // Post single job data in db
    app.post('/job', async (req, res) => {
      const jobData = req.body
      const result = await jobsCollection.insertOne(jobData);
      res.send(result)
    })

    // get specifice job data by using email
    app.get('/jobs/:email', async (req, res) => {
      const email = req.params.email
      const query = { 'buyer.email': email }
      const result = await jobsCollection.find(query).toArray()
      res.send(result)
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send("Hello from solo Sphere......")
})



app.listen(port, console.log(`server is on ${port}`))