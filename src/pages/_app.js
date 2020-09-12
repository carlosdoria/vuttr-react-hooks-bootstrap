// Documento utilizado para adicionar os CSS globais, bem como para inserir dados adicionais nas páginas.

import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';

// Importado os styles globais
import '../globalStyles/globalStyles.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Tag criada para alterar o nome da aba de aplicação */}
        <title>
          VUTTR
        </title>
        {/* meta criado para gerar um descrição da aplicação no código fonte da página e assim melhorar o SEO dela */}
        <meta nema='description' content='Aplicação front para lidar com uuma VUTTR (Very Useful Tools to Remember).' />

        {/* Importa a fonte Questrial */}
        <link href="https://fonts.googleapis.com/css2?family=Questrial&display=swap" rel="stylesheet"/>

        {/* Importa a fonte Bebas Neue Regular */}
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"></link>

        {/* Importa a fonte Open Sans Regular */}
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"/>

      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
