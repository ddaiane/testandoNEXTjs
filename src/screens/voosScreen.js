import Link from "../components/Link";
import PageTitle from "../components/PageTitle";
import Title from "../components/Title";

export default function faqScreen({voos}) {
  const voosOrdenado = voos.departures ? voos.departures.reverse() : voos; //saida mais próxima primeiro;
  
    return (
      <>
      <PageTitle>VOOS</PageTitle>
      <Title as="h2">Não aguenta mais Porto Alegre?</Title>
      <h3>Então pega ai o próximo voo pra ir embora daqui:</h3>
      <div>
        {voos.departures.map((voo) => {
            const arrivalHour = new Date(voo.arrival.scheduledTimeLocal);
            return (
                <>
                <Title as="h3">{`O voo ${voo.number} da ${voo.airline.name} chega as ${arrivalHour.getHours()}h e ${arrivalHour.getMinutes()} minutos em ${voo.arrival.airport.name}`}</Title>
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