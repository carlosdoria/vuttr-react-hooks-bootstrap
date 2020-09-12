// Documento criado para gerênciar a base URL e os parametros da busca, reduzindo importações e definições desnecessárias no context.

import axios from 'axios'

  // Variável criada para facilitar a troca da URL e assim permitir sua reutilização.
  const Api = axios.create({
    baseURL: 'http://localhost:4000/tools'
  });

  // Variáveis criadas para facilitar a definição e reutilização dos parametros de busca.
  const searchGlobal = '?q='
  const searchTags = '?tags_like='



export { Api,searchGlobal, searchTags };
