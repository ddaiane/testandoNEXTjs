import Link from "../components/Link";
import Title from "../components/Title";

export default function SsrScreen({retorno}) {
    return (
        <>
        <h2> {retorno} </h2>
        <Link href="/">
        Ir para home
      </Link>
        </>
    )
}