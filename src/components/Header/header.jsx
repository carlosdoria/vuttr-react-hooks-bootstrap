import { Container, Wrapper, Logo } from './styles';

function Header () {

  // Utilizei um Container e um Wrapper para fazer a estruturação e estilização do cabeçalho.
 return(
    <Container>
      <Wrapper>
        <a href='https://v4company.com/home/' target='_black'>
          <Logo
            src='//d9hhrg4mnvzow.cloudfront.net/v4company.com/home/d88fcaeb-v4logo-ste-white_104w01704m014005003028.png'
            alt='Logo V4 Company Marketing Digital'/>
        </a>
      </Wrapper>
    </Container>
 )
}

export default Header
