import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Burası src/screens/HomeScreen.tsx</Text>
      <Text style={styles.subText}>Mimari Kurulum Başarılı!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#333',
    },
    subText: {
      marginTop: 10,  
      fontSize: 16,
      color: '#666',
    },
});

export default HomeScreen