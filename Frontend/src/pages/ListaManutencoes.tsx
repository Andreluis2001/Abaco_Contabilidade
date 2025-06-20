import Navbar from "../components/Navbar";

type Props = {};

function ListaManutencoes({}: Props) {
  return (
    <>
      <div className="content">
        <Navbar />

        <div className="container">
          <main className="lista-container">
            <h1 className="lista-titulo">Lista de Manutenção</h1>

            <div className="barra-pesquisa">
              <input
                type="text"
                id="barra-pesquisa"
                placeholder="Pesquisar manutenções..."
                onInput={() => {}}
              />
            </div>

            <table className="tabela-equipamentos">
              <thead>
                <tr>
                  <th>
                    <input
                      type="checkbox"
                      id="selecionar-todos"
                      onClick={() => {}}
                    />
                  </th>
                  <th>Equipamento</th>
                  <th>Data da Manutenção</th>
                  <th>Tipo</th>
                  <th>Status</th>
                  <th>Técnico</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  data-equipamento="COMPUTADOR"
                  data-data="10/05/2025"
                  data-tipo="Preventiva"
                  data-status="Agendada"
                  data-tecnico="João Silva"
                  data-descricao="Verificar atualização do sistema e limpeza interna."
                >
                  <td>
                    <input type="checkbox" className="checkbox-item" />
                  </td>
                  <td>COMPUTADOR</td>
                  <td>10/05/2025</td>
                  <td>Preventiva</td>
                  <td>Agendada</td>
                  <td>João Silva</td>
                  <td>
                    <i
                      className="bi bi-eye"
                      style={{ cursor: "pointer" }}
                      onClick={() => {}}
                    ></i>
                  </td>
                </tr>
                <tr
                  data-equipamento="IMPRESSORA"
                  data-data="20/04/2025"
                  data-tipo="Corretiva"
                  data-status="Concluída"
                  data-tecnico="Maria Santos"
                  data-descricao="Troca do cartucho e limpeza das cabeças de impressão."
                >
                  <td>
                    <input type="checkbox" className="checkbox-item" />
                  </td>
                  <td>IMPRESSORA</td>
                  <td>20/04/2025</td>
                  <td>Corretiva</td>
                  <td>Concluída</td>
                  <td>Maria Santos</td>
                  <td>
                    <i
                      className="bi bi-eye"
                      style={{ cursor: "pointer" }}
                      onClick={() => {}}
                    ></i>
                  </td>
                </tr>
                <tr
                  data-equipamento="ROTEADOR"
                  data-data="05/05/2025"
                  data-tipo="Preventiva"
                  data-status="Agendada"
                  data-tecnico="Carlos Oliveira"
                  data-descricao="Atualização do firmware e reinicialização programada."
                >
                  <td>
                    <input type="checkbox" className="checkbox-item" />
                  </td>
                  <td>ROTEADOR</td>
                  <td>05/05/2025</td>
                  <td>Preventiva</td>
                  <td>Agendada</td>
                  <td>Carlos Oliveira</td>
                  <td>
                    <i
                      className="bi bi-eye"
                      style={{ cursor: "pointer" }}
                      onClick={() => {}}
                    ></i>
                  </td>
                </tr>
              </tbody>
            </table>

            <div
              id="detalhes"
              className="detalhes-formulario"
              style={{ display: "none" }}
            >
              <div className="linha-inputs">
                <div className="input-box">
                  <label>Equipamento</label>
                  <input type="text" id="equipamento" readOnly />
                </div>
                <div className="input-box">
                  <label>Data da Manutenção</label>
                  <input type="date" id="data-manutencao" readOnly />
                </div>
                <div className="input-box">
                  <label>Tipo</label>
                  <input type="text" id="tipo" readOnly />
                </div>
                <div className="input-box">
                  <label>Status</label>
                  <input type="text" id="status" readOnly />
                </div>
                <div className="input-box">
                  <label>Técnico</label>
                  <input type="text" id="tecnico" readOnly />
                </div>
              </div>

              <div className="campo-descricao" id="descricao-campo">
                <label>Descrição</label>
                <textarea id="descricao" readOnly></textarea>
              </div>

              <p className="info-usuario">
                Registro feito pelo usuário Matheus às 19:11 do dia 29/05/2025.
              </p>

              <div className="botoes-acao">
                <button className="btn cinza" onClick={() => {}}>
                  ALTERAR
                </button>
                <button className="btn cinza" onClick={() => {}}>
                  REMOVER
                </button>
                <button className="btn cinza" onClick={() => {}}>
                  GERAR RELATÓRIO
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default ListaManutencoes;
