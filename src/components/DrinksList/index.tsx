import { useNavigation } from "@react-navigation/native";
import DrinkItem from "components/DrinkItem";
import React from "react";
import styled from "styled-components/native";

const ListView = styled.ScrollView`
  padding-top: 10px;
  flex: 1;
`;

const ListFooterView = styled.View`
  height: 50px;
`;

interface Props {
  drinks: {
    strDrink: string;
    idDrink: string;
    strDrinkThumb: string;
  }[];
  selectedCategory: string;
}

const DrinksList = ({ drinks, selectedCategory }: Props) => {
  const { navigate } = useNavigation();

  return (
    <ListView showsVerticalScrollIndicator={false}>
      {drinks.map((item) => {
        return (
          <DrinkItem
            key={item.idDrink}
            onPress={() => navigate("Details", { drinkId: item.idDrink })}
            title={item.strDrink}
            subtitle={"Collins Glass"}
            category={selectedCategory}
            image={`${item.strDrinkThumb}/preview`}
          />
        );
      })}
      <ListFooterView />
    </ListView>
  );
};

export default DrinksList;
