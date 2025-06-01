import Navbar from "../components/Navbar";

type Props = {};

function CadastroEquipamentos({}: Props) {
  return (
    <>
      <div className="content">
        <Navbar />

        <div className="container">
          <main>
            <h1>Cadastro de Equipamentos</h1>
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
                  <label>Data da Aquisição*</label>
                  <input type="date" id="aquisicao" required />
                </div>
              </div>
              <div className="form-row">
                <div>
                  <label>Data da Garantia</label>
                  <input type="date" id="garantia" />
                </div>
                <div>
                  <label>Local*</label>
                  <input type="text" id="local" required />
                </div>
              </div>

              <div
                className="form-row"
                id="computador-campos"
                style={{ display: "none" }}
              >
                <div>
                  <label>Processador</label>
                  <input type="text" id="processador" />
                </div>
                <div>
                  <label>Memória RAM</label>
                  <input type="text" id="ram" />
                </div>
                <div>
                  <label>HD</label>
                  <input type="text" id="hd" />
                </div>
                <div>
                  <label>SSD</label>
                  <input type="text" id="ssd" />
                </div>
                <div>
                  <label>Fonte</label>
                  <input type="text" id="fonte" />
                </div>
                <div>
                  <label>Placa Mãe</label>
                  <input type="text" id="placa-mae" />
                </div>
                <div>
                  <label>Placa de Vídeo</label>
                  <input type="text" id="placa-video" />
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

export default CadastroEquipamentos;
