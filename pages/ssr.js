import SsrScreen from "../src/screens/ssrScreen";

//renderizando com componente separado
export default SsrScreen;

//adquirindo dados dinamicamente e renderizando no servidor
export async function getServerSideProps() {
    console.log("pegando props serverside dinamicamente")
    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
    const faq = await fetch(FAQ_API_URL)
        .then((respostaDoServidor) => {
            return respostaDoServidor.json();
        })
        .then((resposta) => {
            return resposta;
        });

    return {
        props: {
            retorno: faq[0].answer
        }
    }
}