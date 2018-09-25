import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default (ProjectRow = props => (
  <View style={styles.row}>
    <Image style={styles.picture} source={{ uri: props.picture }} />
    <View>
      <Text style={styles.primaryText}>{props.name}</Text>
      <Text style={styles.secondaryText}>{props.region}</Text>
      <Text style={styles.secondaryText}>{props.fields}</Text>
      <Text style={styles.secondaryText}>{props.type}</Text>
      <Text style={styles.secondaryText}>{props.skills}</Text>
      <Text style={styles.secondaryText}>{props.hours}</Text>
    </View>
  </View>
))

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', padding: 20 },
  picture: { width: 130, height: 130, borderRadius: 0, marginRight: 18 },
  primaryText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black',
    marginBottom: 4,
  },
  secondaryText: { color: 'grey' },
})
