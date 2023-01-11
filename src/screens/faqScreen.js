import Link from "../components/Link";
import PageTitle from "../components/PageTitle";
import Title from "../components/Title";

export default function faqScreen({faq}) {
    return (
      <>
      <PageTitle>SSG</PageTitle>
      <Title as="h2">A outra pagina</Title>
      <div>
        {faq.map((item) => {
            return (
                <>
                <Title as="h3">{item.question}</Title>
                <p>{item.answer}</p>
                </>
            )
        })}
      </div>
      <Link href="/">
        Ir para home
      </Link>
      
        </>
    )
  }