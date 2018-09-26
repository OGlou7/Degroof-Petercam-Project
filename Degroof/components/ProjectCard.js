import React from 'react';
import { Text, FlatList, StyleSheet} from 'react-native';
import ProjectRow from '../components/ProjectRow'

const _renderItem = ({ item }) => (
  <ProjectRow
    name={item.name}
    region={item.region}
    fields={item.fields}
    type={item.type}
    skills={item.skills}
    hours={item.hours}
    picture={item.picture.source}
  />
)

export default (ProjectCard = props => (
  <FlatList
    data={props.data}
    renderItem={_renderItem}
    keyExtractor={item => item.name}
    />
))
