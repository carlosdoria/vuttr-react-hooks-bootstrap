// Esse modal informa ao cliente que a sua ferramenta foi adicionada com sucesso.
// Foi utilizado modal no lugar de um Toast, pois encontrei alguns problemas na utilização do toast.

import { Modal, ModalHeader, ModalBody } from 'reactstrap';

function ModalSucess (props) {
  return(
    props.method === 'delete' ?
      <Modal isOpen={props.visible} modalTransition={{ timeout: 400 }}>
        <ModalHeader>Success</ModalHeader>
        <ModalBody>
          Tool successfully deleted!
        </ModalBody>
      </Modal>
    :
      <Modal isOpen={props.visible} modalTransition={{ timeout: 400 }}>
        <ModalHeader>Success</ModalHeader>
        <ModalBody>
          Tool successfully registered!
        </ModalBody>
      </Modal>
  )
}

export default ModalSucess
