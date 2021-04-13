const mongoose = require('mongoose');

require('dotenv').config();
const url = process.env.ATLAS_URL;

mongoose.connect(url,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
const connection = mongoose.connection;
connection.once('open',()=>{console.log("connection success")})

// mongodb+srv://root:<password>@cluster0.igtmg.mongodb.net/<dbname>?retryWrites=true&w=majority
// W032PHb3ezdQXKsU

// mongodb://root:root@cluster0-shard-00-00.igtmg.mongodb.net:27017,cluster0-shard-00-01.igtmg.mongodb.net:27017,cluster0-shard-00-02.igtmg.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-5mqmge-shard-0&authSource=admin&retryWrites=true&w=majority

// , () => {
//     if(!err) {
//         console.log('mogoconet Succerr')
//     }else{console.log("error")}
// }