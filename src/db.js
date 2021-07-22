const { MongoClient } = require('mongodb')

const uri = 'mongodb+srv://desafioUser:desafioPassword@apptruckcluster.lgcd0.mongodb.net/Desafio?retryWrites=true&w=majority'
const client = new MongoClient(uri)

const dbName = 'Desafio'

async function  main(){
    await client.connect()
    console.log('Connected successfully to server')
    const db = client.db(dbName)
    const collection = db.collection('produtos')
    const findResult = await collection.find({}).toArray()
    console.log('Find Result => ', findResult)
    /*const insertResult = await collection.insertMany([{ 
        Nome: 'Computador', 
        Description: 'produto eletronico',
        Preco: 3000
    }])
    const deleteResult = await collection.deleteMany({ Nome: 'Computador', 
    Description: 'produto eletronico',
    Preco: 3000})
console.log('Deleted documents =>', deleteResult)
    console.log('Inserted documents =>', insertResult)*/
    return 'done. '
}

function Resultado(){
    return(
    <div>
    <a>{{findResult}}</a>
    </div>
    )
}

export default Resultado;

main()
.then(console.log)
.catch(console.error)
.finally(() => client.close())