import React from 'react';
import { 
  Text, 
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function Button({onPress}) {
  return (
    <TouchableOpacity 
      style={styles.button} 
      activeOpacity={0.7} 
      onPress={onPress}
    >
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    marginTop: 30,
    marginLeft: 10,
    backgroundColor: '#a370f7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold'
  },
});