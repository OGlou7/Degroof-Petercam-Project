import React from 'react';
import {View,Text, Image, StyleSheet} from 'react-native';


class Boilerplate extends React.Component{
	render(){
		return(
			 <View style={styles.page}>
                <Text style={styles.maintitle}> Personal Page</Text>
                <Image source={require('../assets/images/userLog.png')} />
                <Text style={styles.hi}>Hi PSEUDO !</Text>
                <View style={styles.blocinfo}>
                    <Text style={styles.infotitle}> My informations :</Text>
                    <View style={styles.infobloc}>
                        <Text style={styles.infosubtitle}>Adress</Text>
                        <Text>Un truc</Text>
                    </View>
                    <View style={styles.infobloc}>
                        <Text style={styles.infosubtitle}>Region</Text>
                        <Text>Un autre truc</Text>  
                    </View>
                    <View style={styles.infobloc}>
                        <Text style={styles.infosubtitle}>Skills</Text>
                        <Text>Une liste de ouf</Text>
                        <Text>Une liste de ouf</Text>
                        <Text>Une liste de ouf</Text>
                        <Text>Une liste de ouf</Text>
                    </View>
                    <View style={styles.infobloc}>
                        <Text style={styles.infosubtitle}>Total hours counter</Text>
                        <Text>xx / 24 hours used</Text>
                    </View>
                </View>
        	</View>

			)
	}
}
export default Boilerplate;

const styles=StyleSheet.create({
    page:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40,
    },

	maintitle:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
    },

    hi:{
        paddingBottom: 20,
    },

    blocinfo: {
        width: '80%',
        backgroundColor: '#00cd76',
        borderRadius: 25,
        alignItems: 'center',

    },

    infotitle: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingVertical: 15,
    },

    infobloc: {
        paddingBottom: 15,
        alignItems: 'center',

    },


    infosubtitle: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        
    }
	})