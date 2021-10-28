import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import uiColors from '../../uiColors';
import ArrowBlackRight from "./icons/arrow-black-right.svg";
import Globe from "./icons/globe.svg";
const HamburgerMenuBottomNav = (props) => {
  return (
    <View style={styles.HamburgerMenuBottomNav}>
      <View style={styles.HamburgerMenuBottomNavLinks}>
        <TouchableOpacity style={styles.HamburgerMenuBottomNavLink}>
          <Text style={styles.HamburgerMenuBottomNavLinkLabel}>Kurumsal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.HamburgerMenuBottomNavLink}>
          <Text style={styles.HamburgerMenuBottomNavLinkLabel}>İletişim</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.HamburgerMenuBottomNavLang}>
        <View style={styles.HamburgerMenuBottomNavLangLeft}>
          <View style={styles.HamburgerMenuBottomNavLangIconGlobe}>
            <Globe width={14} height={14} />
          </View>
          <Text>Turkish</Text>
        </View>
        <View style={styles.HamburgerMenuBottomNavLangIconArrow}>
          <ArrowBlackRight width={14} height={14} />
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  HamburgerMenuBottomNav : {
    borderTopWidth : 1,
    borderTopColor : uiColors.text_black + "08",
    height : 200,
    padding : 16,
    paddingTop : 24,
  },
  HamburgerMenuBottomNavLinks : {
    flexDirection : "row",
    justifyContent : "space-around"
  },
  HamburgerMenuBottomNavLink : {
    width: 163,
    height:22,
    justifyContent: "center",
    alignItems : "center"
  },
  HamburgerMenuBottomNavLinkLabel : {
    color : uiColors.text_black,
    opacity : 0.56
  },
  HamburgerMenuBottomNavLang : {
    flexDirection : "row",
    backgroundColor : "#FFFFFF",
    borderRadius : 32,
    justifyContent : "space-between",
    alignItems : "center",
    paddingVertical : 11,
    paddingHorizontal : 16,
    marginTop : 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  HamburgerMenuBottomNavLangLeft : {
    flexDirection : "row",
    alignItems : "center"
  },
  HamburgerMenuBottomNavLangIconGlobe : {
    width:18,
    height:18,
    justifyContent: "center",
    alignItems : "center",
    marginRight: 8
  },
  HamburgerMenuBottomNavLangIconArrow : {
    width:18,
    height:18,
    justifyContent: "center",
    alignItems : "center",
    opacity: 0.5
  },
  label : {
    color : uiColors.text_blue
  }
});
export default HamburgerMenuBottomNav;