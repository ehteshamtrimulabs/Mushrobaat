import React, { useEffect, useState } from "react";
import { ActivityIndicator, ImageSourcePropType } from "react-native";
import { Modal } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import Menu from "assets/icons/Menu";
import CategoryItem from "components/CategoryItem";
import DrinksList from "components/DrinksList";
import NotFound from "components/NotFound";
import ProfilePicture from "components/ProfilePicture";
import SearchBar from "components/SearchBar";
import SortModalListItem from "components/SortModalListItem";
import { RootStackParamList } from "navigations/AppNavigator";
import SplashScreen from "react-native-splash-screen";

const Container = styled.SafeAreaView<{ color: string; opacity?: number }>`
  flex: 1;

  background-color: ${({ color }) => color};
  opacity: ${({ opacity }) => (opacity ? opacity : 1)};
`;

const TopContainer = styled.View``;

const Box = styled.View`
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
  border-bottom-width: 1px;
  border-color: #ebebeb;
`;

const CategoriesList = styled.ScrollView``;

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

const LoadingView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const LoadingText = styled.Text`
  font-size: 18px;
  font-family: Montserrat;
  margin-top: 5px;
  font-weight: 400;
`;

type Drink = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
};

type Category = {
  id: string;
  category: string;
  categoryString: string;
  selected: boolean;
  image: ImageSourcePropType;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const [modalVisible, setModalVisible] = useState(false);
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchDrinks, setSearchDrinks] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Alcoholic");
  const [categories, setCategories] = useState<Array<Category>>([
    {
      id: "1",
      category: "Alcoholic",
      categoryString: "Alcoholic",
      image: require("assets/Ordinary.png"),
      selected: true,
    },
    {
      id: "2",
      category: "Non Alcoholic",
      categoryString: "Non_Alcoholic",
      image: require("assets/Coffee.png"),
      selected: false,
    },
    {
      id: "3",
      category: "Optional Alcohol",
      categoryString: "Optional_Alcohol",
      image: require("assets/SoftDrink.png"),
      selected: false,
    },
  ]);
  const [sortBy, setSortBy] = useState<{ [key: string]: boolean }>({
    latest: true,
    oldest: false,
    ascending: false,
    descending: false,
  });

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
    fetchDrinks("Alcoholic");
  }, []);

  const setSort = (sort: string) => {
    var temp: { [key: string]: boolean } = {
      latest: false,
      oldest: false,
      ascending: false,
      descending: false,
    };
    temp[sort] = true;

    if (sort === "ascending" || sort === "descending") {
      var sortedDrinks = drinks.sort((a: Drink, b: Drink) => {
        var nameA = a.strDrink.toUpperCase();
        var nameB = b.strDrink.toUpperCase();
        if (nameA < nameB) {
          if (sort === "ascending") return -1;
          return 1;
        }
        if (nameA > nameB) {
          if (sort === "ascending") return 1;
          return -1;
        }
        return 0;
      });
      setDrinks(sortedDrinks);
    }
    setSortBy(temp);
    setModalVisible(false);
  };

  const changeCategory = (cat: string) => {
    let index = categories.findIndex((element) => element.selected === true);
    let newArray = [...categories];
    newArray[index] = { ...newArray[index], selected: false };

    index = categories.findIndex((element) => element.category === cat);
    newArray[index] = { ...newArray[index], selected: true };
    setCategories([...newArray]);
    setSelectedCategory(cat);
    fetchDrinks(newArray[index].categoryString);
  };

  const fetchSearchResults = (text: string) => {
    if (text.charAt(0) === "e") setHasSearched(false);
    else {
      setHasSearched(true);
      setLoading(true);
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.drinks) setSearchDrinks(data.drinks);
          else setSearchDrinks([]);
        })
        .catch((e) => {
          console.log("network error");
          navigation.navigate("Offline");
        })
        .finally(() => setLoading(false));
    }
  };

  const fetchDrinks = async (cat: string) => {
    setLoading(true);

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${cat}`)
      .then((response) => response.json())
      .then((data) => {
        setDrinks(data.drinks);
      })
      .catch((e) => {
        console.log("network error");
        navigation.navigate("Offline");
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
                onPress={() => setSort("latest")}
              />
              <SortModalListItem
                text="Oldest"
                checked={sortBy.oldest}
                onPress={() => setSort("oldest")}
              />
              <SortModalListItem
                text="Ascending"
                checked={sortBy.ascending}
                onPress={() => setSort("ascending")}
              />
              <SortModalListItem
                text="Descending"
                checked={sortBy.descending}
                onPress={() => setSort("descending")}
              />
            </ModalOptionsListContainer>
          </ModalContainer>
        </ModalSafeArea>
      </Modal>

      <TopContainer>
        <Box>
          <TopBar>
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
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
          <SearchBar
            onSubmit={(text) => fetchSearchResults(text)}
            onCancel={() => setHasSearched(false)}
          />
          {!hasSearched && <CategoriesHeading>Categories</CategoriesHeading>}
        </Box>
        {!hasSearched && (
          <CategoriesView>
            <CategoriesList horizontal showsHorizontalScrollIndicator={false}>
              {categories.map((item) => (
                <CategoryItem
                  category={item.category}
                  key={item.id}
                  image={item.image}
                  selected={item.selected}
                  onPress={() => changeCategory(item.category)}
                />
              ))}
            </CategoriesList>
          </CategoriesView>
        )}
      </TopContainer>
      {!hasSearched ? (
        loading ? (
          <LoadingView>
            <ActivityIndicator size="large" color="black" />

            <LoadingText>Loading</LoadingText>
          </LoadingView>
        ) : (
          <DrinksList drinks={drinks} selectedCategory={selectedCategory} />
        )
      ) : loading ? (
        <LoadingView>
          <LoadingText>Searching ...</LoadingText>
        </LoadingView>
      ) : searchDrinks.length === 0 ? (
        <NotFound />
      ) : (
        <DrinksList drinks={searchDrinks} selectedCategory={selectedCategory} />
      )}
    </Container>
  );
};

export default HomeScreen;
