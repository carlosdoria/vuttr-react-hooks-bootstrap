import { useState, useContext } from 'react';
import { ToolsContext } from '../../context/context';

import  ModalSucess from '../ModalSucess/modalSucess';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, FormGroup, Form, Label } from 'reactstrap';
import { Wrapper } from './styles';

function ModalNewTool () {

  // useContext utilizado para importar funcionalidade do context
  const context = useContext(ToolsContext);

  // State responsável por controlar quando o modalNewTool deve aparecer em tela.
  const [modal, setModal] = useState(false);

  // State responsável por controlar visibilidade o sucessModal deve aparecer em tela.
  const [sucessNewTool, setSucessNewTool] = useState(false);

  // State responsável por armazenar os valores dos inputs presentes no 'modalNewTool'. Não coloquei esse state no context, pois ele somente seria usado nessa parte do código.
  const [tools, setTools] = useState({
    title: '',
    link: '',
    description: '',
    tags: []
  })

  // Altera o estado/visibilidade do modal entre true e false, bem como zera os valores do 'tools'.
  const toggle = () => {
    setModal(!modal);
    setTools({
      title: '',
      link: '',
      description: '',
      tags: []
    })
  }

  // Armazena os valores dos input's no state tools.
  const handleChange = event => {
    // If utilizado para verificar se o conteúdo que esta sendo alterado é o das tag's.
    if (event.target.name === 'tags') {
      // Craiada variável para permitir a utilização do metódo split e assim criar um array de tag's, usei esse metódo para que no momento da renderização pudesse utilizar o .map para renderizar os elementos do array com um # antes.
      let word = event.target.value
      setTools({... tools, tags: word.split(' ')})
    } else {
      setTools({... tools, [event.target.name]: event.target.value})
    }
  }

    // Chama a função postNewTool do context para adicionar um novo tool, com as propriedades presentes no 'tools'.
  const submitTool = event => {
    event.preventDefault();
    context.postNewTool(tools)

    // Torna visivel o sucessNewTool, para informar ao cliente que a ferramenta foi adicionada com sucesso.
    setSucessNewTool(true)

    // Aguarda 1.5s para mudar o state sucessNewTool para false.
    setTimeout(() => setSucessNewTool(false), 1500)


    toggle()
  }

  // Utilizei a biblioteca do bootstrap para evitar a criação de um modal, desse modo precisei somente alterar algumas funcionalidades do modal.
  return(
    <Wrapper>
      <Button
        // color='secondary'
        className='w-100 d-flex justify-content-center'
        // style="background-color : #1282A2"
        onClick={toggle}>
        + Add
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          <strong>+</strong> Add new tool
        </ModalHeader>
          <ModalBody>
            {/* Criado id para o formulário abaixo, pois o botão responsável por acionar o seu submit esta fora do seu escopo */}
            <Form id='add-tool' onSubmit={submitTool}>
              <FormGroup>
                <Label>Tool Name</Label>
                <Input
                  type='text'
                  name='title'
                  placeholder='with a title'
                  onChange={handleChange}
                  required={true}/>
              </FormGroup>
              <FormGroup>
                <Label>Tool Link</Label>
                <Input
                  type='url'
                  name='link'
                  placeholder='with a link'
                  onChange={handleChange}
                  required={true}/>
              </FormGroup>
              <FormGroup>
                <Label>Tool Description</Label>
                <Input
                  type='textarea'
                  name='description'
                  placeholder='with a description'
                  onChange={handleChange}
                  required={true}/>
              </FormGroup>
              <FormGroup>
                <Label>Tags (don't use '#')</Label>
                <Input
                  type='text'
                  name='tags'
                  placeholder="with a tag's"
                  onChange={handleChange}
                  required={true}/>
              </FormGroup>
            </Form>
          </ModalBody>
        <ModalFooter>
          <Button color='secondary' onClick={toggle}>
            Cancel
          </Button>
          {/* Atributo form foi criado no botão abaixo, pois este encontra-se fora do formulário */}
          <Button color='primary' form='add-tool'>
            Add tool
          </Button>
        </ModalFooter>
      </Modal>
      {/* Utilizado prop drilling para informar se o ModalSucess deve estar visível ou não */}
      <ModalSucess visible={sucessNewTool} method='add' />
    </Wrapper>
  )
}

export default ModalNewTool
