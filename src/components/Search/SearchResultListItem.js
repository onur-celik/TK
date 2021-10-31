import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import SearchResultIcon from "./icons/search-result-pin.svg"
import ArrowBlackRight from "./icons/arrow-black-right.svg"
const SearchResultListItem = (props) => {
  return (
    <TouchableOpacity 
      style={styles.SearchResultListItem}
      onPress={()=>{
        
      }}
    >
      <View style={styles.SearchResultFirstCol}>
        <View style={styles.SearchResultFirstColIconWrapper}>
          <SearchResultIcon width={20} height={20} />
        </View>
        <Text style={styles.SearchResultText}>{props.text}</Text>
      </View>
      <ArrowBlackRight style={{marginRight : 30, opacity: 0.6}} width={7} height={12} />
    </TouchableOpacity>
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
  },
  SearchResultText : {
    color: "#6D6D6D"
  }
});

export default SearchResultListItem
