import React from 'react';
import {StyleSheet,Image,View,Text,ScrollView} from 'react-native';
class MissionDescription extends React.Component{
	render(){
		return(
			 <ScrollView>
				 <Text style={styles.textArea}>Mission Description:</Text>
         <Text style={styles.textArea}>
					 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam faucibus nisi nisl, et pretium neque varius at. Nullam convallis lorem at tortor scelerisque, a molestie erat molestie. Mauris lacinia lacinia egestas. Quisque congue sem augue, eget lacinia sapien semper vel. Duis vitae vehicula nibh. Vivamus vitae ligula eget diam molestie rhoncus quis vitae risus. Suspendisse semper, lorem vel cursus efficitur, risus justo pretium lectus, sit amet vestibulum ipsum tortor mattis lectus. Duis feugiat lacus risus, facilisis maximus dui finibus a. Pellentesque vel feugiat eros. Aliquam tellus turpis, molestie quis purus at, vehicula tempus nulla. Pellentesque sit amet purus lacus.
         </Text>
			</ScrollView>
			)
	}
}

const styles = StyleSheet.create({
	textArea: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#B2B4B2',
	},
})
export default MissionDescription;
