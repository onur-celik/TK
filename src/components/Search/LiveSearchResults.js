import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import SearchModalTitle from './SearchModalTitle'
import SearchResultListItem from './SearchResultListItem';
const LiveSearchResults = () => {
  return (
    <View>
      <SearchModalTitle icon="magnifier" title="Sonuçlar" />
      <SearchResultListItem text="Fethiye" />
      <SearchResultListItem text="Kemer" />
      <SearchResultListItem text="Fethiye" />
      <SearchResultListItem text="Kemer" />
    </View>
  )
}

const styles = StyleSheet.create({

});

export default LiveSearchResults
