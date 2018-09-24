import React from 'react';
import ProjectCard from '../components/ProjectCard';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  render() {
    return (
        <ProjectCard />
    )
  }
}
