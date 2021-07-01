import React, { useState } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { View, Modal } from "react-native";
import { RootStackParamList } from "navigations/AppNavigator";
import { StackNavigationProp } from "@react-navigation/stack";
import styled from "styled-components/native";
import Back from "assets/icons/Back";
import IngredientItem from "components/IngredientItem";
import LanguageBar from "components/LanguageBar";
import Left from "assets/icons/Left";
import Right from "assets/icons/Right";

const Container = styled.SafeAreaView`
  flex: 1;
`;

const Content = styled.ScrollView<{ color: string; opacity?: number }>`
  padding-top: 10px;
  flex: 1;
  background-color: ${({ color }) => color};
  opacity: ${({ opacity }) => (opacity ? opacity : 1)};
`;

const Box = styled.View`
  padding: 0px 20px;
`;

const HeadingContainer = styled.View`
  margin-top: 30px;
`;

const TitleText = styled.Text`
  font-size: 32px;
  font-family: Montserrat;

  margin-top: 5px;
  font-weight: 700;
  min-height: 70px;
`;

const ServedInHeading = styled.Text`
  font-size: 14px;
  font-family: Montserrat;

  margin-top: 10px;
  color: #a59c9c;
`;

const SubtitleText = styled.Text`
  font-size: 24px;
  color: #e4723c;
  font-family: Montserrat;

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
  font-family: Montserrat;

  font-weight: bold;
  color: black;
`;

const IngredientsContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
`;

const CategoriesList = styled.FlatList``;

const ModalToggleButton = styled.TouchableOpacity<{ color: string }>`
  height: 60px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin: 20px 20px 0px 20px;
  background-color: ${({ color }) => color};
`;

const ModalToggleButtonText = styled.Text<{ color: string }>`
  font-size: 18px;
  font-family: Montserrat;

  font-weight: 700;
  color: ${({ color }) => color};
`;

const ModalSafeArea = styled.SafeAreaView`
  flex: 1;
`;

const InactiveArea = styled.TouchableOpacity`
  flex: 1;
`;

const ModalBackground = styled.View`
  flex: 2.3;
  margin: 0px 20px;
`;

const ModalContainer = styled.View`
  flex: 1;
  background-color: white;
  border-width: 1px;
  border-color: #f5ca48;
  border-radius: 20px;
  padding: 0px;
`;

const ModalHeadingText = styled.Text`
  font-size: 32px;
  font-family: Montserrat;

  font-weight: 700;
  color: black;
  align-self: center;
  margin-top: 10px;
`;

const ModalSubHeadingText = styled.Text`
  font-size: 16px;
  font-family: Montserrat;

  font-weight: 600;
  color: #a59c9c;
  align-self: center;
`;

const InstructionsContainer = styled.View`
  flex-direction: row;
`;

const SideButtonContainer = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 100px 0px;
`;

const InstructionsList = styled.FlatList`
  margin-left: 10px;
  margin-top: 10px;
  flex: 8;
  margin-right: 10px;
  margin-bottom: 10px;
  padding-bottom: 10px;
  height: 300px;
`;

const InstructionTextContainer = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`;

const InstructionText = styled.Text`
  font-size: 18px;
  font-family: Montserrat;

  font-weight: 400;
  color: black;
  margin: 10px 20px 10px 0px;
