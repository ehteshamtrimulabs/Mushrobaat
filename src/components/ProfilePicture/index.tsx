import React from 'react';
import {ImageSourcePropType, ImageStyle, StyleProp} from 'react-native';
import styled from 'styled-components/native';

interface Props {
  image: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
}

const Profile = styled.Image`
  height: 40px;
  width: 40px;
  border-radius: 20px;
`;

const ProfilePicture = ({image, style}: Props) => (
  <Profile source={image} style={style} />
);

export default ProfilePicture;
