import React, {useState} from 'react';
import api from '../service';

function Nav({load}){
  const [Nome, setNome] = useState("");
  const [Description, setDescription] = useState("");
  const [Preco, setPreco] = useState(0);

  const addToList = () => {
    api.post("/models/product", {
    Nome: Nome,
    Description: Description,
    Preco: Preco,
    }).then(() => {
      load();
      setNome("");
      setDescription("");
      setPreco("");
    }, ()=>{
    });
  };
    return(
            <nav>
            <div>
                <ul class="ul">
                    <li><a>Nome do Produto</a></li>
                    <li>
                      <input class="form1" type="text" value={Nome} onChange={(event) => {setNome(event.target.value);}}/></li>
                    <li><a>Descrição</a></li>
                    <li><input class="form2"type="text" value={Description} onChange={(event) => {setDescription(event.target.value);}}/></li>
                    <li><a>Preço</a></li>
                    <li><input class="form3" stype="text" value={Preco} onChange={(event) => {setPreco(event.target.value);}}/></li>
                </ul>
                <ul class="ul">
                    <li><button class="btn-1" onClick={addToList}>Cadastrar</button></li>
                </ul>
               
            </div>
            </nav>
    );
}

export default Nav;