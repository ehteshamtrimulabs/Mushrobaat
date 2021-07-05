import React from "react";
import styled from "styled-components/native";

const TouchableOpacity = styled.TouchableOpacity`
  margin: 20px 20px 0px 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
`;

const Container = styled.View`
  flex: 1;
  height: 160px;
  background-color: white;
  border-radius: 25px;
  flex-direction: row;
  overflow: hidden;
`;

const InfoContainer = styled.View`
  flex: 1;
  height: 100%;
`;

const TextContainer = styled.View`
  width: 125px;
  margin-left: 20px;
  margin-top: 20px;
  padding-top: 10px;
  justify-content: space-between;
`;

const TitleText = styled.Text`
  color: black;
  font-size: 14px;
  font-weight: 600;
  font-family: Montserrat;
  max-height: 70px;
`;

const SubtitleText = styled.Text`
  font-size: 14px;
  font-family: Montserrat;
  font-weight: 500;
  color: #a59c9c;
  margin-top: 10px;
`;

const CategoryBackground = styled.View<{ color: string }>`
  position: absolute;
  bottom: 0px;
  background-color: ${({ color }) => color};
  border-top-right-radius: 25px;
  height: 55px;
  width: 90px;
  align-items: center;
  justify-content: center;
`;

const CategoryText = styled.Text`
  font-size: 12px;
  font-family: Montserrat;

  font-weight: 600;
  color: black;
`;

const ImageContainer = styled.View`
  height: 100%;
  flex: 1;
`;

const DrinkImage = styled.Image`
  height: 100%;
  width: 100%;
`;

interface Props {
  onPress: () => void;
  title: string;
  subtitle: string;
  category: string;
  image: string;
}

const DrinkItem = ({ onPress, title, subtitle, category, image }: Props) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <Container>
        <InfoContainer>
          <TextContainer>
            <TitleText>{title}</TitleText>
            <SubtitleText>{subtitle}</SubtitleText>
          </TextContainer>
          <CategoryBackground
            color={category === "Non Alcoholic" ? "#E4723C" : "#F5CA48"}
          >
            <CategoryText>{category}</CategoryText>
          </CategoryBackground>
        </InfoContainer>
        <ImageContainer>
          <DrinkImage source={{ uri: image }} />
        </ImageContainer>
      </Container>
    </TouchableOpacity>
  );
};

export default DrinkItem;
