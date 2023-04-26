import { useState } from 'react';
import Layout from '../layout/Layout';
import { createAdvert } from './service';

const NewAdvertPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [advert, setAdvert] = useState({
    name: '',
    sale: false,
    price: 0.001,
    tags: '',
    // photo: '',
  });

  const handleChange = (event) => {
    setAdvert({
      ...advert,
      [event.target.name]: event.target.value,
    });
  };

  const buttonEnabled = advert.name && advert.price && advert.tags;
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    const advertResponse = await createAdvert(advert);
    setIsLoading(false);
    // navigate(`/tweets/${tweet.id}`);
  };
  return (
    <Layout>
      <h2>New Advert Page</h2>
      <form onSubmit={handleSubmit}>
        <label for='name'> Nombre</label>
        <input
          type='text'
          id='name'
          name='name'
          required
          onChange={handleChange}
          value={advert.name}
        />
        <label for='sale'> Se vende?</label>
        <input
          type='checkbox'
          id='sale'
          name='sale'
          required
          onChange={handleChange}
          value={advert.sale}
        />
        <label for='price'> Precio</label>
        <input
          type='numeric'
          id='price'
          name='price'
          required
          onChange={handleChange}
          value={advert.price}
        />
        <label for='tags'></label>
        <select
          name='tags'
          id='tags'
          required
          onChange={handleChange}
          value={advert.tag}
        >
          <option value=''> </option>
          <option value='lifestyle'>lifestyle </option>
          <option value='mobile'>mobile</option>
          <option value='motor'>motor</option>
          <option value='work'>work</option>
        </select>
        <button type='submit' disabled={!buttonEnabled}>
          Crear advert
        </button>
      </form>
    </Layout>
  );
};

export default NewAdvertPage;
