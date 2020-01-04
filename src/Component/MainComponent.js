import React from 'react';
import Loader from 'react-loader';
import styled from 'styled-components';
import HeaderComponent from './HeaderComponent';
import CharacterList from './CharacterList';
import { getCharactersByName, getAllCharacters } from '../lib/api';

const AppContainer = styled.div`
  margin: 10px;
  margin-top: 30px;
`;
const HeaderSection = styled.section`
  padding-right: 5px;
  padding-left: 5px;
`;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  max-width: 1140px;
  margin: 15px auto;
  @media (max-width: 576px) {
    max-width: 100%;
    flex-direction: column;
  }
`;
const ResultsSection = styled.section`
  max-width: 1140px;
  margin: 0 auto;
`;
class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      results: [],
      notFound: false,
      isLoading: false,
      lastSearchValue: '',
      sorting: '',
    };
  }

  componentDidMount() {
    this.setState(state => ({
      isLoading: true,
      lastSearchValue: state.searchValue,
    }));
    getAllCharacters()
      .then(({ results }) =>
        this.setState({ results, notFound: false, isLoading: false }),
      )
      .catch(() =>
        this.setState({ notFound: true, results: [], isLoading: false }),
      );
  }

  /**
   *
   *@discription - This function is to set Search Value
   @param {String} e - Target value of Search
   */
  onHandleSearch = e => {
    this.setState({ searchValue: e.target.value });
  };

  /**
   *
   *@discription - This function is to search character by name
   */
  onHandleSubmit = () => {
    const { searchValue } = this.state;
    this.setState(state => ({
      isLoading: true,
      lastSearchValue: state.searchValue,
    }));
    getCharactersByName(searchValue)
      .then(({ results }) =>
        this.setState({ results, notFound: false, isLoading: false }),
      )
      .catch(() =>
        this.setState({ notFound: true, results: [], isLoading: false }),
      );
  };

  /**
   *
   *@discription - This function is to sort the character by name
   */
  setSorting = e => {
    this.setState({ sorting: e.target.value });
  };

  render() {
    const {
      notFound,
      results,
      isLoading,
      lastSearchValue,
      sorting,
    } = this.state;
    if (results) {
      switch (sorting) {
        case 'ascendant':
          results.sort((a, b) => a.id - b.id);
          break;
        case 'descendant':
          results.sort((a, b) => b.id - a.id);
          break;
        default:
          results.sort((a, b) => a.id > b.id);
      }
    }

    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <AppContainer>
        <HeaderSection>
          <HeaderContainer>
            <HeaderComponent
              handleSubmit={this.onHandleSubmit}
              handleSearch={this.onHandleSearch}
              setSorting={this.setSorting}/>
          </HeaderContainer>
        </HeaderSection>

        <ResultsSection>
          <Loader loaded={!isLoading}>
            {notFound ? (
              <p className="not-found">
                No results found for {lastSearchValue}
              </p>
            ) : (
              <CharacterList
                characters={results}
                searchValue={lastSearchValue}
              />
            )}
          </Loader>
        </ResultsSection>
      </AppContainer>
    );
  }
}

export default MainComponent;
