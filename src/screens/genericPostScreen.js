import PageTitle from "../components/PageTitle";
import Title from "../components/Title";
import Link from "../components/Link";

export default function genericPostScreen(props) {
    //mostra na tela os dados de cada post ao acessar a url de cada um
        return (
            <>
            <PageTitle>{props.title}</PageTitle>
    
            <Title as="h2">{props.title}</Title>
            <p>{props.content}</p>
            <Link href="/">
                Ir para home
            </Link>
            </>
        )
    }