import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import Menu from "assets/icons/Menu";
import CategoryItem from "components/CategoryItem";
import DrinkItem from "components/DrinkItem";
import ProfilePicture from "components/ProfilePicture";
import SearchBar from "components/SearchBar";
import SortModalListItem from "components/SortModalListItem";
import { RootStackParamList } from "navigations/AppNavigator";
import React from "react";
import { useState } from "react";
import { Modal } from "react-native";
import styled from "styled-components/native";

const Container = styled.SafeAreaView<{ color: string; opacity?: number }>`
  flex: 1;
  background-color: ${({ color }) => color};
  opacity: ${({ opacity }) => (opacity ? opacity : 1)};
`;

const Content = styled.View<{ color: string; opacity?: number }>`
  flex: 1;
  margin-top: 0px;
  background-color: ${({ color }) => color};
  opacity: ${({ opacity }) => (opacity ? opacity : 1)};
`;

const Box = styled.View`
  flex: 1;
  justify-content: flex-start;
  padding: 0px 20px;
`;

const TopBar = styled.View`
  width: 100%;
  height: 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Heading = styled.View`
  margin-top: 30px;
`;

const HeadingText1 = styled.Text`
  font-size: 16px;
  font-family: Montserrat;
`;

const HeadingText2 = styled.Text`
  font-size: 32px;
  font-family: Montserrat;

  margin-top: 5px;
  font-weight: 700;
`;

const TouchableOpacity = styled.TouchableOpacity``;

const CategoriesHeading = styled.Text`
  margin-top: 30px;
  font-weight: 700;
  font-size: 16px;
  font-family: Montserrat;
`;

const CategoriesView = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  flex-grow: 0;
`;

const CategoriesList = styled.FlatList``;

const ListView = styled.FlatList`
  flex-grow: 0;
  padding-top: 10px;
`;

const MenuButton = styled.TouchableOpacity``;

const ModalSafeArea = styled.SafeAreaView`
  flex: 1;
`;

const ModalContainer = styled.View`
  flex: 1;
  background-color: white;
  margin: 0px 20px;
  border-width: 1px;
  border-color: #f5ca48;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 10px;
`;

const InactiveArea = styled.TouchableOpacity`
  flex: 1;
`;

const Drag = styled.View`
  height: 5px;
  width: 45px;
  background-color: #cdcfd0;
  border-radius: 100px;
  align-self: center;
`;

const ModalHeadingText = styled.Text`
  margin-left: 20px;
  margin-top: 15px;
  font-size: 24px;
  font-family: Montserrat;

  font-weight: 700;
  color: black;
`;

const ModalOptionsListContainer = styled.View`
  margin-left: 20px;
  margin-top: 30px;
  flex: 1;
`;

const View = styled.View`
  padding: 10px;
`;

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;
type HomeScreenRouteProp = RouteProp<RootStackParamList, "Home">;

