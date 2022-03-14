import * as Speech from "expo-speech";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";


export default function App() {
  const [userInput, setUserInput] = useState("");

  const speak = () => {
    Speech.speak(userInput);
  };
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Text to speak"
        onChangeText={(userInput) => setUserInput(userInput)}
        value={userInput}/>
      <Pressable style={styles.pressable} onPress={speak}>
        <Text style={styles.text}>Press to hear</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input:{
    marginTop: 30,
    fontSize: 20,
    width: 300,
    borderColor: "black",
    borderWidth: 2,
    margin: 15,
  },
  pressable: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 6,
    elevation: 6,
    backgroundColor: 'darkblue',
    marginBottom: 30,
  },
  text: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: 'bold',
    letterSpacing: 0.30,
    color: 'white',
  },
});