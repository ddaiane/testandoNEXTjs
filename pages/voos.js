import axios from 'axios';

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

    let voos = await axios.get(`https://aerodatabox.p.rapidapi.com/flights/airports/icao/SBPA/2023-01-12T12:15/2023-01-12T20:00`, options);
    voos = voos.data;
    voos = voos && voos.length > 0 ? voos.reverse() : voos
    return {
      props: {
        voos: voos
      }
      //revalidate: 30
    }
  }