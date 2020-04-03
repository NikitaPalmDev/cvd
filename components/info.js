import React from 'react';
import { StyleSheet } from 'react-native'
import { Text } from '@ui-kitten/components';

export const TextStatusesShowcase = () => {
    return (
        <Text style={styles.text} status='info'>Выполняя вход в сервис, вы подтверждаете, что ознакомились с документами «политика конфиденциальности», «согласие на обработку персональных данных» и «пользовательское соглашение» и согласны с ними.</Text>
    );
  };

  const styles = StyleSheet.create({
    text: {
        width: '70%',
    },
  });