import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Menu from 'assets/icons/Menu';
import CategoryItem from 'components/CategoryItem';
import DrinkItem from 'components/DrinkItem';
import ProfilePicture from 'components/ProfilePicture';
import SearchBar from 'components/SearchBar';
import {RootStackParamList} from 'navigations/AppNavigator';
import React from 'react';
import {useState} from 'react';
import {Modal, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
`;
const Content = styled.ScrollView`
  flex: 1;
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

const data = [
  {id: '1', val: 123},
  {id: '2', val: 121233},
  {id: '3', val: 123},
  {id: '4', val: 123},
];

const ModalContainer = styled.View`
  flex: 1;
  background-color: red;
`;
const Box2 = styled.TouchableOpacity`
  flex: 1;
`;

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const {navigate} = useNavigation<HomeScreenNavigationProp>();
  const {params} = useRoute<HomeScreenRouteProp>();

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Container>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        collapsable
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <SafeAreaView style={{flex: 1}}>
          <Box2 onPress={() => setModalVisible(false)} />
          <ModalContainer>
            <Text>Hello World!</Text>
          </ModalContainer>
        </SafeAreaView>
      </Modal>

      <ListView
        data={data}
        ListHeaderComponent={
          <Content>
            <Box>
              <TopBar>
                <ProfilePicture image={require('assets/profile.png')} />
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
                data={data}
                renderItem={item => <CategoryItem />}
                ListFooterComponent={<View style={{padding: 10}} />}
              />
            </CategoriesView>
          </Content>
        }
        showsVerticalScrollIndicator={false}
        renderItem={item => (
          <DrinkItem
            onPress={() => navigate('Details', {drinkId: '92'})}
            title="3-Mile Long Island Iced Tea"
            subtitle="Collins Glass"
            category="Non Alcoholic"
            image={require('assets/drink.png')}
          />
        )}
      />
    </Container>
  );
};

export default HomeScreen;
