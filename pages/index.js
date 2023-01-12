import Link from '../src/components/Link';
import PageTitle from "../src/components/PageTitle";
import Title from '../src/components/Title';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}


export async function getServerSideProps() {
  console.log("definindo props serverside dinamicamente")
  const hrefPost = `/posts/curso-next/${getRandomInt(1, 4)}`;
  const incrementalHref = `/posts/incremental/${getRandomInt(1, 1000)}`

  return {
      props: {
          postHref: hrefPost,
          incrementalHref: incrementalHref
      }
  }
}


export default function HomePage({postHref, incrementalHref}) {
  return (
    <div>
      <PageTitle>Home</PageTitle>
      <Title as="h1">Title</Title>
      <Link href="/ssr">
        <h3>Encaminhamento para pagina com Server Side Rendering</h3> 
      </Link>
      <Link href="/ssg">
        <h3>Encaminhamento para pagina Static</h3>
      </Link>
      <Link href="/faq">
        <h3>SSG com dados de chamada externa</h3>
      </Link>
      <Link href={postHref}>
        <h3>Ir para um post dinamico aleatorio com getStaticPaths</h3>
      </Link>
      <Link href={incrementalHref}>
        <h3>Ir para um post dinamico aleatorio feito com incremental static generation</h3>
      </Link>
    </div>
  )
}