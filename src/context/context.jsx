import { useState, createContext } from 'react';
// import axios from 'axios';

import { Api, searchGlobal, searchTags } from '../services/api';

// Context utilizado para exportar e gerenciar estados e funcionalidades para toda a aplicação, evitando assim o prop drilling
export const ToolsContext = createContext();

const ToolsProvider = ({ children }) => {
  // Armazena a response da requisição.
  const [list, setList] = useState([]);

  // Armazenar o conteúdo que será pesquisado.
  const [search, setSearch] = useState('');

  // State necessário para poder usar o clear Timeout, pois essa funcionalidade exige que o setTimeout seja atribuido a uma variável.
  const [resetTime, setResetTime] = useState('');

  // Responsável por controlar o parametro da pesquisa(geral ou por tag's).
  const [tagsSearch, setTagsSearch] = useState(false);


  // Variável responsável por armazenar e controlar o parametro da busca. Operador tenário foi usado nesse documento a fim de evitar importação do useState no documento 'api.js'.
  const searchParams = tagsSearch ? searchTags : searchGlobal;

  const renderList = () => {
    // if responsável por verificar se já existe um setTimeout, no caso de seja existir esse vai ser excluido.
    if (resetTime) clearTimeout(resetTime)
    // setTimeout utilizado para reduzir o número de requisições.
    setResetTime(setTimeout( () => {
    Api.get(`${searchParams + search}`)
      .then(response => {
        setList(response.data)
      })
    }, 500))
  }

  // Atualiza a palavra da pesquisa.
  const changeWordSearch = word => {
    setSearch(word)
  }

  // Alterna o parametro de busca entre busca completa ou somente por tag's.
  const changeParamSearch = () => {
    setTagsSearch(!tagsSearch)
  }

  // Adiciona uma nova tool com as propriedades que lhe são passadas.
  const postNewTool = tool => {
    // O primeiro parametro encontra-se vazio, pois é obrigatório, entranto não foi preciso passar nenhum valor já que a base URL é definida no documento 'api.js'.
    Api.post('', tool)
      .then( response => {
        console.log(response.statusText)
      })
      // Criado setTimeout para permitir que a mensagem apareca.
      setTimeout( () => renderList(), 1500)
  }

  // Deleta um Card de acordo com o id que passado.
  const deleteCard = id => {
    Api.delete(`/${id}`);
    // Criado setTimeout para permitir que a mensagem apareca.
    setTimeout( () => renderList(), 1500)
  }

  return(
    <ToolsContext.Provider value={{ renderList, list,changeWordSearch, changeParamSearch, search, tagsSearch, postNewTool, deleteCard }}>
      {children}
    </ToolsContext.Provider>
  )

}

export default ToolsProvider;
