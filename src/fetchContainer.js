import axios from 'axios';

const BASA_URL = 'https://pixabay.com/api/';
const apiKey = '33121669-f13e2ba950735c35a1fd3ade1';

export async function onLoad(searchQuery, page) {
  const resp = await axios.get(
    `${BASA_URL}?key=${apiKey}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`
  );
  return resp;
}
