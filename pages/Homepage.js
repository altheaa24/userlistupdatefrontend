import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles'; 

export default function Homepage({navigation}){
    return(
      
        <View style={styles.mainContainer}>
         
            <View style={styles.formCard}>
                <Text style={styles.title}>Welcome!</Text>
                
                <Text style={styles.dataValue}>
                    Ready to create your account? 
                    Click the button below to start the registration process.
                </Text>


                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Register')}
                    activeOpacity={0.8}
                >
                    <Text style={styles.buttonText}>START REGISTRATION</Text>
                </TouchableOpacity>

                                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('UserList')}
                    activeOpacity={0.8}
                >
                    <Text style={styles.buttonText}>VIEW USERS</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
