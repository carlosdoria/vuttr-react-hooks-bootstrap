import {useEffect, useContext} from 'react';
import { ToolsContext } from '../../context/context';

import ModalNewTool from '../ModalNewTool/modalNewTool';
import AlertNotFound from '../AlertNotFound/alertNotFound';
import Cards from '../Card/card'

import { InputGroup, Input, Alert } from 'reactstrap';
import { Bar, InputCheckBox, P, ListCard } from './styles';


function CardList() {

  // useContext utilizado para importar funcionalidade do context
  const context = useContext(ToolsContext);

  // useEffect utilizado para fazer a renderização da lista. Os parametros passados no final do useEffect fazendo com que a lista seja renderizada sempre que eles forem alterados.
  useEffect(() => {
    context.renderList()
  }, [ context.search, context.tagsSearch ])

  return(
    <>
      <Bar>
        <InputGroup className='w-75 d-flex align-items-center justify-self-between'>
          <Input
            className='w-25'
            type='text'
            placeholder='Search'
            value={context.search}
            onChange={ e => context.changeWordSearch(e.target.value) }
            />
          <InputCheckBox
            type="checkbox"
            onClick={() => context.changeParamSearch()}
            />
          <P>search in tags only</P>
        </InputGroup>
        {/* Rederiza o ModalNewTool que é responsável por adicionar novas ferramentas. */}
        <ModalNewTool />
      </Bar>
      <ListCard>
        {/* Operador Ternário utilizado para verificar se o valor da lista é igual a "" e o valor do input do search é direfente de "", nesse caso ele trás um card informando que a tool não existe, caso um deles seja false são renderizados os cards encontrados. */}
        {
        context.list == '' && context.search != '' ?
          // Rederiza um Card informando que a ferramenta não foi encontrada.
          <AlertNotFound />
        :
          // Rederiza um Card para cada elemento dentro do state list, o qual está dentro do context.
          <Cards />
        }
      </ListCard>
    </>
  )
}

export default CardList
