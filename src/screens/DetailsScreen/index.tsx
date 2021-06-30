import React from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {View, Text} from 'react-native';
import {RootStackParamList} from 'navigations/AppNavigator';
import {StackNavigationProp} from '@react-navigation/stack';
import styled from 'styled-components/native';
import Back from 'assets/icons/Back';
import IngredientItem from 'components/IngredientItem';

interface Props {}

type DetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Details'
>;
type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: 20px;
`;
const Content = styled.ScrollView`
  flex: 1;
`;

const Box = styled.View`
  padding: 0px 20px;
`;

const HeadingContainer = styled.View`
  margin-top: 30px;
`;

const TitleText = styled.Text`
  font-size: 32px;
  margin-top: 5px;
  font-weight: 700;
`;

const ServedInHeading = styled.Text`
  font-size: 14px;
  margin-top: 10px;
  color: #a59c9c;
`;

const SubtitleText = styled.Text`
  font-size: 24px;
  color: #e4723c;
  font-weight: 600;
  margin-top: 10px;
`;

const BackButton = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  border-width: 2px;
  border-color: #cdcdcd;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

const DrinkPicture = styled.Image`
  width: 100%;
  height: 240px;
  border-radius: 15px;
  margin-top: 15px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
`;

const IngredientsHeading = styled.Text`
  margin-top: 16px;
  font-size: 16px;
  font-weight: bold;
  color: black;
`;

const IngredientsContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
`;

const InstructionsButton = styled.TouchableOpacity`
  background-color: #f5ca48;
  width: 100%;
  height: 60px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const InstructionsButtonText = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: black;
`;

const DetailsScreen = (props: Props) => {
  const navigation = useNavigation<DetailsScreenNavigationProp>();
  const {params} = useRoute<DetailsScreenRouteProp>();
  return (
    <Container>
      <Content>
        <Box>
          <BackButton onPress={() => navigation.goBack()}>
            <Back />
          </BackButton>
          <HeadingContainer>
            <TitleText>3-Mile Long Island Iced Tea</TitleText>
            <ServedInHeading>Served in:</ServedInHeading>
            <SubtitleText>Collins Glass</SubtitleText>
            <DrinkPicture source={require('assets/drink.png')} />
            <IngredientsHeading>Ingredients</IngredientsHeading>
            <IngredientsContainer>
              <IngredientItem />
              <IngredientItem />
              <IngredientItem />
            </IngredientsContainer>
            <InstructionsButton>
              <InstructionsButtonText>See Instructions</InstructionsButtonText>
            </InstructionsButton>
          </HeadingContainer>
        </Box>
      </Content>
    </Container>
  );
};

export default DetailsScreen;
