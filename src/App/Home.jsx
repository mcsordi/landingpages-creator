import NavBar from './components/NavBar';
import Logo from './components/Logo';
import ListLinks from './components/ListLinks';
import links from './components/NavBar/mockLinks';
import GridTwoCols from './components/GridTwoCols';

function Home() {
  return (
    <section>
      <NavBar>
        <Logo logo="logo" />
        <ListLinks links={links} />
      </NavBar>
      <GridTwoCols source="./images/javascript.svg" />
    </section>
  );
}

export default Home;
