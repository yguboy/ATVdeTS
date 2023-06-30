import axios from "axios";
import { useState } from "react";
import { Despesa } from "../../models/despesa.model"; 

// Todo o cadastro esta funcionavel o porem é a nossa dificuldade com o restante do back-end.

function CadastroDespesa() {
  const [descricao, setDescricao] = useState(""); 
  const [valor, setValor] = useState(""); 

  function enviar() {
    let despesa: Despesa = new Despesa();
    despesa.descricao = descricao;
    despesa.valor = Number.parseFloat(valor); 

    axios
      .post("http://localhost:3333/despesas", despesa)
      .then((resposta) => {
        console.log(resposta.data.mensagem);
        setDescricao("");
        setValor("");
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  return (
    <div>
      <h1>Cadastrar Despesa</h1>
      <div>
        <label>Descrição: </label>
        <input
          type="text"
          onChange={(event: any) => setDescricao(event.target.value)}
        />
      </div>
      <div>
        <label>Valor: </label>
        <input
          type="text"
          onChange={(event: any) => setValor(event.target.value)}
        />
      </div>
      <div>
        <button color="error" onClick={enviar}>
          Cadastrar
        </button>
      </div>
    </div>
  );
}

export default CadastroDespesa;
