import axios from 'axios';

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

    let post = await axios.get(`https://fakeapi-omariosouto.vercel.app/api/posts/${id}`);
    post = post.data;

    return {
      props: {
        id: id,
        title: post.title,
        content: post.content
      }
    }
  }