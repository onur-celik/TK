import React from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = ({navigation}) => {
  return (
  <SafeAreaView style={{flex : 1}}>
    <ScrollView>
      <Button 
        title="Search Modal">
      </Button>
    </ScrollView>
  </SafeAreaView>
  )
}
export default HomeScreen;