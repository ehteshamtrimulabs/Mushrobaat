import React from "react";
import styled from "styled-components/native";
import Italy from "assets/flags/Italy";
import Germany from "assets/flags/Germany";
import UnitedKindom from "assets/flags/UnitedKingdom";

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

interface Props {
  selected: string;
  onChangeLanguage: (text: string) => void;
}

const LanguageBar = ({ selected, onChangeLanguage }: Props) => {
  const selectedProps = {
    width: 40,
    height: 40,
    opacity: 1,
  };

  const unSelectedProps = {
    width: 30,
    height: 30,
    opacity: 0.65,
  };

  return (
    <Container>
      <Italy
        {...(selected === "it" ? selectedProps : unSelectedProps)}
        onPress={() => onChangeLanguage("it")}
      />
      <Germany
        {...(selected === "de" ? selectedProps : unSelectedProps)}
        onPress={() => onChangeLanguage("de")}
      />
      <UnitedKindom
        {...(selected === "en" ? selectedProps : unSelectedProps)}
        onPress={() => onChangeLanguage("en")}
      />
    </Container>
  );
};

export default LanguageBar;
