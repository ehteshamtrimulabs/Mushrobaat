import Next from "assets/icons/Next";
import React from "react";
import { ImageSourcePropType } from "react-native";

import styled from "styled-components/native";

const Container = styled.TouchableOpacity<{ color: string }>`
  height: 170px;
  width: 105px;
  background-color: ${({ color }) => color};
  margin-left: 20px;
  border-radius: 20px;
  margin-bottom: 20px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: center;
`;

const Image = styled.Image`
  height: 60px;
  width: 60px;
  margin-top: 10px;
`;

const Title = styled.Text`
  font-size: 14px;
  font-family: Montserrat;

  font-weight: 600;
  color: #313234;
  width: 80px;
  margin-top: 10px;
  text-align: center;
`;

const Icon = styled.View<{ color: string }>`
  width: 26px;
  height: 26px;
  margin-top: 10px;
  border-radius: 20px;
  background-color: ${({ color }) => color};
  align-items: center;
  justify-content: center;
`;

interface Props {
  image: ImageSourcePropType;
  category: string;
  selected: boolean;
}

const CategoryItem = ({ image, category, selected }: Props) => {
  return (
    <Container color={selected ? "#F5CA48" : "white"}>
      <Image source={image} />
      <Title>{category}</Title>
      <Icon color={selected ? "white" : "#f26c68"}>
        <Next />
      </Icon>
    </Container>
  );
};

export default CategoryItem;
