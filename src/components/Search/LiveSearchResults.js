import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import SearchModalTitle from './SearchModalTitle'
import SearchResultListItem from './SearchResultListItem';
const LiveSearchResults = (props) => {
  function testFunc(){
    props.setter()
  }
  return (
    <View>
      <SearchModalTitle icon="magnifier" title="Sonuçlar" />
      <SearchResultListItem 
        text="Muğla, Fethiye"
        setter={testFunc}
      />
      <SearchResultListItem setter={props.setter.bind(this)} text="Muğla, Fethiye, Akarca" />
      <SearchResultListItem setter={props.setter} text="Muğla, Fethiye, Babataşı" />
      <SearchResultListItem setter={props.setter} text="Muğla, Fethiye, Cumhuriyet" />
      <SearchResultListItem setter={props.setter} text="Muğla, Fethiye, Çamköy" />
      <SearchResultListItem setter={props.setter} text="Muğla, Fethiye, Çatalarık" />
      <Text>RC? {props.rc}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

});

export default LiveSearchResults
