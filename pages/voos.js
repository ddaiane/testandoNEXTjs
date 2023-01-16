import axios from 'axios';
import moment from 'moment';

import voosScreen from '../src/screens/voosScreen';
export default voosScreen;

export async function getStaticProps(context) {
    const options = {
        params: {
          withLeg: 'true',
          direction: 'Departure',
          withCancelled: 'false',
          withCodeshared: 'true',
          withCargo: 'false',
          withPrivate: 'true',
          withLocation: 'false'
        },
        headers: {
          'X-RapidAPI-Key': 'c80ac8fd6emsh970574a3621d43ep15c71fjsn3a8039925b3b',
          'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com'
        }
      };

    const dateFormat = "YYYY[-]MM[-]DD[T]HH[:]mm";
    const startHour = moment().add(5, 'minutes').format(dateFormat);
    const endHour = moment().add(11, 'hours').format(dateFormat);
    
    let voos = await axios.get(`https://aerodatabox.p.rapidapi.com/flights/airports/icao/SBPA/${startHour}/${endHour}`, options);
    voos = voos.data;
    voos = voos && voos.length > 0 ? voos.reverse() : voos
    return {
      props: {
        voos: voos
      }
      //revalidate: 30
    }
  }