import Link from "../src/components/Link";

//renderizando o conteudo direto da page
export default function SsgScreen({retorno}) {
    return (
        <>
        <h2> {retorno} </h2>
        <Link href="/">
            Ir para home
        </Link>
        </>
    )
}


export async function getStaticProps() {
    return {
        props: {
            retorno: 'Fui gerada durante o build!'
        }
    }
}