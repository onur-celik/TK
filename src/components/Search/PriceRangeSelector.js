import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import RangeSlider from '@jesster2k10/react-native-range-slider';

const PriceRangeSelector = () => {
  return (
    <View>
      <View style={styles.priceRangeContainer}>
        <Text style={styles.gecelikOrtalamaText}>
          Gecelik ortalama fiyat : <Text style={styles.bold}>900₺</Text> 
        </Text>
        <View style={styles.priceRangeGraph}>
        </View>

        <RangeSlider
          type="range" // ios only
          min={0}
          max={100}
          selectedMinimum={20} // ios only
          selectedMaximum={60} // ios only
          tintColor="#A9C7FF"
          handleColor="#3B7FFF"
          handlePressedColor="#000000"
          tintColorBetweenHandles="#A9C7FF"
          onChange={()=>{}}
          style={{marginBottom: 15}}
        />

        <View style={styles.priceBoxes}>
          <View style={styles.priceBoxesLeft}>
            <Text style={styles.priceBoxTitle}>En az gecelik fiyat</Text>
            <Text style={styles.priceBoxPrice}>₺ 0</Text>
          </View>
          <View style={styles.priceBoxMiddle}>
            <Text>-</Text>
          </View>
          <View style={styles.priceBoxRight}>
            <Text style={styles.priceBoxTitle}>En fazla gecelik fiyat</Text>
            <Text style={styles.priceBoxPrice}>₺ 1000</Text>
          </View>
        </View>

      </View>
      <View style={styles.priceRangeButtonContainer}>
        <TouchableOpacity style={styles.priceRangeButton}>
          <Text style={styles.priceRangeButtonText}>SONUÇLARI GÖSTER</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  priceRangeContainer : {
    backgroundColor : "#ffffff",
    margin: 24,
    marginBottom:0,
    borderTopLeftRadius : 12,
    borderTopRightRadius : 12,
    padding:24
  },
  bold : {
    fontWeight : "bold",
  },
  gecelikOrtalamaText : {
    textAlign : "center", 
    fontSize : 12,
    color : "#182233"
  },
  priceRangeButtonContainer : {
    backgroundColor : "#ffffff",
    margin: 24,
    marginTop:0,
    borderBottomLeftRadius : 12,
    borderBottomRightRadius : 12,
    padding:24,
    borderTopWidth : 1,
    borderTopColor : "#18323320"
  },
  priceRangeGraph : {
    backgroundColor : "#18323305",
    height: 100,
    marginTop : 12
  },
  priceBoxes : {
    flexDirection : "row",
    marginTop : 12
  },
  priceBoxesLeft : {
    borderRadius: 12,
    backgroundColor : "#18323310",
    flex : 1,
    paddingHorizontal : 12,
    paddingVertical : 4
  },
  priceBoxMiddle : {
    width : 30,
    height : 40,
    justifyContent : "center",
    alignItems : "center"
  },
  priceBoxRight : {
    borderRadius: 12,
    backgroundColor : "#18323310",
    flex : 1,
    paddingHorizontal : 12,
    paddingVertical : 4
  },
  priceBoxTitle : {
    fontSize : 10,
    color : "#6D6D6D"
  },
  priceRangeButton : {
    backgroundColor : "#DBFEE9",
    borderRadius : 12,
    alignItems : "center",
    paddingVertical : 12
  },
  priceRangeButtonText : {
    color : "#3E9E65",
    fontWeight : "600"
  }
});

// range bar color : #A9C7FF
// range slider handle color : #3B7FFF

export default PriceRangeSelector;