`;

interface Props {}

type DetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Details"
>;
type DetailsScreenRouteProp = RouteProp<RootStackParamList, "Details">;

const DetailsScreen = (props: Props) => {
  const navigation = useNavigation<DetailsScreenNavigationProp>();
  const { params } = useRoute<DetailsScreenRouteProp>();

  const languages = [
    "Italy",
    "Germany",
    "UnitedKingdom",
    "France",
    "Spain",
    "China",
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [index, setIndex] = useState(2);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[2]);
  const [drink, setDrink] = useState({
    strGlass: "Collins Glass",
    strDrink: "3 Wise Men",
    strDrinkThumb:
      "https://www.thecocktaildb.com/images/media/drink/wxqpyw1468877677.jpg",
  });

  const changeLanguage = () => {
    setSelectedLanguage(languages[index]);
  };

  const goLeft = () => {
    if (index === 0) setIndex(5);
    else setIndex(index - 1);
    changeLanguage();
  };

  const goRight = () => {
    if (index === 5) setIndex(0);
    else setIndex(index + 1);

    changeLanguage();
  };

  const instructions = [
    {
      id: 1,
      text: "Fill 14oz glass with ice and alcohol.",
    },
    {
      id: 2,
      text: "Fill 2/3 glass with cola and remainder with sweet & sour.",
    },
    {
      id: 3,
      text: "Top with dash of bitters and lemon wedge.",
    },
  ];

  const ingredients = [
    {
      id: 1,
      title: "Gin",
      subtitle: "1/2 oz",
      image: require("assets/Gin.png"),
    },
    {
      id: 2,
      title: "Light Rum",
      subtitle: "1/2 oz",
      image: require("assets/LightRum.png"),
    },
    {
      id: 3,
      title: "Tequila",
      subtitle: "1/2 oz",
      image: require("assets/Tequila.png"),
    },
  ];

  return (
    <Container>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        collapsable
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <ModalSafeArea>
          <InactiveArea onPress={() => setModalVisible(false)} />
          <ModalBackground>
            <ModalContainer>
              <ModalHeadingText>Instructions</ModalHeadingText>
              <ModalSubHeadingText>(ENGLISH)</ModalSubHeadingText>
              <InstructionsContainer>
                <SideButtonContainer
                  onPress={() => {
                    goLeft();
                  }}
                >
                  <Left />
                </SideButtonContainer>
                <InstructionsList
                  data={instructions}
                  renderItem={({ item }) => (
                    <InstructionTextContainer>
                      <InstructionText>{"\u2022"}</InstructionText>
                      <InstructionText>{item.text}</InstructionText>
                    </InstructionTextContainer>
                  )}
                />
                <SideButtonContainer onPress={() => goRight()}>
                  <Right />
                </SideButtonContainer>
              </InstructionsContainer>
              <LanguageBar
                selected={selectedLanguage}
                onPress={(language) => setSelectedLanguage(language)}
              />
              <ModalToggleButton
                onPress={() => setModalVisible(false)}
                color={"#F26C68"}
              >
                <ModalToggleButtonText color="white">
                  CHEERS!
                </ModalToggleButtonText>
              </ModalToggleButton>
            </ModalContainer>
          </ModalBackground>
        </ModalSafeArea>
      </Modal>

      <Content
        opacity={modalVisible ? 0.7 : 1}
        color={modalVisible ? "rgba(0,0,0,0.5)" : "#F9F9FB"}
      >
        <Box>
          <BackButton onPress={() => navigation.goBack()}>
            <Back />
          </BackButton>
          <HeadingContainer>
            <TitleText>{drink.strDrink}</TitleText>
            <ServedInHeading>Served in:</ServedInHeading>
            <SubtitleText>{drink.strGlass}</SubtitleText>
            <DrinkPicture source={{ uri: drink.strDrinkThumb }} />
            <IngredientsHeading>Ingredients</IngredientsHeading>
          </HeadingContainer>
        </Box>
        <IngredientsContainer>
          <CategoriesList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={ingredients}
            renderItem={({ item }) => (
              <IngredientItem
                title={item.title}
                subtitle={item.subtitle}
                image={item.image}
              />
            )}
            ListFooterComponent={<View style={{ padding: 10 }} />}
          />
        </IngredientsContainer>

        <ModalToggleButton
          onPress={() => setModalVisible(true)}
          color={"#f5ca48"}
        >
          <ModalToggleButtonText color="black">
            See Instructions
          </ModalToggleButtonText>
        </ModalToggleButton>
      </Content>
    </Container>
  );
};

export default DetailsScreen;
