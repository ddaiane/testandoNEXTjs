import genericPostScreen from '../../../src/screens/genericPostScreen';

export default genericPostScreen;


export async function getStaticPaths() {
    //deixa para gerar os paths sob demanda
    return {
      paths: [],
      fallback: 'blocking',
    }
  }

export async function getStaticProps(context) {
    const id = context.params.id;

    const post = await fetch(`https://fakeapi-omariosouto.vercel.app/api/posts/${id}`)
        .then((res) => res.json());


    return {
      props: {
        id: id,
        title: post.title,
        content: post.content
      }
    }
  }