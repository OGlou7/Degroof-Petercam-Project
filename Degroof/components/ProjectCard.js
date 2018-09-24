import React from 'react';
import { Text, View, Image, SectionList, StyleSheet } from 'react-native';

export default class ProjectCard extends React.Component {
  render() {
    return (
      <View>
        <Image source={require('../assets/images/icon.png')}/>;
      </View>
    )

    // <SectionList
    // renderItem={({item, index, section}) => <Text key={index}>{item}</Text>}
    // )}
    // sections={[
    //   {data: ['item1']},
    //   {data: ['item2']},
    //   {data: ['item3']},
    //   {data: ['item4']},
    //   {data: ['item5']},
    //   {data: ['item6']},
    // ]}
    // keyExtractor={(item, index) => item + index}
    //   />;
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#B2B4B2',
//   },
// });
