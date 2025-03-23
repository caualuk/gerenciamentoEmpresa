import { useState } from "react";
import "./FuncionariosForm.css"; // Importe o CSS específico do formulário

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
        <h3>Identificação</h3>
        <div className="form-group">
          <label>
            Código - Nome:
            <input
              type="text"
              name="codigoHome"
              value={formData.codigoHome}
              onChange={handleChange}
            />
          </label>
          <label>
            Senha:
            <input
              type="password"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
            />
          </label>
          <label>
            Desativado:
            <input
              type="checkbox"
              name="desativado"
              checked={formData.desativado}
              onChange={handleChange}
            />
          </label>
        </div>

        {/* Seção: Endereço */}
        <h3>Endereço</h3>
        <div className="form-group">
          <label>
            Bairro:
            <input
              type="text"
              name="bairro"
              value={formData.bairro}
              onChange={handleChange}
            />
          </label>
          <label>
            Cidade:
            <input
              type="text"
              name="cidade"
              value={formData.cidade}
              onChange={handleChange}
            />
          </label>
          <label>
            UF:
            <input
              type="text"
              name="uf"
              value={formData.uf}
              onChange={handleChange}
            />
          </label>
          <label>
            CEP:
            <input
              type="text"
              name="cep"
              value={formData.cep}
              onChange={handleChange}
            />
          </label>
          <label>
            Telefones:
            <input
              type="text"
              name="telefones"
              value={formData.telefones}
              onChange={handleChange}
            />
          </label>
        </div>

        {/* Seção: Ponto de Referência */}
        <h3>Ponto de Referência</h3>
        <div className="form-group">
          <label>
            CPF:
            <input
              type="text"
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
            />
          </label>
          <label>
            RG:
            <input
              type="text"
              name="rg"
              value={formData.rg}
              onChange={handleChange}
            />
          </label>
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

        {/* Seção: E-mail e Observações */}
        <h3>E-mail e Observações</h3>
        <div className="form-group">
          <label>
            E-mail:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Observações:
            <textarea
              name="observacoes"
              value={formData.observacoes}
              onChange={handleChange}
            />
          </label>
        </div>

        {/* Seção: Hora de Trabalho */}
        <h3>Hora de Trabalho</h3>
        <div className="form-group">
          <label>
            Hora Entrada:
            <input
              type="time"
              name="horaEntrada"
              value={formData.horaEntrada}
              onChange={handleChange}
            />
          </label>
          <label>
            Hora Saída:
            <input
              type="time"
              name="horaSaida"
              value={formData.horaSaida}
              onChange={handleChange}
            />
          </label>
          <label>
            Empresa:
            <input
              type="text"
              name="empresa"
              value={formData.empresa}
              onChange={handleChange}
            />
          </label>
          <label>
            MATRIZ:
            <input
              type="checkbox"
              name="matriz"
              checked={formData.matriz}
              onChange={handleChange}
            />
          </label>
        </div>

        {/* Seção: Comissão e Desconto */}
        <h3>Comissão e Desconto</h3>
        <div className="form-group">
          <label>
            Comissão (%):
            <input
              type="text"
              name="comissao"
              value={formData.comissao}
              onChange={handleChange}
            />
          </label>
          <label>
            Desconto (%):
            <input
              type="text"
              name="desconto"
              value={formData.desconto}
              onChange={handleChange}
            />
          </label>
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

        {/* Seção: Código de Autenticação (PDV) */}
        <h3>Código de Autenticação (PDV)</h3>
        <div className="form-group">
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

        {/* Botão de Envio */}
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default FuncionariosForm;