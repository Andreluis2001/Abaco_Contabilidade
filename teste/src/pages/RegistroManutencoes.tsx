import Navbar from "../components/Navbar";

type Props = {};

function RegistroManutencoes({}: Props) {
  return (
    <>
      <div className="content">
        <Navbar />

        <div className="container">
          <main>
            <h1>Registro de Manutenção</h1>
            <form className="form" id="equipment-form">
              <div className="form-row">
                <div>
                  <label>Equipamento*</label>
                  <select id="equipamento" required>
                    <option value="">Selecione</option>
                    <option value="Computador">Computador</option>
                    <option value="Impressora">Impressora</option>
                    <option value="Monitor">Monitor</option>
                  </select>
                </div>
                <div>
                  <label>Modelo*</label>
                  <input type="text" id="modelo" required />
                </div>
                <div>
                  <label>Número de Patrimônio*</label>
                  <input type="text" id="patrimonio" required />
                </div>
                <div>
                  <label>Data da Manutenção*</label>
                  <input type="date" id="data" required />
                </div>
              </div>
              <div className="form-row">
                <div>
                  <label>Tipo de Manutenção*</label>
                  <select id="tipo" required>
                    <option value="">Selecione</option>
                    <option value="Corretiva">Corretiva</option>
                    <option value="Preventiva">Preventiva</option>
                    <option value="Preditiva">Preditiva</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="full-width">
                  <label>Observações</label>
                  <textarea
                    id="descricao"
                    placeholder="Informe a observação caso tenha."
                  ></textarea>
                </div>
              </div>

              <button type="submit">CADASTRAR</button>
            </form>
          </main>
        </div>
      </div>
    </>
  );
}

export default RegistroManutencoes;
