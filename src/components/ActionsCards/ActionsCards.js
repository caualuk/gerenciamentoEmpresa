import './ActionsCard.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderOpen,
  faBox,
  faCashRegister,
  faHandHoldingDollar,
  faMoneyBillTrendUp,
  faClipboard,
  faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import FuncionariosForm from './FuncionariosForm/FuncionariosForm';

const cards = [
  { icon: faFolderOpen, title: "Cadastro", action: "openCadastro" },
  { icon: faBox, title: "Estoque", action: "openEstoque" },
  { icon: faCashRegister, title: "Vendas", action: "openVendas" },
  { icon: faHandHoldingDollar, title: "A pagar", action: "openAPagar" },
  { icon: faMoneyBillTrendUp, title: "A receber", action: "openAReceber" },
  { icon: faClipboard, title: "Relatórios", action: "openRelatorios" },
  { icon: faDoorOpen, title: "Sair", action: "sair" },
];

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
};
const ModalFuncionarios = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay-funcionarios" onClick={onClose}>
        <div className="modal-content-funcionarios" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close-funcionarios" onClick={onClose}>X</button>
          {children}
        </div>
      </div>
    );
  };

function ActionsCard() {
  const [modalCadastro, setModalCadastro] = useState(false);
  const [modalFuncionarios, setModalFuncionarios] = useState(false);

  const openCadastro = () => setModalCadastro(true);
  const closeCadastro = () => setModalCadastro(false);

  const openFuncionarios = () => setModalFuncionarios(true);
  const closeFuncionarios = () => setModalFuncionarios(false);

  const handleCardClick = (action) => {
    switch (action) {
      case "openCadastro":
        openCadastro();
        break;
      default:
        console.log('Nenhuma ação implementada');
    }
  };

  return (
    <>
      <div className='container_icons'>
        {cards.map((card, index) => (
          <button className="card" key={index} onClick={() => handleCardClick(card.action)}>
            <div className="icon">
              <FontAwesomeIcon icon={card.icon} size="2x" />
              <h3>{card.title}</h3>
            </div>
          </button>
        ))}
      </div>

      {/* Modal de Cadastro */}
      <Modal isOpen={modalCadastro} onClose={closeCadastro}>
        <h2>Cadastro</h2>
        <p>Escolha algo para cadastrar:</p>

        <div className="lista_cadastrar">
          <ul>
            <strong>Estoque e Compras</strong>
            <li><a>Grupos</a></li>
            <li><a>Fabricantes</a></li>
            <li><a>Mercadorias</a></li>

            <strong>Pessoas</strong>
            <li><a>Clientes</a></li>
            <li>
              <a onClick={openFuncionarios}>Funcionários / Permissões</a>
            </li>
            <li><a>Indicadores</a></li>
            <li><a>Fornecedores</a></li>
            <li><a>Transportadoras</a></li>

            <strong>Configurações</strong>
            <li><a>Configurações gerais</a></li>
            <li><a>Empresas</a></li>
            <li><a>Ambientes da agenda</a></li>
          </ul>
        </div>
      </Modal>

      {/* Modal de Funcionários / Permissões */}
        <ModalFuncionarios isOpen={modalFuncionarios} onClose={closeFuncionarios}>
            <FuncionariosForm />
        </ModalFuncionarios>
    </>
  );
}

export default ActionsCard;