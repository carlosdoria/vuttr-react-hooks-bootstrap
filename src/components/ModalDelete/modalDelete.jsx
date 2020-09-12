import { useState,useContext } from 'react';
import { ToolsContext } from '../../context/context';

import ModalSucess from '../ModalSucess/modalSucess';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function ModalDelete (props) {

  // useContext utilizado para importar funcionalidade do context.
  const context = useContext(ToolsContext);

  // State responsável por controlar quando o modalNewTool deve aparecer em tela.
  const [modal, setModal] = useState(false);

  // State responsável por controlar visibilidade o sucessModal deve aparecer em tela.
  const [sucessDeleteTool, setSucessDeleteTool] = useState(false);

  // Altera o estado/visibilidade do modal entre true e false.
  const toggle = () => setModal(!modal);

  // Chama a função deleteCard do context para deletar um Card de acordo com a propriedade que lhe é passada, bem faz a altenância do estado do modal.
  const deleteAndToggleModal = () => {
    context.deleteCard(props.id)

    // Torna visível o setSucessDeleteTool, para informar ao cliente que a ferramenta foi deletada com sucesso.
    setSucessDeleteTool(true)

    // Aguarda 1.5s para mudar o state setSucessDeleteTool para false.
    setTimeout( () => setSucessDeleteTool(false), 1500)
    toggle()
  }

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        X Remove
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader
          toggle={toggle}
          >
          <strong>X</strong> Remove Tool
        </ModalHeader>
        <ModalBody>
          Are you sure you wan't to remove this tool
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
          <Button color="danger" onClick={() => deleteAndToggleModal()}>
            Yes, remove
          </Button>{' '}
        </ModalFooter>
      </Modal>
      {/* Utilizado prop drilling para informar se o ModalSucess deve estar visível ou não */}
      <ModalSucess visible={sucessDeleteTool} method='delete' />
    </div>
  );
}

export default ModalDelete;
