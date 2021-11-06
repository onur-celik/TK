import React, {useState} from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import {Calendar, CalendarList, Agenda, LocaleConfig} from 'react-native-calendars';
import CalendarIcon from "./icons/calendar-icon.svg";
import CalendarIconActive from "./icons/calendar-icon-active.svg";
import UserIcon from "./icons/user-icon.svg";
import UserIconActive from "./icons/user-icon-active.svg";
import PeopleSelector from './PeopleSelector';
import PriceRangeSelector from './PriceRangeSelector';

LocaleConfig.locales['tr'] = {
  monthNames: ['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'],
  monthNamesShort: ['Ock.','Şbt.','Mrt.','Nsn.','May.','Haz.','Tem.','Ağu.','Eyl.','Ekm','Ksm.','Ara.'],
  dayNames: ['Pazar', 'Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi'],
  dayNamesShort: ['Pzr','Pts','Sal','Çar','Per','Cum','Cts'],
  today: 'Bu\'gün'
};
LocaleConfig.defaultLocale = 'tr';

const TimeRangeSelector = (props) => {
  const [tarihWidgetState, tarihWidgetStateSetter] = useState(1);
  const [tarihAraligi, tarihAraligiSetter] = useState({
    '2021-11-10': {color: '#FFADB2', textColor : "#701E24", startingDay: true},
    '2021-11-11': {color: '#FFADB214', textColor : "#701E24"},
    '2021-11-12': {color: '#FFADB214', textColor : "#701E24"},
    '2021-11-13': {color: '#FF4451', textColor : "#FFFFFF", endingDay: true},
  });
  return (
    <View>
      <Text style={styles.widgetHeader}>
        {
          (tarihWidgetState == 1 || tarihWidgetState == 2) 
            ? "Giriş tarihi seçin" 
            : (tarihWidgetState == 3)
              ? "Kişi sayısı seçin"
              : "Fiyat aralığınız var mı?" 
        }
      </Text>
      {
        (tarihWidgetState != 4) ?
          <View style={styles.widgetStatesContainer}>
            <View style={[styles.widgetStatesGroup, styles.firstGroup]}>
              <View style={
                (tarihWidgetState == 1) 
                  ? [styles.widgetStatesButton, styles.widgetStatesButtonActive]
                  : styles.widgetStatesButton
              }>
                {
                  (tarihWidgetState == 1) 
                  ? <CalendarIconActive backgroundColor={"red"} width={16} height={18} style={{marginRight : 6.7}}/>
                  : <CalendarIcon backgroundColor={"red"} width={16} height={18} style={{marginRight : 6.7}}/>
                }
                <Text style={
                  (tarihWidgetState == 1)
                    ? [styles.widgetStatesButtonText, styles.widgetStatesButtonActiveText]
                    : styles.widgetStatesButtonText
                }>
                  Giriş
                </Text>
              </View>
              <View style={styles.widgetStatesButton}>
                <Text style={styles.widgetStatesButtonText}>Çıkış</Text>
              </View>
            </View>
            <View style={[styles.widgetStatesGroup, styles.secondGroup]}>
              <View style={
                (tarihWidgetState == 3) 
                  ? [styles.widgetStatesButton, styles.widgetStatesButtonActive]
                  : styles.widgetStatesButton
              }>
                {
                  (tarihWidgetState == 3) 
                  ? <UserIconActive width={16} height={18} style={{marginRight : 6.7}}/>
                  : <UserIcon width={16} height={18} style={{marginRight : 6.7}}/>
                }
                <Text style={
                  (tarihWidgetState == 3)
                    ? [styles.widgetStatesButtonText, styles.widgetStatesButtonActiveText]
                    : styles.widgetStatesButtonText
                }>
                  Kişi Sayısı
                </Text>
              </View>
            </View>
          </View>
        : null
      }

      {
        (tarihWidgetState == 1) ?
        <View style={styles.calendarWrapper}>
          <Calendar
            // usage : https://github.com/wix/react-native-calendars
            onDayPress={(day) => { tarihWidgetStateSetter(3) }}
            onDayLongPress={(day) => {console.log('selected day', day)}}
            onMonthChange={(month) => {console.log('month changed', month)}}
            hideExtraDays={false}
            disableMonthChange={false}
            firstDay={1}
            hideDayNames={false}
            showWeekNumbers={false}
            onPressArrowLeft={subtractMonth => subtractMonth()}
            onPressArrowRight={addMonth => addMonth()}
            disableArrowLeft={false}
            disableArrowRight={false}
            disableAllTouchEventsForDisabledDays={false}
            markingType={'period'}
            markedDates={tarihAraligi}
          />
        </View>
        : (tarihWidgetState == 3) ?
          <View style={styles.calendarWrapper}>
            <PeopleSelector setter={tarihWidgetStateSetter}/>
          </View>
          : (tarihWidgetState == 4) ?
            <PriceRangeSelector />
          : null
      }

      
      <TouchableOpacity>
        <Text style={styles.skipLink}>DAHA SONRA SEÇ</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  widgetHeader : {
    textAlign : "center",
    width: "100%",
    marginTop : 24,
    fontSize: 24,
    fontWeight : "bold"
  },
  calendarWrapper : {
    margin : 16,
    borderRadius : 12,
    backgroundColor: "white",
    padding :10
  },
  skipLink : {
    textAlign : "center",
    marginTop: 16,
    fontWeight : "600"
  },
  widgetStatesContainer : {
    flexDirection : "row",
    justifyContent : "center",
    marginTop : 24
  },
  widgetStatesGroup : {
    flexDirection : "row",
    height : 40,
    backgroundColor : "#18223320",
    borderRadius: 32,
    alignItems : "center",
    padding : 4
  },
  firstGroup : {
    width: 168,
    marginRight : 8
  },
  secondGroup : {
    width : 127
  },
  widgetStatesButton : {
    flex: 1,
    textAlign : "center",
    alignItems : "center",
    justifyContent : "center",
    flexDirection : "row"
  },
  widgetStatesButtonText : {
    textAlign : "center",
  
  },
  widgetStatesButtonActive : {
    backgroundColor : "white",
    height: 32,
    borderRadius : 32,
    justifyContent : "center"
  },
  widgetStatesButtonActiveText : {
    color : "#3B7FFF"
  }
});

export default TimeRangeSelector
