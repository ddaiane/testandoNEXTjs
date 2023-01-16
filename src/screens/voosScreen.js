import moment from 'moment';
moment.locale('pt-BR')

import Link from "../components/Link";
import PageTitle from "../components/PageTitle";
import Title from "../components/Title";

export default function faqScreen({voos}) {
  const voosOrdenado = voos.departures ? voos.departures.reverse() : voos; //saida mais próxima primeiro;
  const voo = voos.departures[0];
  const arrivalHour = new Date(voo.arrival.scheduledTimeLocal);
  const departureHour = moment(voo.departure.actualTimeLocal).format("H:mm");
  // const arrivalIn = moment(voo.arrival.scheduledTimeLocal).locale('pt-BR').fromNow();
  //const arrivalText = `Você pode estar fora dessa cidade maldita ${arrivalIn}!!!`;
  
    return (
      <>
      <PageTitle>CHEGA</PageTitle>
      <Title as="h2">Também não aguenta mais Porto Alegre?</Title>
      <h3>O próximo voo saindo de Porto Alegre pra ir embora daqui é</h3>
        <Title as="h3">{`o voo ${voo.number} da ${voo.airline.name} que sai as ${departureHour} e chega as ${arrivalHour.getHours()}h e ${arrivalHour.getMinutes()} minutos em ${voo.arrival.airport.name}`}</Title>
      <Link href="/">
        Ir para home
      </Link>
      
        </>
    )
  }