import NavBar from './components/NavBar';
import Logo from './components/Logo';
import ListLinks from './components/ListLinks';
import links from './components/NavBar/mockLinks';

function Home() {
  return (
    <section>
      <NavBar>
        <Logo logo="logo" />
        <ListLinks links={links} />
      </NavBar>
    </section>
  );
}

export default Home;
