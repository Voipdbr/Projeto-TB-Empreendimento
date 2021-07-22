import React from 'react'

function Nav(){
    return(
            <nav>
            <div>
                <ul class="ul">
                    <li><a>Nome do Produto</a></li>
                    <li><input class="form1"></input></li>
                    <li><a>Descrição</a></li>
                    <li><input class="form2"></input></li>
                    <li><a>Preço</a></li>
                    <li><input class="form3"></input></li>
                </ul>
                <ul class="ul">
                    <li><button class="btn-1">Cadastrar</button></li>
                </ul>
            </div>
            </nav>
    );
}

export default Nav;