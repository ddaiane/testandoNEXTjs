import axios from 'axios';

import faqScreen from "../src/screens/faqScreen";

//renderiza componente faqScreen onde esta o conteudo da pagina
export default faqScreen;

//static props buscando em api (apenas busca no build e os dados se mantem estaticos iguais ate proximo build)
  export async function getStaticProps() {
    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
    let faq = await axios.get(FAQ_API_URL);
    faq = faq.data;

    return {
      props: {
          faq
      },
    };
} 