const HomeScreen = () => {
  const { navigate } = useNavigation<HomeScreenNavigationProp>();
  const { params } = useRoute<HomeScreenRouteProp>();

  const [modalVisible, setModalVisible] = useState(false);

  const [sortBy, setSortBy] = useState({
    latest: true,
    oldest: false,
    ascending: false,
    descending: false,
  });

  const sortByLatest = () => {
    setSortBy({
      latest: true,
      oldest: false,
      ascending: false,
      descending: false,
    });
  };

  const sortByOldest = () => {
    setSortBy({
      latest: false,
      oldest: true,
      ascending: false,
      descending: false,
    });
  };

  const sortByAscending = () => {
    setSortBy({
      latest: false,
      oldest: false,
      ascending: true,
      descending: false,
    });
  };

  const sortByDescending = () => {
    setSortBy({
      latest: false,
      oldest: false,
      ascending: false,
      descending: true,
    });
  };

  const [drinks, setDrinks] = useState([
    {
      strDrink: "3 Wise Men",
      strDrinkThumb:
        "https://www.thecocktaildb.com/images/media/drink/wxqpyw1468877677.jpg",
      idDrink: "13899",
    },
    {
      strDrink: "A Furlong Too Late",
      strDrinkThumb:
        "https://www.thecocktaildb.com/images/media/drink/ssxvww1472669166.jpg",
      idDrink: "17831",
    },
    // {
    //   strDrink: "A True Amaretto Sour",
    //   strDrinkThumb:
    //     "https://www.thecocktaildb.com/images/media/drink/rptuxy1472669372.jpg",
    //   idDrink: "17005",
    // },
    // {
    //   strDrink: "Arctic Mouthwash",
    //   strDrinkThumb:
    //     "https://www.thecocktaildb.com/images/media/drink/wqstwv1478963735.jpg",
    //   idDrink: "17118",
    // },
    // {
    //   strDrink: "Absolutly Screwed Up",
    //   strDrinkThumb:
    //     "https://www.thecocktaildb.com/images/media/drink/yvxrwv1472669728.jpg",
    //   idDrink: "16134",
    // },
  ]);

  const [categories, setCategories] = useState([
    {
      id: 1,
      category: "Ordinary Drink",
      image: require("assets/Ordinary.png"),
      selected: true,
    },
    {
      id: 2,
      category: "Coffee / Tea",
      image: require("assets/Coffee.png"),
      selected: false,
    },
    {
      id: 3,
      category: "Soft Drink / Soda",
      image: require("assets/SoftDrink.png"),
      selected: false,
    },
  ]);

  const selectedCategory = "Alcoholic";

  return (
    <Container
      opacity={modalVisible ? 0.7 : 1}
      color={modalVisible ? "rgba(0,0,0,0.5)" : "#F9F9FB"}
    >
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        collapsable
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <ModalSafeArea style={{ flex: 1 }}>
          <InactiveArea onPress={() => setModalVisible(false)} />
          <ModalContainer>
            <Drag />
            <ModalHeadingText>Sort</ModalHeadingText>
            <ModalOptionsListContainer>
              <SortModalListItem
                text="Latest"
                checked={sortBy.latest}
                onPress={sortByLatest}
              />
              <SortModalListItem
                text="Oldest"
                checked={sortBy.oldest}
                onPress={sortByOldest}
              />
              <SortModalListItem
                text="Ascending"
                checked={sortBy.ascending}
                onPress={sortByAscending}
              />
              <SortModalListItem
                text="Descending"
                checked={sortBy.descending}
                onPress={sortByDescending}
              />
            </ModalOptionsListContainer>
          </ModalContainer>
        </ModalSafeArea>
      </Modal>
      <Content
        opacity={modalVisible ? 0.7 : 1}
        color={modalVisible ? "rgba(0,0,0,0.5)" : "#F9F9FB"}
      >
        <ListView
          bounces={false}
          ListHeaderComponent={
            <>
              <Box>
                <TopBar>
                  <TouchableOpacity onPress={() => navigate("Profile")}>
                    <ProfilePicture image={require("assets/profile.png")} />
                  </TouchableOpacity>
                  <MenuButton onPress={() => setModalVisible(!modalVisible)}>
                    <Menu />
                  </MenuButton>
                </TopBar>
                <Heading>
                  <HeadingText1>Beverages</HeadingText1>
                  <HeadingText2>Mushrobaat</HeadingText2>
                </Heading>
                <SearchBar />
                <CategoriesHeading>Categories</CategoriesHeading>
              </Box>
              <CategoriesView>
                <CategoriesList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={categories}
                  renderItem={({ item }) => (
                    <CategoryItem
                      category={item.category}
                      selected={item.selected}
                      image={item.image}
                    />
                  )}
                  ListFooterComponent={<View />}
                />
              </CategoriesView>
            </>
          }
          data={drinks}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.idDrink}
          // initialNumToRender={100}
          renderItem={({ item }) => (
            <DrinkItem
              onPress={() => navigate("Details", { drinkId: item.idDrink })}
              title={item.strDrink}
              subtitle={"Collins Glass"}
              category={selectedCategory}
              image={`${item.strDrinkThumb}/preview`}
            />
          )}
        />
      </Content>
    </Container>
  );
};

export default HomeScreen;
