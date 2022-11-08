const express = require("express");
const cors = require('cors');
const jwt = require('jsonwebtoken')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const port = process.env.PORT || 5000
const app = express()

// middleware
app.use(cors())
app.use(express.json())





const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.6xcyk.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect()
        const addedItemCollection = client.db("taskDetaile").collection("addedItem");
        const addedRulesCollection = client.db("taskDetaile").collection("addedRules");
        const orderCollection = client.db("taskDetaile").collection("order");
        const userRegistionCollection = client.db("taskDetaile").collection("userRegistion");
        const hillTracRaceResultCollection = client.db("taskDetaile").collection("hillTracRaceResult");
        const boyLongRaceResultCollection = client.db("taskDetaile").collection("boyLongRaceResult");
        const boyShortRaceResultCollection = client.db("taskDetaile").collection("boyShortRaceResult");
        const lapWiseRaceResultCollection = client.db("taskDetaile").collection("lapWiseRaceResult");
        const womanLongRaceResultCollection = client.db("taskDetaile").collection("womanLongRaceResult");
        const womanShortRaceResultCollection = client.db("taskDetaile").collection("womanShortRaceResult");


        app.get('/addedItem', async (req, res) => {
            const email = req.query.email
            const query = {}
            const cursor = addedItemCollection.find(query)
            const addedItems = await cursor.toArray()
            res.send(addedItems)
        })

        app.post('/addedItem', async (req, res) => {
            const newAddedItem = req.body;
            const result = await addedItemCollection.insertOne(newAddedItem);
            res.send(result)
        })
        app.get('/addedItem/:id', async (req, res) => {
            const id = req.params.id;
            console.log(id);
            const query = { _id: ObjectId(id) };
            const addedItem = await addedItemCollection.findOne(query);
            res.send(addedItem);
        });
        app.delete('/addedItem/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await addedItemCollection.deleteOne(query);
            res.send(result);
        });
        app.get('/addedRules', async (req, res) => {
            const email = req.query.email
            const query = {}
            const cursor = addedRulesCollection.find(query)
            const addedItems = await cursor.toArray()
            res.send(addedItems)
        })



        app.post('/addedRules', async (req, res) => {
            const newAddedItem = req.body;
            const result = await addedRulesCollection.insertOne(newAddedItem);
            res.send(result)
        })
        app.delete('/addedRules/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await addedRulesCollection.deleteOne(query);
            res.send(result);
        });
        

        // hillTracRaceResult
        app.get('/hillTracRaceResult',async (req, res) => {
            // const query = {}
            // const cursor = hillTracRaceResultCollection.find(query)
            const cursor = hillTracRaceResultCollection.find().sort("Time").limit(1000)
            const hillTracRaceResults = await cursor.toArray()
            res.send(hillTracRaceResults)
        })
        app.post('/hillTracRaceResult', async (req, res) => {
            const newAddedItem = req.body;
            const result = await hillTracRaceResultCollection.insertOne(newAddedItem);
            res.send(result)
        })
        app.delete('/hillTracRaceResult/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await hillTracRaceResultCollection.deleteOne(query);
            res.send(result);
        });

        //  boyLongRaceResult
        app.get('/boyLongRaceResult',async (req, res) => {
        
            const cursor = boyLongRaceResultCollection.find().sort("Time").limit(1000)
            // .exec((err,val)=>{
            //     if(err)
            //     {
            //         consol.log(err)
            //     }
            //     else
            //     {
            //         res.send(val)
            //     }
            // })
            //const cursor = boyLongRaceResultCollection.find(query)
            const boyLongRaceResults = await cursor.toArray()
            res.send(boyLongRaceResults)
            
        })
        app.post('/boyLongRaceResult', async (req, res) => {
            const newAddedItem = req.body;
            const result = await boyLongRaceResultCollection.insertOne(newAddedItem);
            res.send(result)
        })
        app.delete('/boyLongRaceResult/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await boyLongRaceResultCollection.deleteOne(query);
            res.send(result);
        });

        // boyShortRaceResult
        app.get('/boyShortRaceResult',async (req, res) => {
            // const query = {}
            // const cursor = boyShortRaceResultCollection.find(query)
            const cursor = boyShortRaceResultCollection.find().sort("Time").limit(1000)
            const boyShortRaceResults = await cursor.toArray()
            res.send(boyShortRaceResults)
        })
        app.post('/boyShortRaceResult', async (req, res) => {
            const newAddedItem = req.body;
            const result = await boyShortRaceResultCollection.insertOne(newAddedItem);
            res.send(result)
        })
        app.delete('/boyShortRaceResult/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await boyShortRaceResultCollection.deleteOne(query);
            res.send(result);
        });

        // lapWiseRaceResult
        app.get('/lapWiseRaceResult',async (req, res) => {
            // const query = {}
            // const cursor = lapWiseRaceResultCollection.find(query)
            const cursor = lapWiseRaceResultCollection.find().sort("Time").limit(1000)
            const lapWiseRaceResults = await cursor.toArray()
            res.send(lapWiseRaceResults)
        })
        app.post('/lapWiseRaceResult', async (req, res) => {
            const newAddedItem = req.body;
            const result = await lapWiseRaceResultCollection.insertOne(newAddedItem);
            res.send(result)
        })
        app.delete('/lapWiseRaceResult/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await lapWiseRaceResultCollection.deleteOne(query);
            res.send(result);
        });

        // womanLongRaceResult
        app.get('/womanLongRaceResult',async (req, res) => {
            // const query = {}
            // const cursor = womanLongRaceResultCollection.find(query)
            const cursor = womanLongRaceResultCollection.find().sort("Time").limit(1000)
            const womanLongRaceResults = await cursor.toArray()
            res.send(womanLongRaceResults)
        })
        app.post('/womanLongRaceResult', async (req, res) => {
            const newAddedItem = req.body;
            const result = await womanLongRaceResultCollection.insertOne(newAddedItem);
            res.send(result)
        })
        app.delete('/womanLongRaceResult/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await womanLongRaceResultCollection.deleteOne(query);
            res.send(result);
        });

        // womanShortRaceResult
        app.get('/womanShortRaceResult',async (req, res) => {
            // const query = {}
            // const cursor = womanShortRaceResultCollection.find(query)
            const cursor = womanShortRaceResultCollection.find().sort("Time").limit(1000)
            const womanShortRaceResults = await cursor.toArray()
            res.send(womanShortRaceResults)
        })
        app.post('/womanShortRaceResult', async (req, res) => {
            const newAddedItem = req.body;
            const result = await womanShortRaceResultCollection.insertOne(newAddedItem);
            res.send(result)
        })
        app.delete('/womanShortRaceResult/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await womanShortRaceResultCollection.deleteOne(query);
            res.send(result);
        });

        // userRegistion
        app.get('/userRegistion',async (req, res) => {
            const email = req.query.email
            // const query = { email : email }
            const cursor = userRegistionCollection.find().sort({point : -1}).limit(1)
            const userRegistion = await cursor.toArray()
            res.send(userRegistion)
        })
        app.post('/userRegistion', async (req, res) => {
            const newAddedItem = req.body;
            const result = await userRegistionCollection.insertOne(newAddedItem);
            res.send(result)
        })
        app.delete('/userRegistion/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await userRegistionCollection.deleteOne(query);
            res.send(result);
        });
        app.put('/userRegistion/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await userRegistionCollection.deleteOne(query);
            res.send(result);
        });



        app.get('/order', async (req, res) => {
            const email = req.query.email
            // const query={} for showing all participition
            const query = { email : email }
            const cursor = orderCollection.find(query)
            const order = await cursor.toArray()
            res.send(order)
        })

        app.post('/order', async (req, res) => {
            const order = req.body;
            const result = await orderCollection.insertOne(order);
            res.send(result);
        })

        app.get('/boyshortRace', async (req, res) => {
            const email = req.query.email
            const query = { addedItem: 'Boy Short Race' }
            const cursor = orderCollection.find(query)
            const order = await cursor.toArray()
            res.send(order)
        })
        app.get('/boyLongRace', async (req, res) => {
            const email = req.query.email
            const query = { addedItem: 'Boy Long Race' }
            const cursor = orderCollection.find(query)
            const order = await cursor.toArray()
            res.send(order)
        })
        app.get('/womanLongRace', async (req, res) => {
            const email = req.query.email
            const query = { addedItem: 'Woman Long Race' }
            const cursor = orderCollection.find(query)
            const order = await cursor.toArray()
            res.send(order)
        })
        app.get('/womanShortRace', async (req, res) => {
            const email = req.query.email
            const query = { addedItem: 'Woman Short Race' }
            const cursor = orderCollection.find(query)
            const order = await cursor.toArray()
            res.send(order)
        })
        app.get('/hillTeackRace', async (req, res) => {
            const email = req.query.email
            const query = { addedItem: 'Hill Track Race' }
            const cursor = orderCollection.find(query)
            const order = await cursor.toArray()
            res.send(order)
        })
        app.get('/lapWiseRace', async (req, res) => {
            const email = req.query.email
            const query = { addedItem: 'Lap Wise Race' }
            const cursor = orderCollection.find(query)
            const order = await cursor.toArray()
            res.send(order)
        })





    }

    finally {
        /* await client.close(); */
    }
}
run().catch(console.dir)


app.get('/', (req, res) => {
    res.send('Taks is Updating')
})

app.listen(port, () => {
    console.log('Taks is Updating on Website', port)
})