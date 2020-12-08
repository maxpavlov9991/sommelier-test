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
  StarsRating,
  Switch,
  RadioButton,
  SearchInput,
  InputPrice,
  Navbar,
  Item

} from 'sommelier'

import { theme } from 'sommelier/App/theme'
import { ThemeProvider } from 'styled-components/native'

export default function App() {
  const [counter, setCounter] = useState(0)

  const buttonPressHandler = () => {
    setCounter(counter + 1)
  }

  return (
    <View>
      <ThemeProvider theme={theme}>
        <H1>H1</H1>
        <H2>H2</H2>
        <H3>H3</H3>
        <View>
          <StarsRating rating={5} score={3}/>
        </View>
        <H4>H4</H4>
        <H5>H5</H5>
        <InputPrice placeholder='Placeholder' value='500 рубасов'></InputPrice>
        <H6>H6</H6>
        <SearchInput onChange={() => console.log('search input changed')}></SearchInput>
        <Switch value />
        <Switch value switchType='heart'/>
        <RadioButton checked ></RadioButton>
        <Text>Text</Text>
        <Header size='h1'>Header</Header>
        <Image image={'https://i.ibb.co/PNTRVt0/shrek.png'} width={1000} height={400}/>
        <Image image={'https://i.ibb.co/PNTRVt0/shrek.png'} width={1000} height={400}/>
        <Button icon={''} onPress={buttonPressHandler} text={'+ 1'}/>
        <Navbar>
          <Item text={'Item1'} onPress={() => console.log('NavbarItemPressed 1')}/>
          <Item text={'Item2'} onPress={() => console.log('NavbarItemPressed 2')}>Item 2</Item>
          <Item text={'Item3'} onPress={() => console.log('NavbarItemPressed 3')}>Item 3</Item>
        </Navbar>
      </ThemeProvider>
    </View>
  );
}