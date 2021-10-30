import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import TitleIconFire from "./icons/title-icon-fire.svg"
import TitleIconRefresh from "./icons/title-icon-refresh.svg"
import TitleIconEye from "./icons/title-icon-eye.svg"
const SearchModalTitle = (props) => {
  const titleIcon = ( props.icon == "fire" ) ? <TitleIconFire width={20} height={20} /> : (props.icon == "refresh") ? <TitleIconRefresh width={20} height={20} /> : <TitleIconEye width={20} height={20} />;
  return (
    <View style={styles.SearchModalTitlePositioner}>
      <View style={styles.SearchModalTitle}>
        <View style={styles.SearchModalTitleIcon}>
          {titleIcon}
        </View>
        <Text style={{fontSize : 20}}>{props.title}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  SearchModalTitlePositioner : {
    width : "100%",
    height : 40,
    justifyContent : "center",
    alignItems : "center",
    marginTop : 24
  },
  SearchModalTitle : {
    width : 327,
    flexDirection : "row",
    alignItems : "center",
  },
  SearchModalTitleIcon : {
    justifyContent : "center",
    alignItems : "center",
    width : 40,
    height : 40,
    marginRight : 16
  }
});

export default SearchModalTitle;
