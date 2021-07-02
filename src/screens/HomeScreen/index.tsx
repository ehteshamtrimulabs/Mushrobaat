import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import Menu from "assets/icons/Menu";
import CategoryItem from "components/CategoryItem";
import DrinkItem from "components/DrinkItem";
import ProfilePicture from "components/ProfilePicture";
import SearchBar from "components/SearchBar";
import SortModalListItem from "components/SortModalListItem";
import { RootStackParamList } from "navigations/AppNavigator";
import React, { useEffect } from "react";
import { useState } from "react";
import { Modal } from "react-native";
import styled from "styled-components/native";

const Container = styled.SafeAreaView<{ color: string; opacity?: number }>`
  flex: 1;
  background-color: ${({ color }) => color};
  opacity: ${({ opacity }) => (opacity ? opacity : 1)};
`;

const TopContainer = styled.View`
  height: 60%;
`;
const Box = styled.View`
  flex: 1;
  padding: 0px 20px;
`;

const TopBar = styled.View`
  width: 100%;
  height: 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
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
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 16px;
  font-family: Montserrat;
`;

const CategoriesView = styled.View`
  align-items: center;
  justify-content: center;
`;

const CategoriesList = styled.FlatList``;

const ListView = styled.FlatList`
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
  const [drinks, setDrinks] = useState([]);
  const [categories, setCategories] = useState([
    {
      id: 1,
      category: "Alcoholic",
      categoryString: "Alcoholic",

      image: require("assets/Ordinary.png"),
      selected: true,
    },
    {
      id: 2,
      category: "Non Alcoholic",
      categoryString: "Non_Alcoholic",
      image: require("assets/Coffee.png"),
      selected: false,
    },
    {
      id: 3,
      category: "Optional Alcohol",
      categoryString: "Optional_Alcohol",

      image: require("assets/SoftDrink.png"),
      selected: false,
    },
  ]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchDrinks("Alcoholic");
  }, []);

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

  const changeCategory = (cat: string) => {
    let index = categories.findIndex((element) => element.selected === true);
    let newArray = [...categories];
    newArray[index] = { ...newArray[index], selected: false };

    index = categories.findIndex((element) => element.category === cat);

    newArray[index] = { ...newArray[index], selected: true };

    setCategories([...newArray]);
    fetchDrinks(newArray[index].categoryString);
  };

  const fetchSearchResults = (text: string) => {
    setLoading(true);
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`)
      .then((response) => response.json())
      .then((data) => {
        setDrinks(data.drinks);
      })
      .finally(() => setLoading(false));
  };

  const fetchDrinks = async (cat: string) => {
    setLoading(true);
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${cat}`)
      .then((response) => response.json())
      .then((data) => {
        setDrinks(data.drinks);
      })
      .finally(() => setLoading(false));
  };

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

      <TopContainer>
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
          <SearchBar onSubmit={(text) => fetchSearchResults(text)} />
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
                onPress={() => changeCategory(item.category)}
              />
            )}
            ListFooterComponent={<View />}
          />
        </CategoriesView>
      </TopContainer>
      {loading ? (
        <View></View>
      ) : (
        <ListView
          data={drinks}
          disableVirtualization
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.idDrink}
          ListFooterComponent={<View />}
          renderItem={({ item }) => (
            <DrinkItem
              onPress={() => navigate("Details", { drinkId: item.idDrink })}
              title={item.strDrink}
              subtitle={"Collins Glass"}
              category={"Alcoholic"}
              image={`${item.strDrinkThumb}/preview`}
            />
          )}
        />
      )}
    </Container>
  );
};

export default HomeScreen;
