import Checked from "assets/icons/Checked";
import React from "react";
import styled from "styled-components/native";

const Container = styled.TouchableOpacity`
  margin-bottom: 10px;
  width: 100%;
  height: 30px;
  flex-direction: row;
  justify-content: space-between;
`;

const Text = styled.Text`
  font-weight: 500;
  font-size: 16px;
  color: black;
  font-family: Montserrat;
`;

interface Props {
  text: string;
  onPress: () => void;
  checked: boolean;
}

const SortModalListItem = ({ text, onPress, checked }: Props) => (
  <Container onPress={() => onPress()}>
    <Text>{text}</Text>
    {checked && <Checked />}
  </Container>
);

export default SortModalListItem;
