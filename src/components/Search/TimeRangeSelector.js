import React, {useState} from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
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
  return (
    <View>
      <Text style={styles.widgetHeader}>Giriş Tarihi Seçin</Text>
      <View style={styles.calendarWrapper}>
        <Calendar
          // usage : https://github.com/wix/react-native-calendars
          onDayPress={(day) => {console.log('selected day', day)}}
          onDayLongPress={(day) => {console.log('selected day', day)}}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'DD MM yyyy'}
          onMonthChange={(month) => {console.log('month changed', month)}}
          hideArrows={true}
          renderArrow={(direction) => (<Arrow/>)}
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
          renderHeader={(date) => {console.log("date is : ", date)}}
          enableSwipeMonths={true}
        />
      </View>
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
  }
});

export default TimeRangeSelector
