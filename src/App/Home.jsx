import Container from './components/Container';
import MenuLink from './components/MenuLink';
import NavBar from './components/NavBar';

function Home() {
  return (
    <Container>
      <NavBar>
        <div className="flex mx-auto items-center">
          <span>LOGO</span>
        </div>
        <div className="flex mx-auto flex-col md:flex-row">
          <MenuLink link={'https://www.google.com.br'} text={'google'} />
          <MenuLink link={'https://www.google.com.br'} text={'another'} />
          <MenuLink link={'https://www.google.com.br'} text={'another'} />
          <MenuLink link={'https://www.google.com.br'} text={'another'} />
          <MenuLink link={'https://www.google.com.br'} text={'another'} />
        </div>
      </NavBar>
    </Container>
  );
}

export default Home;
