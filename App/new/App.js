import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js  your app!</Text>
      <StatusBar style="auto" />
    </View>
    /*RULES:
      all tags should be in capital form .i.e, starting letter uppercase rest lowercase.
      <p> <=> <Text>
      <div> <=> <View>
      src <=> source
      url <=> uri:"link or path"
      */
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
