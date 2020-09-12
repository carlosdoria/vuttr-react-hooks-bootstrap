// Esse modal informa ao cliente que a sua ferramenta foi adicionada com sucesso.

import { Modal, ModalHeader, ModalBody } from 'reactstrap';

function ModalSucess (props) {
  return(
    props.method === 'delete' ?
      <Modal isOpen={props.visible} modalTransition={{ timeout: 400 }}>
        <ModalHeader>Sucess</ModalHeader>
        <ModalBody>
          Ferramenta deleteda com sucesso!
        </ModalBody>
      </Modal>
    :
      <Modal isOpen={props.visible} modalTransition={{ timeout: 400 }}>
        <ModalHeader>Sucess</ModalHeader>
        <ModalBody>
          Tool successfully registered!
        </ModalBody>
      </Modal>
  )
}

export default ModalSucess
