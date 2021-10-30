import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import SearchResultIcon from "./icons/search-result-pin.svg"
import ArrowBlackRight from "./icons/arrow-black-right.svg"
const SearchResultListItem = (props) => {
  return (
    <View style={styles.SearchResultListItem}>
      <View style={styles.SearchResultFirstCol}>
        <View style={styles.SearchResultFirstColIconWrapper}>
          <SearchResultIcon width={20} height={20} />
        </View>
        <Text>{props.text}</Text>
      </View>
      <ArrowBlackRight style={{marginRight : 30, opacity: 0.6}} width={7} height={12} />
    </View>
  )
}
const styles = StyleSheet.create({
  SearchResultListItem : {
    flexDirection : "row",
    justifyContent: "space-between",
    height : 18,
    marginTop : 24,
    paddingLeft : 32
  },
  SearchResultFirstCol : {
    flexDirection : "row"
  },
  SearchResultFirstColIconWrapper : {
    width : 40,
    height : 20,
    borderRadius : 8,
    marginRight : 10,
    alignItems : "center"
  }
});

export default SearchResultListItem
