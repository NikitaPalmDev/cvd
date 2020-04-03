import React from 'react';
import { StyleSheet } from 'react-native'
import { Button } from '@ui-kitten/components';

export const ButtonStatusShowcase = () => {
    return (
        <Button style={styles.button} status='primary'>Зарегистрироваться</Button>
    );
  };

  const styles = StyleSheet.create({
    button: {
        width: '70%',
        marginBottom: 20,
    },
  });