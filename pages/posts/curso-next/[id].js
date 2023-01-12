import dados from '../../../src/dados.json';
import Link from '../../../src/components/Link';
import Title from '../../../src/components/Title';

import genericPostScreen from '../../../src/screens/genericPostScreen';
export default genericPostScreen;

export async function getStaticPaths() {
    //gera os paths existentes dinamicamente com base nos dados
    const paths = dados.posts.map((post) => {
        return {
            params: { id: post.id }
        }
    })
    return {
      paths: paths,
      fallback: false,
    }
  }

export async function getStaticProps(context) {
    const id = context.params.id;

    //pega o post certo dos dados para retornar
    const post = dados.posts.find((currentPost) => {
        if(currentPost.id === id) {
          return true;
        }
        return false;
      })

    return {
      props: {
        id: id,
        title: post.title,
        content: post.content
      }
    }
  }