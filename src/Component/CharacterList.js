import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';

const CharacterListBody = styled.div`
  background: #000000;
  padding: 12px 8px 0 8px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
`;

/**
 *
 *@discription - This function is render the Character List section of the component
 @return - Jsx of the Character list section
 */
const CharacterList = ({ characters }) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <>
    <CharacterListBody>
      {characters.map(character => (
        <CharacterCard character={character} key={character.id} />
      ))}
    </CharacterListBody>
  </>
);
CharacterList.propTypes = {
  characters: PropTypes.instanceOf(Array),
};

export default CharacterList;
