const mongoose =require('mongoose');
require('dotenv'). config()



const url=`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ac-driqmur-shard-00-00.zw6vf0h.mongodb.net:27017,ac-driqmur-shard-00-01.zw6vf0h.mongodb.net:27017,ac-driqmur-shard-00-02.zw6vf0h.mongodb.net:27017/?ssl=true&replicaSet=atlas-jobmvp-shard-0&authSource=admin&retryWrites=true&w=majority`;
module.exports.connect = () => {
    mongoose
      .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("MongoDB connected successfully");
      })
      .catch((error) => console.log("Error: ", error));
  };