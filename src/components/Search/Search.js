import React, { useState } from 'react';
import { 
  Text, 
  Modal, 
  StyleSheet, 
  SafeAreaView, 
  View, 
  ScrollView 
} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import SearchInputIcon from './SearchInputIcon';
import HandShaking from "./icons/hand-shaking.svg";
import SearchModalTitle from './SearchModalTitle';
import SearchResultPill from './SearchResultPill';

const Search = () => {
  const [modalVisible, setModalVisible] = useState(true);
  return(
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <SafeAreaView style={styles.SearchModal}>
        
        <View style={styles.SearchHeader}></View>
        
        <View style={styles.SearchInputPositioner}>
          <View style={styles.SearchInputWrapper}>
            <SearchInputIcon />
            <TextInput
              placeholder="Nereye?"
              style={styles.SearchTextInput}
            />
          </View>
        </View>

        <View style={styles.SearchHintPositioner}>
          <View style={styles.SearchHint}>
            <View style={styles.SearchHintIcon}>
              <HandShaking width={20} height={12} />
            </View>
            <Text style={styles.SearchHintText}>
              Binlerce villadan dilediğini para iadesi güvencesiyle anında kirala!
            </Text>
          </View>
        </View>

        <SearchModalTitle title="Popüler Bölgeler" />
        <View style={styles.SearchResultPillsWrapper}>
          <ScrollView
            horizontal
            contentContainerStyle={styles.SearchResultPills}
          >
            <SearchResultPill keyword="Fethiye" />
            <SearchResultPill keyword="Bodrum" />
            <SearchResultPill keyword="Kaş" />
            <SearchResultPill keyword="Sapanca" />
            <SearchResultPill keyword="Kuşadası" />
            <SearchResultPill keyword="Didim" />
            <SearchResultPill keyword="Alanya" />
            <SearchResultPill keyword="Marmaris" />
            <SearchResultPill keyword="Kemer" />
          </ScrollView>
        </View>

        <SearchModalTitle title="Son Aramalar" />
        <SearchModalTitle title="Son Inceledikleriniz" />
        
      </SafeAreaView>
    </Modal>
  )
}
const styles = StyleSheet.create({
  SearchModal : {
    backgroundColor: "#F5F5F5",
    flex : 1
  },
  SearchHeader : {
    height:80,
    backgroundColor: "#3C5D7E"
  },
  SearchInputPositioner : {
    width : "100%",
    alignItems : "center"
  },
  SearchInputWrapper : {
    backgroundColor : "#FFFFFF",
    width: "80%",
    width: 327,
    height: 64,
    borderRadius : 32,
    marginTop : -32,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems : "center",
    paddingLeft : 12,
    flexDirection : "row"
  },
  SearchTextInput : {
    marginLeft: 16,
    fontSize : 16
  },
  SearchHintPositioner : {
    width : "100%",
    alignItems : "center",
    marginTop : 24,
    borderBottomWidth : 1,
    borderBottomColor : "#00000008",
    paddingBottom : 18,
    marginBottom: 20
  },
  SearchHint : {
    width:327,
    flexDirection : "row"
  },
  SearchHintIcon : {
    backgroundColor : "#A4EFC2",
    width : 40,
    height : 40,
    borderRadius : 12,
    justifyContent : "center",
    alignItems : "center",
    marginRight : 16
  },
  SearchHintText : {
    color : "#6D6D6D"
  },
  SearchResultPillsWrapper : {
    height: 48,
    width : "100%",
    alignItems : "center",
    marginBottom : 24
  },
  SearchResultPills : {
    paddingLeft : 80, 
    alignItems : "center",
  }
});
export default Search;