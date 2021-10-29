import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import TitleIconFire from "./icons/title-icon-fire.svg";

const SearchModalTitle = (props) => {
  return (
    <View style={styles.SearchModalTitlePositioner}>
      <View style={styles.SearchModalTitle}>
        <View style={styles.SearchModalTitleIcon}>
          <TitleIconFire width={20} height={20} />
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
    alignItems : "center"
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
