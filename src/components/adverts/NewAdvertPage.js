import { useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import { createAdvert, getTags } from './service';
import { useNavigate } from 'react-router-dom';

const NewAdvertPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();

  const [advert, setAdvert] = useState({
    name: '',
    sale: false,
    price: 0.001,
    tags: '',
    photo: '',
  });
  useEffect(() => {
    async function getData() {
      try {
        const tagsQuery = await getTags();
        setTags(tagsQuery);
      } catch (error) {}
    }
    getData();
  }, []);
  const handleChange = (event) => {
    setAdvert({
      ...advert,
      [event.target.name]:
        event.target.type === 'file'
          ? event.target.files[0]
          : event.target.value,
    });
  };

  const buttonEnabled = advert.name && advert.price && advert.tags;
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    let body = new FormData();
    Object.entries(advert).forEach(([key, value]) => {
      body.append(key, value);
    });
    const advertResponse = await createAdvert(body);
    setIsLoading(false);
    navigate(`/adverts/${advertResponse.id}`);
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
          {tags.map((tag) => {
            return <option value={tag}>{tag} </option>;
          })}
        </select>
        <br />
        <label for='photo'>Foto</label>
        <input type='file' id='photo' name='photo' onChange={handleChange} />
        <button type='submit' disabled={!buttonEnabled}>
          Crear advert
        </button>
      </form>
    </Layout>
  );
};

export default NewAdvertPage;
