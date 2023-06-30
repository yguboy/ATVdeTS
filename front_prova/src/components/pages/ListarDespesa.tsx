import axios from "axios";
import { useEffect, useState } from "react";

function ListarDespesa() {
  const [despesas, setDespesas] = useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:3333/despesas") 
      .then((resposta) => {
        setDespesas(resposta.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  return (
    <div>
      <h1>Listar Despesas</h1>
      <table>
        <thead>
          <tr>
            <th>Descrição: </th>
            <th>Valor: </th>
          </tr>
        </thead>
        <tbody>
          {despesas.map((despesa : any) => (
            <tr key={despesa.id}>
              <td>{despesa.descricao}</td>
              <td>{despesa.valor}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button color="error">
          Voltar
        </button>
      </div>
    </div>
  );
}

export default ListarDespesa;
