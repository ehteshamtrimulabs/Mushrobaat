import React from 'react';
import styled from 'styled-components/native';

interface Props {}

const Container = styled.View`
  width: 100px;
  height: 130px;
  margin-right: 20px;
  border-radius: 15px;
  background-color: white;
`;

const IngredientItem = (props: Props) => {
  return <Container></Container>;
};

export default IngredientItem;
