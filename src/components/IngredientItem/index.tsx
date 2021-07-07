import React from "react";
import styled from "styled-components/native";
import { ImageSourcePropType } from "react-native";

const Image = styled.Image`
  width: 80px;
  height: 80px;
  align-self: center;
  margin-top: 10px;
`;

const Title = styled.Text`
  font-size: 14px;
  font-family: Montserrat;

  font-weight: 500;
  color: black;
  align-self: center;
`;

const Subtitle = styled.Text`
  font-size: 10px;
  font-family: Montserrat;

  font-weight: 500;
  color: #a59c9c;
  align-self: center;
`;

const Container = styled.TouchableOpacity`
  width: 100px;
  height: 130px;
  margin-left: 20px;
  border-radius: 15px;
  background-color: white;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.1);
  margin-bottom: 4px;
`;

interface Props {
  title: string;
  subtitle: string;
  image: ImageSourcePropType;
}

const IngredientItem = ({ image, title, subtitle }: Props) => {
  return (
    <Container>
      <Image source={image} />
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
};

export default IngredientItem;
