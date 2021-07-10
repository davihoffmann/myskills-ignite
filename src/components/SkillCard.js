import React, { useState } from 'react';
import { 
  Text, 
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function SkillCard({item}) {
  return (
    <TouchableOpacity style={styles.buttonSkill} activeOpacity={0.7}>
      <Text style={styles.textSkill}>
        {item}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1f1e25',
    padding: 20,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 10
  },
  textSkill: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold', 
  },
});