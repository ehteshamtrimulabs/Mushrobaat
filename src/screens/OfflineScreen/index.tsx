import Wifi from "assets/icons/Wifi";
import React from "react";
import { useEffect } from "react";
import styled from "styled-components/native";
import { RootStackParamList } from "navigations/AppNavigator";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const HeadingText = styled.Text`
  color: #313234;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 28px;
`;

const SubHeadingText = styled.Text`
  color: #313234;
  font-family: Montserrat;
  font-weight: 400;
  font-size: 17px;
  text-align: center;
  margin-top: 30px;
`;

const Button = styled.TouchableOpacity`
  height: 60px;
  border-radius: 50px;
  align-items: center;
  width: 80%;
  margin-top: 30px;
  justify-content: center;
  background-color: #f5ca48;
`;

const ButtonText = styled.Text`
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 700;
  color: black;
`;

interface Props {}

type OfflineScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Offline"
>;

const OfflineScreen = (props: Props) => {
  const navigation = useNavigation<OfflineScreenNavigationProp>();

  //-----disable back button/gesture----
  //   navigation.reset({
  //     index: 0,
  //     routes: [{ name: "Offline" }],
  //   });

  return (
    <Container>
      <Wifi />
      <HeadingText>No internet Connection</HeadingText>
      <SubHeadingText>
        Your internet connection is currently not available, please try again or
        come back later.
      </SubHeadingText>
      <Button onPress={() => navigation.navigate("Home")}>
        <ButtonText>Try Again</ButtonText>
      </Button>
    </Container>
  );
};

export default OfflineScreen;
