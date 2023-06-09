import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import BottomNavBar from '../NavigationBar';
import UserContext from '../../../components/UserContext';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ClassRoomScreen = () => {
  const userContext = useContext(UserContext);

  if (!userContext || !userContext.user) {
    return null;
  }

  const { user } = userContext;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Hello, {user.username}</Text>
        {/* Your screen content here */}
      </View>
      <BottomNavBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 45,
    marginLeft: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ClassRoomScreen;
