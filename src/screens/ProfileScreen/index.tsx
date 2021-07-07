import React from "react";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "navigations/AppNavigator";
import { StackNavigationProp } from "@react-navigation/stack";
import styled from "styled-components/native";
import Back from "assets/icons/Back";
import Edit from "assets/icons/Edit";

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
  flex-direction: row;
  justify-content: space-between;
  height: 40px;
  margin-bottom: 30px;
`;

const TitleText = styled.Text`
  font-size: 32px;
  margin-top: 5px;
  font-weight: 700;
  min-height: 70px;
  font-family: Montserrat;
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

const EditButtonContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

const Picture = styled.Image`
  width: 100%;
  height: 240px;
  border-radius: 15px;
`;

const DetailsView = styled.View`
  padding-top: 25px;
`;

const DetailItem = styled.View`
  padding-top: 15px;
`;

const ItemHeading = styled.Text`
  font-size: 16px;
  font-family: Montserrat;

  font-weight: 400;
  color: #313234;
`;

const ItemText = styled.Text`
  font-size: 18px;
  font-family: Montserrat;

  font-weight: 600;
  color: black;
`;

const Button = styled.TouchableOpacity<{ color: string }>`
  height: 60px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  margin: 20px 0px 0px 0px;
  background-color: ${({ color }) => color};
`;

const ButtonText = styled.Text<{ color: string }>`
  font-size: 18px;
  font-family: Montserrat;

  font-weight: 700;
  color: ${({ color }) => color};
`;

interface Props {}

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Profile"
>;

const ProfileScreen = (props: Props) => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  return (
    <Container>
      <Content>
        <Box>
          <BackButton onPress={() => navigation.goBack()}>
            <Back />
          </BackButton>
          <HeadingContainer>
            <TitleText>My Profile</TitleText>
            <EditButtonContainer>
              <Edit />
            </EditButtonContainer>
          </HeadingContainer>
          <Picture source={require("assets/profile.png")} />
          <DetailsView>
            <DetailItem>
              <ItemHeading>Name</ItemHeading>
              <ItemText>Marvis Ighedosa</ItemText>
            </DetailItem>
            <DetailItem>
              <ItemHeading>Email</ItemHeading>
              <ItemText>marvis.ighedosa@.com</ItemText>
            </DetailItem>
            <DetailItem>
              <ItemHeading>Phone</ItemHeading>
              <ItemText>+234 9011039271</ItemText>
            </DetailItem>
          </DetailsView>
          <Button color="#F26C68">
            <ButtonText color="white">Favourites</ButtonText>
          </Button>

          <Button color="#F5CA48">
            <ButtonText color="black">Clear Data</ButtonText>
          </Button>
        </Box>
      </Content>
    </Container>
  );
};

export default ProfileScreen;
