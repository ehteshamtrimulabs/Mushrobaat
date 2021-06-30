import React from 'react';
import {ImageSourcePropType} from 'react-native';
import styled from 'styled-components/native';

const TouchableOpacity = styled.TouchableOpacity`
  margin: 20px 20px 0px 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
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
  margin-top: 30px;
`;

const TitleText = styled.Text`
  color: black;
  font-size: 14px;
  font-weight: 600; ;
`;

const SubtitleText = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: #a59c9c;
`;

const CategoryBackground = styled.View`
  position: absolute;
  bottom: 0px;
  background-color: #e4723c;
  border-top-right-radius: 25px;
  height: 55px;
  width: 90px;
  align-items: center;
  justify-content: center;
`;

const CategoryText = styled.Text`
  font-size: 12px;
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
  image: ImageSourcePropType;
}

const DrinkItem = ({onPress, title, subtitle, category, image}: Props) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <Container>
        <InfoContainer>
          <TextContainer>
            <TitleText>{title}</TitleText>
            <SubtitleText>{subtitle}</SubtitleText>
          </TextContainer>
          <CategoryBackground>
            <CategoryText>{category}</CategoryText>
          </CategoryBackground>
        </InfoContainer>
        <ImageContainer>
          <DrinkImage source={image} />
        </ImageContainer>
      </Container>
    </TouchableOpacity>
  );
};

export default DrinkItem;
