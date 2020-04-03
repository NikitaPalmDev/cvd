import React from 'react';
import { StyleSheet } from 'react-native'
import { Input } from '@ui-kitten/components';

export const InputSimpleUsageShowcase = () => {

    const [value, setValue] = React.useState('');
  
    return (
      <Input
        style={styles.input}
        placeholder='Иванов Иван Иванович'
        value={value}
        onChangeText={setValue}
      />
    );
};

  const styles = StyleSheet.create({
    input: {
        marginTop: 20,
        width: '70%',
    },
  });