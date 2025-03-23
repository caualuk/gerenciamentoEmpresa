import { useState } from "react";
import "./FuncionariosForm.css";

function FuncionariosForm() {
  const [formData, setFormData] = useState({
    acessosPermissoes: "",
    configuracaoAvancada: "",
    codigoHome: "SDF TCOM",
    senha: "",
    desativado: false,
    bairro: "",
    cidade: "",
    uf: "",
    cep: "",
    telefones: "",
    pontoReferencia: "",
    cpf: "",
    rg: "",
    dataNascimento: "",
    email: "",
    observacoes: "",
    horaEntrada: "",
    horaSaida: "",
    empresa: "",
    matriz: false,
    comissao: "5,00",
    desconto: "10,00",
    funcao: "",
    codigoAutenticacaoPDV: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do formulário:", formData);
    alert("Formulário enviado com sucesso!");
  };

  return (
    <div className="formulario-container">
      <form onSubmit={handleSubmit} className="funcionarios-form">
        {/* Seção: Identificação */}
        <div className="form-section">
          <h3>Identificação</h3>
          <div className="form-row">
            <div className="form-column">
              <label>
                Código:
                <input
                  type="text"
                  name="codigoHome"
                  value={formData.codigoHome}
                  onChange={handleChange}
                  className="small-input"
                />
              </label>
            </div>
            <div className="form-column">
              <label>
                Senha:
                <input
                  type="password"
                  name="senha"
                  value={formData.senha}
                  onChange={handleChange}
                  className="small-input"
                />
              </label>
            </div>
            <div className="form-column">
              <label className="checkbox-label">
                Desativado:
                <input
                  type="checkbox"
                  name="desativado"
                  checked={formData.desativado}
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
        </div>

        {/* Seção: Endereço */}
        <div className="form-section">
          <h3>Endereço</h3>
          <div className="form-row">
            <div className="form-column">
              <label>
                Bairro:
                <input
                  type="text"
                  name="bairro"
                  value={formData.bairro}
                  onChange={handleChange}
                  className="normal-input"
                />
              </label>
            </div>
            <div className="form-column">
              <label>
                Cidade:
                <br />
                <input
                  type="text"
                  name="cidade"
                  value={formData.cidade}
                  onChange={handleChange}
                  className="normal-input"
                />
              </label>
            </div>
            <div className="form-column">
              <label>
                UF:
                <br />
                <input
                  type="text"
                  name="uf"
                  value={formData.uf}
                  onChange={handleChange}
                  className="small-input"
                />
              </label>
            </div>
          </div>
          <div className="form-row">
            <div className="form-column">
              <label>
                CEP:
                <br />
                <input
                  type="text"
                  name="cep"
                  value={formData.cep}
                  onChange={handleChange}
                  className="small-input"
                />
              </label>
            </div>
            <div className="form-column">
              <label>
                Telefones:
                <input
                  type="text"
                  name="telefones"
                  value={formData.telefones}
                  onChange={handleChange}
                  className="normal-input"
                />
              </label>
            </div>
          </div>
        </div>

        {/* Seção: Ponto de Referência */}
        <div className="form-section">
          <h3>Ponto de Referência</h3>
          <div className="form-row">
            <div className="form-column">
              <label>
                CPF:
                <input
                  type="text"
                  name="cpf"
                  value={formData.cpf}
                  onChange={handleChange}
                  className="normal-input"
                />
              </label>
            </div>
            <div className="form-column">
              <label>
                RG:
                <br />
                <input
                  type="text"
                  name="rg"
                  value={formData.rg}
                  onChange={handleChange}
                  className="small-input"
                />
              </label>
            </div>
            <div className="form-column">
              <label>
                Data Nascimento:
                <input
                  type="date"
                  name="dataNascimento"
                  value={formData.dataNascimento}
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
        </div>

        {/* Seção: E-mail e Observações */}
        <div className="form-section" id="emailSection">
          <h3>E-mail e Observações</h3>
          <div className="form-row">
            <div className="form-column">
              <label>
                E-mail:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="form-column">
              <label>
                Observações:
                <textarea
                  name="observacoes"
                  value={formData.observacoes}
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
        </div>

        {/* Seção: Hora de Trabalho */}
        <div className="form-section">
          <h3>Hora de Trabalho</h3>
          <div className="form-row">
            <div className="form-column">
              <label>
                Hora Entrada:
                <br />
                <input
                  type="time"
                  name="horaEntrada"
                  value={formData.horaEntrada}
                  onChange={handleChange}
                  className="small-input"
                />
              </label>
            </div>
            <div className="form-column">
              <label>
                Hora Saída:
                <br />
                <input
                  type="time"
                  name="horaSaida"
                  value={formData.horaSaida}
                  onChange={handleChange}
                  className="small-input"
                />
              </label>
            </div>
            <div className="form-column">
              <label>
                Empresa:
                <input
                  type="text"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="form-column">
              <label className="checkbox-label">
                MATRIZ:
                <input
                  type="checkbox"
                  name="matriz"
                  checked={formData.matriz}
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
        </div>

        {/* Seção: Comissão e Desconto */}
        <div className="form-section">
          <h3>Comissão e Desconto</h3>
          <div className="form-row">
            <div className="form-column">
              <label>
                Comissão (%):
                <input
                  type="text"
                  name="comissao"
                  value={formData.comissao}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="form-column">
              <label>
                Desconto (%):
                <input
                  type="text"
                  name="desconto"
                  value={formData.desconto}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="form-column">
              <label>
                Função:
                <input
                  type="text"
                  name="funcao"
                  value={formData.funcao}
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
        </div>

        {/* Seção: Código de Autenticação (PDV) */}
        <div className="form-section">
          <h3>Código de Autenticação (PDV)</h3>
          <div className="form-row">
            <div className="form-column">
              <label>
                Código:
                <input
                  type="text"
                  name="codigoAutenticacaoPDV"
                  value={formData.codigoAutenticacaoPDV}
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
        </div>

        {/* Botão de Envio */}
        <div className="form-section">
          <button type="submit" className="submit-button">Salvar</button>
        </div>
      </form>
    </div>
  );
}

export default FuncionariosForm;