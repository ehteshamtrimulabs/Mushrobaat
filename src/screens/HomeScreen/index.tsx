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
import { Modal, Text, View } from "react-native";
import styled from "styled-components/native";

const Container = styled.SafeAreaView`
  flex: 1;
`;
const Content = styled.ScrollView`
  flex: 1;
  margin-top: 0px;
`;

const Box = styled.View`
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
`;

const HeadingText2 = styled.Text`
  font-size: 32px;
  margin-top: 5px;
  font-weight: 700;
`;

const CategoriesHeading = styled.Text`
  margin-top: 30px;
  font-weight: 700;
  font-size: 16px;
`;

const CategoriesView = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  flex-grow: 0;
`;

const CategoriesList = styled.FlatList``;

const ListView = styled.FlatList`
  margin-top: 50px;
  flex-grow: 0;
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
  font-weight: 700;
  color: black;
`;

const ModalOptionsListContainer = styled.View`
  margin-left: 20px;
  margin-top: 30px;
  flex: 1;
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

  const drinks = [
    {
      id: 1,
      title: "Dry Martini",
      subtitle: "Cocktail Glass",
      category: "Alcoholic",
      image: require("assets/DryMartini.jpeg"),
    },
    {
      id: 2,
      title: "3-Mile Long Island Iced Tea",
      subtitle: "Collins Glass",
      category: "Non Alcoholic",
      image: require("assets/drink.png"),
    },
  ];

  const categories = [
    {
      id: 1,
      category: "Ordinary Drink",
      image: require("assets/Ordinary.png"),
    },
    {
      id: 2,
      category: "Coffee / Tea",
      image: require("assets/Coffee.png"),
    },
    {
      id: 3,
      category: "Soft Drink / Soda",
      image: require("assets/SoftDrink.png"),
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

      <ListView
        data={drinks}
        ListHeaderComponent={
          <Content>
            <Box>
              <TopBar>
                <ProfilePicture image={require("assets/profile.png")} />
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
                  <CategoryItem category={item.category} image={item.image} />
                )}
                ListFooterComponent={<View style={{ padding: 10 }} />}
              />
            </CategoriesView>
          </Content>
        }
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <DrinkItem
            onPress={() => navigate("Details", { drinkId: "92" })}
            title={item.title}
            subtitle={item.subtitle}
            category={item.category}
            image={item.image}
          />
        )}
      />
    </Container>
  );
};

export default HomeScreen;
