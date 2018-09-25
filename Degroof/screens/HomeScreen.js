import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput} from 'react-native'
import ProjectCard from '../components/ProjectCard'
import { SearchBar } from 'react-native-elements'

const projectData = [
  {
    name: 'BeCode',
    region: 'Bruxelles',
    fields: ['Education'],
    type: 'Coaching',
    skills: ['Code', 'I.T Knowledge'],
    hours: 'Unlimited',
    picture: {
      source: 'https://cdn-images-1.medium.com/max/1200/1*xkEpNboRERK0t5W63Z24fA.png',
    },
  },
  {
    name: 'Name 2',
    region: 'Region 2',
    fields: ['field 2.1', 'field 2.2', 'field 2.3'],
    type: 'type 2',
    skills: ['skill 2.1', 'skill 2.2', 'skill 2.3'],
    hours: 'hours 2',
    picture: {
      source: 'https://cdn-images-1.medium.com/max/1200/1*xkEpNboRERK0t5W63Z24fA.png',
    },
  },
  {
    name: 'Name 3',
    region: 'Region 3',
    fields: ['field 3.1', 'field 3.2', 'field 3.3'],
    type: 'type 3',
    skills: ['skill 3.1', 'skill 3.2', 'skill 3.3'],
    hours: 'hours 3',
    picture: {
      source: 'https://cdn-images-1.medium.com/max/1200/1*xkEpNboRERK0t5W63Z24fA.png',
    },
  },
  {
    name: 'Name',
    region: 'Region',
    fields: ['field', 'field', 'field'],
    type: 'type',
    skills: ['skill', 'skill', 'skill'],
    hours: 'hours',
    picture: {
      source: 'https://cdn-images-1.medium.com/max/1200/1*xkEpNboRERK0t5W63Z24fA.png',
    },
  },
  {
    name: 'Name',
    region: 'Region',
    fields: ['field', 'field', 'field'],
    type: 'type',
    skills: ['skill', 'skill', 'skill'],
    hours: 'hours',
    picture: {
      source: 'https://cdn-images-1.medium.com/max/1200/1*xkEpNboRERK0t5W63Z24fA.png',
    },
  },
  {
    name: 'Name',
    region: 'Region',
    fields: ['field', 'field', 'field'],
    type: 'type',
    skills: ['skill', 'skill', 'skill'],
    hours: 'hours',
    picture: {
      source: 'https://cdn-images-1.medium.com/max/1200/1*xkEpNboRERK0t5W63Z24fA.png',
    },
  },
  {
    name: 'Name',
    region: 'Region',
    fields: ['field', 'field', 'field'],
    type: 'type',
    skills: ['skill', 'skill', 'skill'],
    hours: 'hours',
    picture: {
      source: 'https://cdn-images-1.medium.com/max/1200/1*xkEpNboRERK0t5W63Z24fA.png',
    },
  },
  {
    name: 'Name',
    region: 'Region',
    fields: ['field', 'field', 'field'],
    type: 'type',
    skills: ['skill', 'skill', 'skill'],
    hours: 'hours',
    picture: {
      source: 'https://cdn-images-1.medium.com/max/1200/1*xkEpNboRERK0t5W63Z24fA.png',
    },
  },{
    name: 'Name',
    region: 'Region',
    fields: ['field', 'field', 'field'],
    type: 'type',
    skills: ['skill', 'skill', 'skill'],
    hours: 'hours',
    picture: {
      source: 'https://cdn-images-1.medium.com/max/1200/1*xkEpNboRERK0t5W63Z24fA.png',
    },
  },
]

export default class App extends Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (
      <View style={styles.container}>
        <SearchBar
        lightTheme
        // onChangeText={someMethod}
        // onClearText={someMethod}
        placeholder='Type Here...' />
        <ProjectCard data={projectData} />
      </View>
    )
  }
}
const styles = StyleSheet.create({ container: { flex: 1, marginTop: 24 } })
