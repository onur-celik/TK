import React from 'react'
import { Text, View, StyleSheet} from 'react-native'

const SearchResultPill = (props) => {
  return (
    <View style={styles.SearchResultPill}>
      <Text>{props.keyword}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  SearchResultPill : {
    backgroundColor : "#18223318",
    height: 40,
    borderRadius : 32,
    marginRight : 8,
    paddingVertical : 11,
    paddingHorizontal : 16
  }
});

export default SearchResultPill;
