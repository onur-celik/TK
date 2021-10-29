import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import uiColors from '../../uiColors';
import { useNavigation } from '@react-navigation/native';
import ArrowBlueLeft from "./icons/arrow-black-left.svg";
const SearchInputIcon = ({label}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.HamburgerMenuGeriButton}
      onPress={()=>navigation.goBack()}
    >
      <View style={styles.HamburgerMenuGeriButtonIcon}>
        <ArrowBlueLeft width="14" height="14" />
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  HamburgerMenuGeriButton : {
    width: 40,
    height: 40,
    backgroundColor: "#FFFFFF",
    justifyContent : "flex-start",
    alignItems : "center",
    flexDirection : "row",
    borderRadius : 100,
  },
  HamburgerMenuGeriButtonIcon : {
    width: 40,
    height: 40,
    backgroundColor : "#F7F7F7",
    borderWidth : 1,
    borderColor : "#00000008",
    borderRadius : 100,
    marginRight:16,
    justifyContent: "center",
    alignItems: "center"
  },
  label : {
    color : uiColors.text_blue
  }
});
export default SearchInputIcon;