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
      <SearchResultListItem setter={testFunc} text="Muğla, Fethiye, Akarca" />
      <SearchResultListItem setter={testFunc} text="Muğla, Fethiye, Babataşı" />
      <SearchResultListItem setter={testFunc} text="Muğla, Fethiye, Cumhuriyet" />
      <SearchResultListItem setter={testFunc} text="Muğla, Fethiye, Çamköy" />
      <SearchResultListItem setter={testFunc} text="Muğla, Fethiye, Çatalarık" />
    </View>
  )
}

const styles = StyleSheet.create({

});

export default LiveSearchResults
