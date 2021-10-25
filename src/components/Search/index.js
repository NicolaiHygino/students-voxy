import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { IconFieldWrapper, Input } from './style';

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <>
      <label htmlFor="searchTerm">Search</label>
      <IconFieldWrapper>
        <AiOutlineSearch />
        <Input
          id="searchTerm"
          name="searchTerm"
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </IconFieldWrapper>
    </>
  );
};

export default Search;

