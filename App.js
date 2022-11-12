import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function App() {

  const[userInfo, setUserInfo]= useState({
   email:"",
   passaword:"",
  });

  const handleChange=(value,field)=>{
    setUserInfo({...userInfo,[field]:value})
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={{ fontSize: 20 }}>
            Hola, esto es una prueba de teclado en ios y andorid
          </Text>

          <TextInput
            style={styles.input}
            placeholder="ingrese un Email"
            // keyboardType="phone-pad"
            autoComplete="off"
            autoCapitalize="none"
            value="hola@gmail.com"
            onChangeText={(value)=> handleChange(value,"email")}
          />

          <TextInput
            style={styles.input}
            placeholder="ingrese un password"
            // keyboardType="phone-pad"
            secureTextEntry={true}
            onChangeText={(value)=> handleChange(value,"passaword")}
          />

          <View>
            <Button title="Enviar" onPress={()=>console.log(userInfo)}/>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around",
  },
  input: {
    borderBottomColor: "red",
    borderBottomWidth: 3,
    margin: 16,
    padding: 6,
  },
});
