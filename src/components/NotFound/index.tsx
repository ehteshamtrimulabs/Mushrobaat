import SearchLarge from "assets/icons/SearchLarge";
import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const HeadingText = styled.Text`
  color: #313234;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 28px;
  margin-top: 40px;
`;

const SubHeadingText = styled.Text`
  color: #313234;
  font-family: Montserrat;
  font-weight: 400;
  font-size: 17px;
  text-align: center;
  margin-top: 30px;
  width: 260px;
`;

interface Props {}

const NotFound = (props: Props) => {
  return (
    <Container>
      <SearchLarge />
      <HeadingText>Item not found</HeadingText>
      <SubHeadingText>
        Try searching for an item with a different keyword.
      </SubHeadingText>
    </Container>
  );
};

export default NotFound;
