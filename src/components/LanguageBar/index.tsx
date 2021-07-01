import React from "react";
import styled from "styled-components/native";
import Italy from "assets/flags/Italy";
import Spain from "assets/flags/Spain";
import Germany from "assets/flags/Germany";
import France from "assets/flags/France";
import UnitedKindom from "assets/flags/UnitedKingdom";

interface Props {
  selected: string;
}

const Container = styled.View`
  width: 100%;
  height: 40px;
  padding: 0px 40px;
  border-radius: 15px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
`;

const LanguageBar = ({ selected }: Props) => {
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
      <Italy {...(selected === "Italy" ? selectedProps : unSelectedProps)} />
      <Germany
        {...(selected === "Germany" ? selectedProps : unSelectedProps)}
      />
      <UnitedKindom
        {...(selected === "UnitedKingdom" ? selectedProps : unSelectedProps)}
      />
      <France {...(selected === "France" ? selectedProps : unSelectedProps)} />
      <Spain {...(selected === "Spain" ? selectedProps : unSelectedProps)} />
    </Container>
  );
};

export default LanguageBar;
