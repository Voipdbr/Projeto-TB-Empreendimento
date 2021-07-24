import React from 'react';

function Main({listaProduto}){
    return(
    <div>
      <main class="main">
        <table class="table">
          <div>
          <thead>
          <tr>
      <th class="t-1"><a>Nome: </a></th>
          <th class="t-1"><a>Descrição: </a></th>
          <th class="t-1"><a>Preço: </a></th>
          </tr>

          {listaProduto.length > 0 &&  listaProduto.map( item => (
           <tr key={item._id}>
            <th class="t-2">{item.Nome}</th>
              <th class="t-2">{item.Description}</th>
              <th class="t-2">{item.Preco}</th>
            </tr>
          ) )}
          
        
          </thead>
          </div>
      </table>
      </main>
    </div>
    );
}
export default Main;