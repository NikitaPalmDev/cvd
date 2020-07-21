import React, {useState} from 'react';
import { StyleSheet } from 'react-native'
import { Input } from '@ui-kitten/components';

export const InputWithLabelShowcase = () => {
    const [value, setValue] = React.useState('');
    return (
        <Input
            style={styles.input}
            placeholder='john.doe@example.com'
            value={value}
            onChangeText={setValue}
        />
    );
  };

  const styles = StyleSheet.create({
    input: {
        marginVertical: 20,
        width: '70%',
    },
  });
