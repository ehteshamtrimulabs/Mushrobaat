import React from 'react';

import styled from 'styled-components/native';

interface Props {}

const Container = styled.View`
  height: 170px;
  width: 105px;
  background-color: white;
  margin-left: 20px;
  border-radius: 20px;
`;
const CategoryItem = (props: Props) => {
  return <Container></Container>;
};

export default CategoryItem;
