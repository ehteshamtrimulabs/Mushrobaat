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
  var items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
  ];

  //   items.sort(function (a, b) {
  //     return a.value - b.value;
  //   })

  // sort by name
  var sortedItems = items.sort((a, b) => {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA > nameB) {
      return -1;
    }
    if (nameA < nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
  console.log(sortedItems);

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
