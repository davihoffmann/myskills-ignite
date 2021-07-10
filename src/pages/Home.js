import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  Platform,
  FlatList,
  StatusBar
} from 'react-native';

import Button from '../components/Button';
import SkillCard from '../components/SkillCard';

export default function App() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);
  const [gretting, setGretting] = useState('');

  function handleAddNewSkill() {
    setMySkills(oldValue => [...oldValue, newSkill]);
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if(currentHour < 12) {
      setGretting('Good Morning!');
    } else if(currentHour >= 12 && currentHour < 18) {
      setGretting('Good Afternoon!');
    } else {
      setGretting('Good Night!');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Davi</Text>
      <Text style={styles.gretting}>{gretting}</Text>

      <View style={styles.areaInput}>
        <TextInput 
          style={styles.input} 
          placeholder="New Skill" 
          placeholderTextColor="#555"
          onChangeText={setNewSkill}
        />

        <Button onPress={handleAddNewSkill} />
      </View>

      <Text style={[styles.title, { marginVertical: 40 }]}>My Skills</Text>

      <FlatList 
        data={mySkills}
        keyExtractor={(item) => item}
        renderItem={({item}) => (
          <SkillCard item={item} />
        )}
        showsVerticalScrollIndicator={false}
      />
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 70,
    paddingHorizontal: 30,
    backgroundColor: '#121015'
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  gretting:{
    color: '#fff',
  },
  areaInput: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7
  }
});