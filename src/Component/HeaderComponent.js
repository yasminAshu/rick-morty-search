/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FilterComponent = styled.div`
  width: auto;
  @media (max-width: 576px) {
    width: 100%;
  }
`;
const Label = styled.label`
  display: inline-block;
  margin-bottom: 0.5rem;
`;
const SearchInput = styled.input`
  display: block;
  width: auto;
  padding: 6px 12px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 8px;
  @media (max-width: 576px) {
    width: 90%;
  }
`;

const Search = styled.div`
  position: relative;
  display: flex;
  align-items: stretch;
`;

const Button = styled.button`
  color: #fff;
  background-color: #6c757d;
  border: none;
  border-radius: 8px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  height: 38px;
  margin-left: -4px;
`;

const Select = styled.select`
    margin-top: 34px;
    min-width: 160px;
    width: 100%;
    height: 30px;
}
`;

/**
 *
 *@discription - This function is render the header section of the component
 @return - Jsx of the Header section
 */
const HeaderComponent = props => {
  const { handleSearch, searchValue, handleSubmit, setSorting } = props;
  return (
    <>
      <FilterComponent>
        <Label htmlFor="search">Search by Name</Label>
        <Search>
          <SearchInput
            onChange={e => handleSearch(e)}
            id="search"
            type="text"
            placeholder="Character Name"
            value={searchValue}
          />
          <Button
            onClick={handleSubmit}
            onKeyPress={e => {
              if (e.keyCode === '13') {
                handleSubmit();
              }
            }}
            type="submit"
          >
            Search
          </Button>
        </Search>
      </FilterComponent>
      <FilterComponent>
        <Select onChange={e => setSorting(e)}>
          <option value="select">Sort by ID</option>
          <option value="ascendant">Ascending</option>
          <option value="descendant">Descending</option>
        </Select>
      </FilterComponent>
    </>
  );
};

HeaderComponent.propTypes = {
  handleSearch: PropTypes.func,
  searchValue: PropTypes.string,
  handleSubmit: PropTypes.func,
  setSorting: PropTypes.func,
};

export default HeaderComponent;
