import Container from './components/Container';
import Heading from './components/Heading';
import TextComponent from './components/TextComponent';
function Home() {
  return (
    <Container>
      <Heading
        font={`font-serrat`}
        size={'text-large'}
        Head={'h1'}
        weight={'font-800'}
      >
        O texto React
      </Heading>
      <Heading
        font={`font-serrat`}
        size={'text-small'}
        Head={'h1'}
        weight={'font-800'}
      >
        O segundo texto React
      </Heading>
      <TextComponent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        distinctio dolorum ab ex. Fugiat id nemo ea dolore sit. Esse voluptates
        quibusdam blanditiis ad consequuntur? Fuga eaque quidem harum laborum.
      </TextComponent>
    </Container>
  );
}

export default Home;
