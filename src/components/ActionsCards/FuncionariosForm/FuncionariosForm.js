import { useState } from "react";
import "./FuncionariosForm.css";

function FuncionariosForm() {
  const [formData, setFormData] = useState({
    // Dados Pessoais
    nomeCompleto: "",
    cpf: "",
    rg: "",
    dataNascimento: "",
    genero: "",
    estadoCivil: "",
    
    // Contato
    telefone: "",
    celular: "",
    email: "",
    endereco: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    uf: "",
    cep: "",
    
    // Dados Profissionais
    funcao: "",
    departamento: "",
    dataAdmissao: "",
    salario: "",
    tipoContrato: "",
    
    // Acesso
    usuario: "",
    senha: "",
    confirmarSenha: "",
    nivelAcesso: "padrao",
    
    // Documentos
    pis: "",
    ctps: "",
    tituloEleitor: "",
    
    // Saúde
    tipoSanguineo: "",
    alergias: "",
    
    // Emergência
    contatoEmergencia: "",
    telefoneEmergencia: "",
    parentescoEmergencia: "",
    
    // Termos
    aceiteTermos: false
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
        {/* Seção: Dados Pessoais */}
        <div className="form-section">
          <h3>Dados Pessoais</h3>
          <div className="form-row">
            <div className="form-column">
              <label>
                Nome Completo*:
                <input
                  type="text"
                  name="nomeCompleto"
                  value={formData.nomeCompleto}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="form-column">
              <label>
                CPF*:
                <br />
                <input
                  type="text"
                  name="cpf"
                  value={formData.cpf}
                  onChange={handleChange}
                  required
                  className="small-input"
                />
              </label>
            </div>
          </div>
          
          <div className="form-row">
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
                Data Nascimento*:
                <input
                  type="date"
                  name="dataNascimento"
                  value={formData.dataNascimento}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="form-column">
              <label>
                Gênero:
                <br />
                <select
                  name="genero"
                  value={formData.genero}
                  onChange={handleChange}
                >
                  <option value="">Selecione</option>
                  <option value="masculino">Masculino</option>
                  <option value="feminino">Feminino</option>
                  <option value="outro">Outro</option>
                </select>
              </label>
            </div>
          </div>
        </div>

        {/* Seção: Contato */}
        <div className="form-section">
          <h3>Informações de Contato</h3>
          <div className="form-row">
            <div className="form-column">
              <label>
                Telefone:
                <input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="form-column">
              <label>
                Celular*:
                <input
                  type="tel"
                  name="celular"
                  value={formData.celular}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="form-column">
              <label>
                E-mail*:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-column">
              <label>
                Endereço*:
                <input
                  type="text"
                  name="endereco"
                  value={formData.endereco}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="form-column">
              <label>
                Número*:
                <br />
                <input
                  type="text"
                  name="numero"
                  value={formData.numero}
                  onChange={handleChange}
                  required
                  className="small-input"
                />
              </label>
            </div>
            <div className="form-column">
              <label>
                Complemento:
                <br />
                <input
                  type="text"
                  name="complemento"
                  value={formData.complemento}
                  onChange={handleChange}
                  className="small-input"
                />
              </label>
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-column">
              <label>
                Bairro*:
                <input
                  type="text"
                  name="bairro"
                  value={formData.bairro}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="form-column">
              <label>
                Cidade*:
                <input
                  type="text"
                  name="cidade"
                  value={formData.cidade}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="form-column">
              <label>
                UF*:
                <br />
                <select
                  name="uf"
                  value={formData.uf}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione</option>
                  <option value="AC">AC</option>
                  <option value="AL">AL</option>
                  {/* Adicione todos os estados */}
                </select>
              </label>
            </div>
            <div className="form-column">
              <label>
                CEP*:
                <br />
                <input
                  type="text"
                  name="cep"
                  value={formData.cep}
                  onChange={handleChange}
                  required
                  className="small-input"
                />
              </label>
            </div>
          </div>
        </div>

        {/* Seção: Dados Profissionais */}
        <div className="form-section">
          <h3>Dados Profissionais</h3>
          <div className="form-row">
            <div className="form-column">
              <label>
                Função*:
                <input
                  type="text"
                  name="funcao"
                  value={formData.funcao}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="form-column">
              <label>
                Departamento*:
                <br />  
                <select
                  name="departamento"
                  value={formData.departamento}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione</option>
                  <option value="vendas">Vendas</option>
                  <option value="ti">TI</option>
                  {/* Adicione outros departamentos */}
                </select>
              </label>
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-column">
              <label>
                Data Admissão*:
                <input
                  type="date"
                  name="dataAdmissao"
                  value={formData.dataAdmissao}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="form-column">
              <label>
                Tipo de Contrato*:
                <br />
                <select
                  name="tipoContrato"
                  value={formData.tipoContrato}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione</option>
                  <option value="clt">CLT</option>
                  <option value="pj">PJ</option>
                </select>
              </label>
            </div>
            <div className="form-column">
              <label>
                Salário:
                <br />
                <input
                  type="text"
                  name="salario"
                  value={formData.salario}
                  onChange={handleChange}
                  className="small-input"
                />
              </label>
            </div>
          </div>
        </div>

        {/* Seção: Acesso ao Sistema */}
        <div className="form-section">
          <h3>Acesso ao Sistema</h3>
          <div className="form-row">
            <div className="form-column">
              <label>
                Usuário*:
                <input
                  type="text"
                  name="usuario"
                  value={formData.usuario}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="form-column">
              <label>
                Senha*:
                <input
                  type="password"
                  name="senha"
                  value={formData.senha}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="form-column">
              <label>
                Confirmar Senha*:
                <input
                  type="password"
                  name="confirmarSenha"
                  value={formData.confirmarSenha}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-column">
              <label>
                Nível de Acesso*:
                <select
                  name="nivelAcesso"
                  value={formData.nivelAcesso}
                  onChange={handleChange}
                  required
                >
                  <option value="padrao">Padrão</option>
                  <option value="gerente">Gerente</option>
                  <option value="admin">Administrador</option>
                </select>
              </label>
            </div>
          </div>
        </div>

        {/* Seção: Documentos */}
        <div className="form-section">
          <h3>Documentos</h3>
          <div className="form-row">
            <div className="form-column">
              <label>
                PIS:
                <input
                  type="text"
                  name="pis"
                  value={formData.pis}
                  onChange={handleChange}
                  className="small-input"
                />
              </label>
            </div>
            <div className="form-column">
              <label>
                CTPS:
                <input
                  type="text"
                  name="ctps"
                  value={formData.ctps}
                  onChange={handleChange}
                  className="small-input"
                />
              </label>
            </div>
            <div className="form-column">
              <label>
                Título Eleitor:
                <input
                  type="text"
                  name="tituloEleitor"
                  value={formData.tituloEleitor}
                  onChange={handleChange}
                  className="small-input"
                />
              </label>
            </div>
          </div>
        </div>

        {/* Seção: Informações de Saúde */}
        <div className="form-section">
          <h3>Informações de Saúde</h3>
          <div className="form-row">
            <div className="form-column">
              <label>
                Tipo Sanguíneo:
                <br />
                <br />
                <select
                  name="tipoSanguineo"
                  value={formData.tipoSanguineo}
                  onChange={handleChange}
                >
                  <option value="">Selecione</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  {/* Adicione outros tipos */}
                </select>
              </label>
            </div>
            <div className="form-column">
              <label>
                Alergias:
                <input
                  type="text"
                  name="alergias"
                  value={formData.alergias}
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
        </div>

        {/* Seção: Contato de Emergência */}
        <div className="form-section">
          <h3>Contato de Emergência</h3>
          <div className="form-row">
            <div className="form-column">
              <label>
                Nome*:
                <input
                  type="text"
                  name="contatoEmergencia"
                  value={formData.contatoEmergencia}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="form-column">
              <label>
                Telefone*:
                <input
                  type="tel"
                  name="telefoneEmergencia"
                  value={formData.telefoneEmergencia}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="form-column">
              <label>
                Parentesco*:
                <br />
                <input
                  type="text"
                  name="parentescoEmergencia"
                  value={formData.parentescoEmergencia}
                  onChange={handleChange}
                  required
                  className="small-input"
                />
              </label>
            </div>
          </div>
        </div>

        {/* Botão de Envio */}
        <div className="form-section">
          <button type="submit" className="submit-button">Cadastrar Funcionário</button>
        </div>
      </form>
    </div>
  );
}

export default FuncionariosForm;