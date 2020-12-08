import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ImageBackground } from 'react-native';

export default function App() {

  const [validCode, setValidCode] = useState('')
  const [confirmCode, setConfirmCode] = useState('')

  const vaildCode = () => {
    if (confirmCode.length == validCode.length) {
      console.log('correct')
    } else {
      console.log('error')
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={{ width: '100%', height: '100%', resizeMode: 'cover', flex: 1, justifyContent: 'center', }}
        source={require('./src/image/MegaTron.jpg')}>
        <Text style={styles.mainText}>Signup</Text>

        <Text style={styles.secondText}>for your account</Text>

        <Text style={styles.sideText}></Text>
        <TextInput
          style={styles.textInput}
          placeholder={'User Name'}
          keyboardType={'default'}
          autoCapitalize={'none'}
          maxLength={8}
        />

        <Text style={styles.sideText}></Text>
        <TextInput
          style={styles.textInput}
          placeholder={'Email Address'}
          keyboardType={'default'}
          autoCapitalize={'none'}
        />

        <Text style={styles.sideText}></Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setValidCode(text)}
          Value={validCode}
          secureTextEntry={true}
          textContentType="none"
          placeholder={'Password'}
          keyboardType={'default'}
          autoCapitalize={'none'}
          maxLength={16}

        />

        <Text style={styles.sideText}></Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setConfirmCode(text)}
          Value={confirmCode}
          secureTextEntry={true}
          textContentType="none"
          placeholder={'Retype password '}
          keyboardType={'default'}
          autoCapitalize={'none'}
          maxLength={16}
        />

        <Button
          title='sign up'
          onPress={() => vaildCode()}
        />

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',


  },

  mainText: {
    marginLeft: 25,
    borderRadius: 15,
    fontSize: 70,
    fontWeight: '700',
    textAlign: 'left',
    color: 'white',
    marginBottom: 0,
  },

  secondText: {
    marginLeft: 25,
    borderRadius: 15,
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'left',
    color: 'white',
  },

  textInput: {
    fontSize: 20,
    color: 'black',
    marginLeft: 25,
    paddingLeft: 15,
    width: 360,
    height: 45,
    borderRadius: 20,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
    textAlign: 'left',
    marginBottom: 10,
  },
});
