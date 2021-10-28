import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HamburgerMenuGeriButton from '../components/HamburgerMenu/HamburgerMenuGeriButton';
import HamburgerMenuListItem from '../components/HamburgerMenu/HamburgerMenuListItem';
import HamburgerMenuBottomNav from '../components/HamburgerMenu/HamburgerMenuBottomNav';
const HamburgerMenu = ({navigation}) => {
  return (
    <SafeAreaView style={styles.HamburgerMenu}>
      <HamburgerMenuGeriButton navigateto="HomeScreen" nav={navigation} label="GERİ"></HamburgerMenuGeriButton>
      <ScrollView>
        <HamburgerMenuListItem label="Popüler Villa Kiralama Bölgeleri"></HamburgerMenuListItem>
        <HamburgerMenuListItem label="Diğer Bölgeler"></HamburgerMenuListItem>
        <HamburgerMenuListItem label="Kategoriler"></HamburgerMenuListItem>
      </ScrollView>
      <HamburgerMenuBottomNav></HamburgerMenuBottomNav>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  HamburgerMenu : {
    backgroundColor : "#EEEEEF",
    flex:1,
    flexDirection : "column",
    justifyContent: "space-around"
  }
});
export default HamburgerMenu;