import React from 'react';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { InputSimpleUsageShowcase } from './components/input_fio'
import { InputWithLabelShowcase } from './components/input_mail';
import { InputWithIconShowcase } from './components/input_password';
import { ButtonStatusShowcase } from './components/button_primary';
import { TextStatusesShowcase } from './components/info';

const HomeScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category='h1'>Регистрация</Text>
    <InputSimpleUsageShowcase />
    <InputWithLabelShowcase />
    <InputWithIconShowcase />
    <ButtonStatusShowcase />
    <TextStatusesShowcase />
  </Layout>
);

export default function App() {
  return (
  <ApplicationProvider mapping={mapping} theme={lightTheme}>
    <HomeScreen />
  </ApplicationProvider>
  );
}