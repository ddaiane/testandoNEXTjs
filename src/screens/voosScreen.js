import Link from "../components/Link";
import PageTitle from "../components/PageTitle";
import Title from "../components/Title";

export default function faqScreen({voos}) {
  const voosOrdenado = voos.departures ? voos.departures.reverse() : voos; //saida mais próxima primeiro;
  const arrivalHour = new Date(voos.departures[0].arrival.scheduledTimeLocal);
  
    return (
      <>
      <PageTitle>CHEGA</PageTitle>
      <Title as="h2">Também não aguenta mais Porto Alegre?</Title>
      <h3>O próximo voo saindo de Porto Alegre pra ir embora daqui é</h3>
        <Title as="h3">{`o voo ${voos.departures[0].number} da ${voos.departures[0].airline.name} que chega as ${arrivalHour.getHours()}h e ${arrivalHour.getMinutes()} minutos em ${voos.departures[0].arrival.airport.name}`}</Title>
      <Link href="/">
        Ir para home
      </Link>
      
        </>
    )
  }