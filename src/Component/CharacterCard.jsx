import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CharacterContainer = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  padding-right: 5px;
  padding-left: 5px;
  box-sizing: border-box;
  .card {
    border: none;
    position: relative;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;

    img {
      width: 100%;
      border-top-left-radius: 7px;
      border-top-right-radius: 7px;
      margin-top: 5px;
    }
  }
  @media (min-width: 576px) {
    flex: 0 0 25%;
    max-width: 25%;
  }
`;

const CharacterData = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: #000000;
  opacity: 0.6;
  padding: 7px 10px;
`;

const CharacterDetail = styled.div`
  background: #312c2c;
  padding: 15px;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
`;

const UL = styled.ul`
  padding: 0;
  margin: 0;
  height: 205px;
`;

const LI = styled.li`
  font-size: 12px;
  list-style: none;
  color: #fff;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  text-transform: uppercase;
  :not(:last-child) {
    border-bottom: 1px solid #504949;
  }
`;

const CharacterHeader = styled.div`
  padding: 7px 10px;
  h3 {
    font-size: 16px;
    color: #fff;
    margin: 0;
    line-height: 30px;
    @media (min-width: 576px) {
      font-size: 18px;
    }
  }
  p {
    font-size: 10px;
    color: #fff;
    margin: 0;
    line-height: 18px;
    @media (min-width: 576px) {
      font-size: 13px;
    }
  }
`;

const SPAN = styled.span`
  width: 30%;
`;

const InfoSpan = styled(SPAN)`
  color: #ec8624;
  text-transform: capitalize;
  width: 60%;
  text-align: right;
`;

/**
 *
 *@discription - This function is render the character card component
 @return - Jsx of the charater card section
 */
const CharacterCard = ({ character }) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <CharacterContainer>
    <div className="card">
      <img src={character.image} alt={character.name} />
      <CharacterData>
        <CharacterHeader>
          <h3>{character.name}</h3>
          <p> id: {character.id} - created 2 years ago </p>
        </CharacterHeader>
      </CharacterData>
    </div>
    <CharacterDetail>
      <UL>
        <LI>
          <SPAN>Status</SPAN>
          <InfoSpan>{character.status}</InfoSpan>
        </LI>
        <LI>
          <SPAN>Species</SPAN>
          <InfoSpan>{character.species}</InfoSpan>
        </LI>
        <LI>
          <SPAN>Gender</SPAN>
          <InfoSpan>{character.gender}</InfoSpan>
        </LI>
        <LI>
          <SPAN>Origin</SPAN>
          <InfoSpan>{character.origin.name}</InfoSpan>
        </LI>
        <LI>
          <SPAN>Last Location</SPAN>
          <InfoSpan>{character.location.name}</InfoSpan>
        </LI>
      </UL>
    </CharacterDetail>
  </CharacterContainer>
);

CharacterCard.propTypes = {
  character: PropTypes.instanceOf(Object),
};

export default CharacterCard;
