import { useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import { getAdverts } from './service';
import { Link } from 'react-router-dom';
import Advert from './Advert';

const AdvertsPage = () => {
  const [adverts, setAdverts] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const advertsResponse = await getAdverts();
      setAdverts(advertsResponse);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  const filteredAdvets = adverts.filter((advert) =>
    (advert.name ?? '').toUpperCase().startsWith(filterName.toUpperCase())
  );

  return (
    <Layout>
      <h1>ADVERTS PAGE </h1>
      <div>
        <label for='filterName'>Filtrar por nombre</label>
        <input
          id='filterName'
          type='text'
          onChange={(event) => setFilterName(event.target.value)}
          value={filterName}
        />
      </div>
      <ul>
        {filteredAdvets.map((advert) => (
          <li key={advert.id}>
            <Link to={`/adverts/${advert.id}`}>
              <Advert {...advert} />
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default AdvertsPage;
