import React from 'react'
import Nav from './nav.js';
import './css/header.css';
import Resultado from'./db.js';

/*<Resultado>
    </Resultado>findResult*/

function Header(){
    return(
    <>
    <header class="header">
    <div>
        <h1>Cadastro e Listagem de Produtos</h1>
    </div>
    <Nav/>
    <Resultado/>
    </header>
    <Main/>
    </>
    );
}

function Main(){
    return(
    <main class="main">
        <table class="table">
        <thead>
        <tr>
		<th class="t-1"><a>Nome: </a></th>
        <th class="t-1"><a>Descrição: </a></th>
        <th class="t-1"><a>Preço: </a></th>
        </tr>
        <tr>
            <th class="t-2">a</th>
            <th class="t-2">a</th>
            <th class="t-2">a</th>
        </tr>
        </thead>
    </table>
    </main>
    );
}

export default Header;