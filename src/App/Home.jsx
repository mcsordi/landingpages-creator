import NavBar from './components/NavBar';
import Logo from './components/Logo';
import ListLinks from './components/ListLinks';
import links from './components/NavBar/mockLinks';
import BackgroundContainer from './components/BackgroundContainer';

function Home() {
  return (
    <section>
      <NavBar>
        <Logo logo="logo" />
        <ListLinks links={links} />
      </NavBar>
      <BackgroundContainer image>
        <div>
          <h1>Heading</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
            corporis molestiae facilis voluptatibus sapiente, dolorem unde et
            reiciendis repellendus consequatur sint, nemo libero quis fugiat
            culpa, officiis veritatis qui nobis! Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Illo corporis molestiae facilis
            voluptatibus sapiente, dolorem unde et reiciendis repellendus
            consequatur sint, nemo libero quis fugiat culpa, officiis veritatis
            qui nobis! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Illo corporis molestiae facilis voluptatibus sapiente, dolorem unde
            et reiciendis repellendus consequatur sint, nemo libero quis fugiat
            culpa, officiis veritatis qui nobis! Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Illo corporis molestiae facilis
            voluptatibus sapiente, dolorem unde et reiciendis repellendus
            consequatur sint, nemo libero quis fugiat culpa, officiis veritatis
            qui nobis! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Illo corporis molestiae facilis voluptatibus sapiente, dolorem unde
            et reiciendis repellendus consequatur sint, nemo libero quis fugiat
            culpa, officiis veritatis qui nobis!
          </p>
        </div>
      </BackgroundContainer>
    </section>
  );
}

export default Home;
