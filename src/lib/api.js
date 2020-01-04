import axios from 'axios';

export const getCharactersByName = async name => {
  const { data } = await axios.get(
    `https://rickandmortyapi.com/api/character/?name=${name}`,
  );
  return data;
};
export const getAllCharacters = async () => {
  const { data } = await axios.get(
    `https://rickandmortyapi.com/api/character/`,
  );
  return data;
};
