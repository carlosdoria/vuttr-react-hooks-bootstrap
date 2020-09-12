import { useContext} from 'react';
import { ToolsContext } from '../../context/context';

import ModalDelete from '../ModalDelete/modalDelete'

import { Card, CardHeader , CardText, CardBody } from 'reactstrap';
import { Tags } from './styles.js';

function Cards () {

  // Usei o context para passar diretamente as prorpiedade de cada card, bem como evitar o prop drilling.
  const context = useContext(ToolsContext);

  return(
    <>
    {context.list.map( item => (
            <Card
              className='m-4'
              key={item.id}
              >
              <CardHeader
                tag="h3"
                className='d-flex justify-content-between'
                >
                <a
                  href={item.link}
                  // Target usado para abrir o link em uma nova aba.
                  target='_black'
                  >
                  {item.title}
                </a>
                {/* Responsável por chamar o ModalDelete, nesse caso preferi fazer o prop drilling para poder usar o Id do item de uma forma mais pratica. */}
                <ModalDelete id={item.id}/>
              </CardHeader>
              <CardBody>
                <CardText>
                  {item.description}
                </CardText>
                {/* Map utilizado para renderizar cada elemento dentro da tag com um # antes. */}
                <Tags>
                  {item.tags.map( tag => (
                    `#${tag} `
                  ))}
                </Tags>
              </CardBody>
            </Card>
          ))}
    </>
  )
}

export default Cards
