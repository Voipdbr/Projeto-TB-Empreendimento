import React, { useEffect, useState } from 'react'
import Nav from './nav.js';
import '../css/header.css';
import Main from '../store/store.js';
import api from '../service';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Header(){
    const [listaProduto, setListaProduto] = useState([]);
    const load = () => {
        api.get("/models/product").then((response) => {
            setListaProduto(response.data);
            });
    }

    useEffect(() => {
        load();
    }, [load]);

  

    return(
    <>
        <header class="header">
        <div>
            <h1>Cadastro e Listagem de Produtos</h1>
        </div>
        <Nav load={load} />
        </header>
        <Main listaProduto={listaProduto} />
        <ToastContainer />
    </>
    );
}

export default Header;