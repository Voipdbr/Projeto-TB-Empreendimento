import React from 'react';
import ReactDom from 'react-dom';
import Header from './header.js';
import './css/body.css';


ReactDom.render(
    <Header/>,
    document.getElementById('root')
)

/*const app = express();

const CONNECTION_URL = 'mongodb+srv://desafioUser:desafioPassword@apptruckcluster.lgcd0.mongodb.net/Desafio?retryWrites=true&w=majority';

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(CONNECTION_URL, () => console.log('Servidor rodando')))
.catch((error) => console.log(error.message));

mongoose.set('useEncontreModifique', false);*/