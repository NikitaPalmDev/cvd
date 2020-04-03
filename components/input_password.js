import React from 'react';
import { StyleSheet } from 'react-native'
import { Input } from '@ui-kitten/components';

  export const InputWithIconShowcase = () => {
    const [value, setValue] = React.useState('');
    return (
        <Input
            style={styles.input}
            placeholder='********'
            secureTextEntry={true}
            value={value}
            onChangeText={setValue}
        />
    );
  };

const styles = StyleSheet.create({
  input: {
      marginBottom: 20,
      width: '70%',
  },
});