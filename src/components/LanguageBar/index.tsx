import React from "react";
import styled from "styled-components/native";
import Italy from "assets/flags/Italy";
import Spain from "assets/flags/Spain";
import Germany from "assets/flags/Germany";
import France from "assets/flags/France";
import UnitedKindom from "assets/flags/UnitedKingdom";
import China from "assets/flags/China";

interface Props {
  selected: string;
  onPress: (country: string) => void;
}

const Container = styled.View`
  width: 100%;
  height: 40px;
  padding: 0px 40px;
  border-radius: 15px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
`;

const LanguageBar = ({ selected, onPress }: Props) => {
  const selectedProps = {
    width: 35,
    height: 35,
    opacity: 1,
  };

  const unSelectedProps = {
    width: 25,
    height: 25,
    opacity: 0.65,
  };

  return (
    <Container>
      <Italy
        {...(selected === "Italy" ? selectedProps : unSelectedProps)}
        onPress={() => onPress("Italy")}
      />
      <Germany
        {...(selected === "Germany" ? selectedProps : unSelectedProps)}
        onPress={() => onPress("Germany")}
      />
      <UnitedKindom
        {...(selected === "UnitedKingdom" ? selectedProps : unSelectedProps)}
        onPress={() => onPress("UnitedKingdom")}
      />
      <France
        {...(selected === "France" ? selectedProps : unSelectedProps)}
        onPress={() => onPress("France")}
      />
      <Spain
        {...(selected === "Spain" ? selectedProps : unSelectedProps)}
        onPress={() => onPress("Spain")}
      />
      <China
        {...(selected === "China" ? selectedProps : unSelectedProps)}
        onPress={() => onPress("China")}
      />
    </Container>
  );
};

export default LanguageBar;
