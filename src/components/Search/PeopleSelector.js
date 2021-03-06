import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Adults from "./icons/adults.svg";
import Kids from "./icons/kids.svg";
import Babies from "./icons/babies.svg";
import Plus from "./icons/plus.svg";
import Minus from "./icons/minus.svg";

const PeopleSelector = (props) => {
  const [adults, adultsSetter] = useState(0);
  const [kids, kidsSetter] = useState(0);
  const [babies, babiesSetter] = useState(0);
  const [nextStepAvailable, nextStepAvailableSetter] = useState(false)

  function peopleCounter(type, action){
    switch(type){
      case "adults":
        if(action == "increase"){
          adultsSetter(adults+1)
        }else{
          if(adults > 0){
            adultsSetter(adults-1)
          }
        }
      break;

      case "kids":
        if(action == "increase"){
          kidsSetter(kids+1)
        }else{
          if(kids > 0){
            kidsSetter(kids-1)
          }
        }
      break;

      case "babies":
        if(action == "increase"){
          babiesSetter(babies+1)
        }else{
          if(babies > 0){
            babiesSetter(babies-1)
          }
        }
      break;
    }
    handleNextStepButton()
  }

  function handleNextStepButton(){
    var params = {adults, kids, babies};
    console.log(params)
    if(
      params.adults > 0 ||
      params.kids   > 0 ||
      params.babies > 0
    ){
      nextStepAvailableSetter(true)
    }else{
      nextStepAvailableSetter(false)
    }
  }

  function goToPriceRangeSelection(){
    console.log(props.setter(4))
  }
  return (
    <View style={{ padding : 14 }}>
      
      <View style={styles.row}>
        <View style={styles.col1}>
          <Adults width={15.75} height={18} />
        </View>
        <View style={styles.col2}>
          <Text style={styles.title}>Yetişkinler</Text>
          <Text style={styles.desc}>13+ Yaş</Text>
        </View>
        <View style={styles.col2}>
          <View style={styles.peopleSelectorButtons}>
            <TouchableOpacity 
              style={styles.minus}
              onPress={()=>{
                peopleCounter("adults", "decrease");
              }}
              >
              <Minus width={12} />
            </TouchableOpacity>
            <Text style={styles.peopleAmount}>{adults}</Text>
            <TouchableOpacity 
              style={styles.plus}
              onPress={()=>{
                peopleCounter("adults", "increase");
              }}
            >
              <Plus width={12} height={12} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.col1}>
          <Kids width={15.75} height={18} />
        </View>
        <View style={styles.col2}>
          <Text style={styles.title}>Çocuklar</Text>
          <Text style={styles.desc}>2-12 Yaş</Text>
        </View>
        <View style={styles.col2}>
          <View style={styles.peopleSelectorButtons}>
            <TouchableOpacity 
              style={styles.minus}
              onPress={()=>{
                peopleCounter("kids", "decrease");
              }}
            >
              <Minus width={12} />
            </TouchableOpacity>
            <Text style={styles.peopleAmount}>{kids}</Text>
            <TouchableOpacity 
              style={styles.plus}
              onPress={()=>{
                peopleCounter("kids", "increase");
              }}
            >
              <Plus width={12} height={12} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.col1}>
          <Babies width={15.75} height={18} />
        </View>
        <View style={styles.col2}>
          <Text style={styles.title}>Bebekler</Text>
          <Text style={styles.desc}>0-2 Yaş</Text>
        </View>
        <View style={styles.col2}>
          <View style={styles.peopleSelectorButtons}>
            <TouchableOpacity 
              style={styles.minus}
              onPress={()=>{
                peopleCounter("babies", "decrease");
              }}
            >
              <Minus width={12} />
            </TouchableOpacity>
            <Text style={styles.peopleAmount}>{babies}</Text>
            <TouchableOpacity 
              style={styles.plus}
              onPress={()=>{
                peopleCounter("babies", "increase");
              }}
            >
              <Plus width={12} height={12} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.devamEtButtonWrapper}>
        <TouchableOpacity 
          style={
            (nextStepAvailable) 
            ? [styles.devamEtButton, styles.devamEtButtonActive]
            : styles.devamEtButton
          }
          onPress={()=>{
            goToPriceRangeSelection()
          }}
        >
          <Text style={styles.devamEtButtonText}>DEVAM ET{nextStepAvailable}</Text>
        </TouchableOpacity>
      </View>
      

    </View>
  )
}

const styles = StyleSheet.create({
  row : {
    flexDirection : "row",
    height: 40,
    marginVertical : 13.5
  },
  col1 : {
    width: 40,
    backgroundColor : "#F7F7F7",
    borderRadius : 7,
    marginRight : 16,
    justifyContent : "center",
    alignItems : "center"
  },
  title : {
    fontSize : 16,
    fontWeight : "500"
  },
  desc : {
    fontSize : 12,
    color : "#999EA5",
    paddingTop : 6
  },
  col2 : {
    flex:1
  },
  col3 : {
    width: 112
  },
  peopleSelectorButtons : {
    height: 32,
    borderRadius: 32,
    backgroundColor : "#18223310",
    flexDirection : "row",
    justifyContent : "space-between",
    alignItems : "center"
  },
  minus : {
    width : 28,
    height : 28,
    borderRadius : 32,
    backgroundColor : "#18223310",
    justifyContent : "center",
    alignItems : "center"
  },
  plus : {
    width : 28,
    height : 28,
    borderRadius : 32,
    backgroundColor : "#A9C7FF",
    justifyContent : "center",
    alignItems : "center"
  },
  peopleAmount : {
    fontSize : 24,
    fontWeight : "bold"
  },
  devamEtButtonWrapper : {
    borderTopWidth : 1,
    borderTopColor : "#18323320",
    marginTop : 24,
    paddingTop:24
  },
  devamEtButton : {
    width: "100%",
    borderRadius : 32,
    backgroundColor : "#18223340",
    alignItems : "center",
    paddingVertical : 11
  },
  devamEtButtonActive : {
    backgroundColor : "#3B7FFF"
  },
  devamEtButtonText : {},
});

export default PeopleSelector
