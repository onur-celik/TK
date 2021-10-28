import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import uiColors from '../../uiColors';
import ArrowBlackRight from "./icons/arrow-black-right.svg";
const HamburgerMenuListItem = (props) => {
  return (
    <TouchableOpacity style={styles.HamburgerMenuListItem}>
      <Text style={styles.label}>{props.label}</Text>
      <View style={styles.HamburgerMenuListItemIcon}>
        <ArrowBlackRight width={14} height={14} />
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  HamburgerMenuListItem : {
    height: 72,
    justifyContent : "flex-start",
    alignItems : "center",
    flexDirection : "row",
    paddingLeft: 24,
    justifyContent : "space-between",
    borderTopWidth : 1,
    borderTopColor : uiColors.text_black + "08"
  },
  HamburgerMenuListItemIcon : {
    width:40,
    height:40,
    marginRight: 16,
    justifyContent: "center",
    alignItems : "center"
  },
  label : {
    color : uiColors.text_black,
    fontSize : 14
    // fontFamily : "Quicksand",
    // fontWeight : "700"
  }
});
export default HamburgerMenuListItem;