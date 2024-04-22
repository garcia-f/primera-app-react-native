
import * as React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { Appbar, PaperProvider, Card, Avatar, Text } from 'react-native-paper';




export default function App() {

  const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

  return (
    <PaperProvider>
      
      <Appbar.Header>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="React Native" />
        <Appbar.Action icon="calendar" onPress={() => {showCalendar}} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
      </Appbar.Header>

      <Card>
        {/* <Card.Cover source={{ uri: './assets/icon.png' }} /> */}
        <Card.Content>
          <Text>¿Que es React Native?</Text>
          <Text>
            React Native es un marco de desarrollo de aplicaciones móviles que permite a los desarrolladores crear aplicaciones nativas para dispositivos iOS y Android utilizando JavaScript y React, una biblioteca de JavaScript para construir interfaces de usuario. Fue desarrollado por Facebook y se lanzó por primera vez en 2015.
          </Text>
        </Card.Content>
      </Card>
   


    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
