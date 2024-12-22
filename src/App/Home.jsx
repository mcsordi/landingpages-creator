import Container from './components/Container';
import NavBar from './components/NavBar';
import Logo from './components/Logo';
import ListLinks from './components/ListLinks';

function Home() {
  return (
    <Container>
      <NavBar>
        <Logo logo="logo" />
        <ListLinks />
      </NavBar>
    </Container>
  );
}

export default Home;
