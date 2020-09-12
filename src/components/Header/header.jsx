import { Container, Wrapper, Logo } from './styles';

function Header () {

  // Utilizei um Container e um Wrapper para fazer a estruturação e estilização do cabeçalho.
 return(
    <Container>
      <Wrapper>
        <a href='https://v4company.com/home/' target='_black'>
          <Logo
            src='Logo.png'
            alt='Quadrado com um V e um 4 representando a logo da empresa, e um texto ao lado com Company.com'/>
        </a>
      </Wrapper>
    </Container>
 )
}

export default Header
