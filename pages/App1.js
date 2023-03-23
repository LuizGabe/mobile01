import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image, 
  TouchableOpacity,
  TextInput

} from 'react-native';
import { style } from '../styles/style1'

export default function() {
  return (
    <>
      <Text style={style.body}>
        Hello World!
      </Text>
    </>
  )
}