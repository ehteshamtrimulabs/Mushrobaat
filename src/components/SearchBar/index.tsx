import Search from "assets/icons/Search";
import React, { useState } from "react";
import styled from "styled-components/native";

const Container = styled.View`
  margin-top: 30px;
  padding-right: 20px;
  height: 45px;
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

const TextInput = styled.TextInput`
  border-bottom-width: 2px;
  border-bottom-color: #a59c9c;
  color: black;
  font-size: 14px;
  font-family: Montserrat;
  font-weight: 600;
  flex: 1;
  margin-left: 10px;
  padding-bottom: 4px;
`;

const CancelButton = styled.TouchableOpacity``;

const Text = styled.Text`
  font-size: 14px;
  font-family: Montserrat;
  font-weight: 400;
`;

interface Props {
  onSubmit: (text: string) => void;
  onCancel: () => void;
}

const SearchBar = ({ onSubmit, onCancel }: Props) => {
  const [searchText, setSearchText] = useState("");

  return (
    <Container>
      <Search />
      <TextInput
        placeholder="Search..."
        value={searchText}
        onChangeText={(text: string) => setSearchText(text)}
        autoCorrect={false}
        autoCapitalize="none"
        enablesReturnKeyAutomatically
        onSubmitEditing={() => onSubmit(searchText)}
      />
      {searchText.length > 0 && (
        <CancelButton
          onPress={() => {
            setSearchText("");
            onCancel();
          }}
        >
          <Text>Cancel</Text>
        </CancelButton>
      )}
    </Container>
  );
};

export default SearchBar;
