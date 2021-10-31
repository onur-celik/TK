import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import uiColors from '../../uiColors';
import ArrowBlackRight from "./icons/arrow-black-right.svg";
import ReturnIcon from "./icons/return.svg";
const HamburgerMenuListItem = (props) => {
  const [listItemOpen, listItemOpenSetter] = useState(false);
  
  const populerBolgeler = [
    {
      il : "Antalya",
      ilceler : [
        "Kaş",
        "Kalkan",
        "Çukurbağ",
        "Islamlar",
        "Üzümlü",
        "Alanya",
        "Belek"
      ]
    }
  ];
  var populerBolgelerItems = [];
  for (let i = 0; i <populerBolgeler.length; i++) {
    populerBolgelerItems.push(
      <View key={i} style={styles.subList}>
        
        <TouchableOpacity style={styles.subListItem}>
          <Text style={{color: uiColors.text_blue}}>
            <ReturnIcon width={12} height={12} />
            <View style={{width : 10}}></View>
            {populerBolgeler[i].il} Kiralık Villa
          </Text>
          <View style={styles.HamburgerMenuListItemIcon}>
            <ArrowBlackRight width={14} height={14} />
          </View>
        </TouchableOpacity>

        {populerBolgeler[i].ilceler.map((ilce)=>{
          return (
            <TouchableOpacity key={()=>ilceler.findIndex(ilce)} style={styles.subListSubItem}>
              <Text style={{color : "#6D6D6D"}}>
                {ilce} Kiralık Villa
              </Text>
              <View style={[styles.HamburgerMenuListItemIcon, {opacity : 0.5}]}>
                <ArrowBlackRight width={14} height={14} />
              </View>
            </TouchableOpacity>
          )
        })}

      </View>
    );
  }

  return (
    <View>
      <TouchableOpacity 
        style={listItemOpen ? styles.HamburgerMenuListItemOpen : styles.HamburgerMenuListItem}
        onPress={()=>{
          listItemOpenSetter(!listItemOpen);
        }}
      >
        {
          listItemOpen ? 
          <View style={styles.HamburgerMenuListItemIconRotated}>
            <ArrowBlackRight width={14} height={14} />
          </View> : 
          null
        }
        <Text style={styles.label}>{props.label}</Text>
        {
          !listItemOpen ? 
          <View style={styles.HamburgerMenuListItemIcon}>
            <ArrowBlackRight width={14} height={14} />
          </View> : 
          null
        }
      </TouchableOpacity>
      {
        listItemOpen ?
        <View style={listItemOpen ? styles.shown : styles.hidden}>
          {populerBolgelerItems}
        </View> : 
        null
      }
    </View>
  )
}
const styles = StyleSheet.create({
  HamburgerMenuListItem : {
    height: 72,
    alignItems : "center",
    flexDirection : "row",
    paddingLeft: 24,
    justifyContent : "space-between",
    borderTopWidth : 1,
    borderTopColor : uiColors.text_black + "08"
  },
  HamburgerMenuListItemOpen: {
    height: 72,
    flexDirection : "row",
    justifyContent : "flex-start",
    alignItems : "center",
    paddingLeft: 10,
    borderTopWidth : 1,
    borderTopColor : uiColors.text_black + "08",
    borderBottomWidth : 1,
    borderBottomColor : uiColors.text_black + "08",
    marginBottom : 24
  },
  HamburgerMenuListItemIcon : {
    width:40,
    height:40,
    marginRight: 16,
    justifyContent: "center",
    alignItems : "center",
  },
  HamburgerMenuListItemIconRotated : {
    width:40,
    height:40,
    // marginRight: 16,
    justifyContent: "center",
    alignItems : "center",
    transform: [{ rotate: "180deg" }]
  },
  label : {
    color : uiColors.text_black,
    fontSize : 14
    // fontFamily : "Quicksand",
    // fontWeight : "700"
  },
  subList : {
    // paddingLeft : 24
  },
  subListItem : {
    flexDirection : "row",
    alignItems : "center",
    justifyContent : "space-between",
    paddingLeft : 24,
    height : 22,
    marginBottom: 24
  },
  subListSubItem : {
    flexDirection : "row",
    height:22,
    paddingLeft : 50,
    alignItems : "center",
    justifyContent : "space-between",
    marginBottom: 24
  },
});
export default HamburgerMenuListItem;