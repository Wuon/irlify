const express = require('express');
const mongodb = require('mongodb');
const axios = require('axios');
const moment = require('moment');

const router = express.Router();
async function loadChannelsCollection() {
  const client = await mongodb.MongoClient.connect(
    process.env.MONGODB_URI,
    {
      useNewUrlParser: true,
    },
  );
  return client.db(process.env.MONGODB_USER).collection('entry');
}

router.get('/', async (req, res) => {
  const channels = await loadChannelsCollection();
  if (req.query.start && req.query.end) {
    res.send(await channels.findOne({
      createdAt: {
        $gte: moment(req.query.start).startOf('day').toDate(),
        $lt: moment(req.query.end).endOf('day').toDate(),
      },
    }).then(response => response || {} ));
  } else {
    res.send(await channels.find({}).sort({createdAt: -1}).toArray());
  }
});

router.post('/', async (req, res) => {
  const channels = await loadChannelsCollection();
  if (req.body.body && req.body.createdAt) {
    axios.post('https://apiv2.indico.io/emotion', {
      api_key: process.env.INDICO,
      data: req.body.body.replace(/<(.|\n)*?>/g, ''),
    }).then((emotion) => {
      let date = new Date();
      date.setHours(0,0,0,0);
      channels.updateOne({
        createdAt: moment(req.body.createdAt).startOf('day').toDate(),
      }, {
        $set: {
          body: req.body.body,
          emotion: emotion.data.results,
          updatedAt: new Date(),
        },
        $setOnInsert: {
          createdAt: date,
        }
      }, { upsert: true }).catch(err => console.log(err));
    });
    res.status(201).send();
  } else {
    res.status(400).send();
  }
});
/*
router.patch('/:id', async (req, res) => {
  const channels = await loadChannelsCollection();
  if (req.params.id && (req.body.track || req.body.listeners)) {
    req.body.updatedAt = new Date();
    await channels.findOneAndUpdate({
      _id: req.params.id,
    }, {
      $set: req.body,
    }, {
      returnOriginal: false,
    }, (err, response) => {
      if (err) {
        console.log(err);
      } else {
        ioClient.emit('propagate', response.value);
      }
    });
    res.status(200).send();
  } else {
    res.status(400).send();
  }
});

router.delete('/:host', async (req, res) => {
  const channels = await loadChannelsCollection();
  if (req.params.host) {
    await channels.deleteOne({ host: req.params.host });
    res.status(204).send();
  } else {
    res.status(400).send();
  }
});
*/
module.exports = router;
