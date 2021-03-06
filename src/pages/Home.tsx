import React, { ReactElement, useState, useEffect } from 'react';
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

interface SkillData {
  id: string;
  name: string;
}

export default function App(): ReactElement {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [gretting, setGretting] = useState('');

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }
    setMySkills(oldValue => [...oldValue, data]);
  }

  function handleRemoveSkill(id: string) {
    setMySkills(oldState => oldState.filter(skill => skill.id !== id));
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
      <Text style={styles.title} testID="welcome">Welcome, Davi</Text>
      <Text style={styles.gretting}>{gretting}</Text>

      <View style={styles.areaInput}>
        <TextInput 
          testID="input-new"
          style={styles.input} 
          placeholder="New Skill" 
          placeholderTextColor="#555"
          onChangeText={setNewSkill}
        />

        <Button onPress={handleAddNewSkill} testID="button-add" title="Add" />
      </View>

      <Text style={[styles.title, { marginVertical: 40 }]}>My Skills</Text>

      {
        mySkills && (
          <FlatList 
            testID="flatlist-skills"
            data={mySkills}
            keyboardShouldPersistTaps="never"
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
              <SkillCard item={item.name} onPress={() => handleRemoveSkill(item.id)} />
            )}
            showsVerticalScrollIndicator={false}
          />
        )
      }
      
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