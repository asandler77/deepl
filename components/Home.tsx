import React from 'react';
import {StyleSheet, Text, SafeAreaView, Button} from 'react-native';

interface Props {
  name: string;
}
export default ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home </Text>
      <Button
        title={'Go to Details'}
        onPress={() => navigation.navigate('Details')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
