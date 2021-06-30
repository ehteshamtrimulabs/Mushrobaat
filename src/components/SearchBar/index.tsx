import Search from 'assets/icons/Search';
import React from 'react';
import styled from 'styled-components/native';

interface Props {}

const Container = styled.View`
  margin-top: 30px;
  margin-right: 20px;
  height: 45px;
  width: 100%;
  flex-direction: row;
  align-items: center;
`;
const TextInput = styled.TextInput`
  border-bottom-width: 2px;
  border-bottom-color: #a59c9c;
  color: #a59c9c;
  font-size: 14px;
  font-weight: 600;
  width: 100%;
  margin-left: 10px;
`;

const SearchBar = (props: Props) => {
  return (
    <Container>
      <Search />
      <TextInput placeholder="Search..." />
    </Container>
  );
};

export default SearchBar;
