import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Text,
  Header,
  Image,
  Button,
  Box,
  StarsRating
} from 'sommelier'

export default function App() {
  const [counter, setCounter] = useState(0)

  const buttonPressHandler = () => {
    setCounter(counter + 1)
  }

  return (
    <View style={styles.container}>
      <H1>H1</H1>
      <H2>H2</H2>
      <H3>H3</H3>
      <H4>H4</H4>
      <H5>H5</H5>
      <H6>H6</H6>
      <Text>Text</Text>
      <Header>Header</Header>
      <Image image='https://reactnative.dev/img/tiny_logo.png'></Image>
      <Box>
        <Button onPress={buttonPressHandler}>{'+ 1'}</Button>
        <Text>{counter}</Text>
      </Box>
      <StarsRating rating={5} score={3}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
