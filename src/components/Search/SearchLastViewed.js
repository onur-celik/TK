import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import ArrowBlackRight from "./icons/arrow-black-right.svg";

const SearchLastViewed = (props) => {
  return (
    <View style={styles.SearchLastViewedItem}>
      <View style={styles.SearchLastViewedFirstCol}>
        <View style={styles.SearchLastViewedFirstColImageWrapper}>
          
        </View>
        <Text>{props.text}</Text>
      </View>
      <ArrowBlackRight style={{marginRight : 30, opacity: 0.6}} width={7} height={12} />
    </View>
  )
}

const styles = StyleSheet.create({
  SearchLastViewedItem : {
    flexDirection : "row",
    justifyContent: "space-between",
    height : 40,
    marginTop : 24,
    paddingLeft : 32,
    alignItems : "center"
  },
  SearchLastViewedFirstCol : {
    flexDirection : "row",
    alignItems : "center"
  },
  SearchLastViewedFirstColImageWrapper : {
    width : 40,
    height : 40,
    borderRadius : 8,
    marginRight : 10,
    alignItems : "center",
    backgroundColor : "#00000040"
  }
});

export default SearchLastViewed
