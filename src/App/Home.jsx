import Container from './components/Container';
import Heading from './components/Heading';
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
    </Container>
  );
}

export default Home;
