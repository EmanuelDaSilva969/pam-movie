import React from   'react'
import {View,Text,TouchableOpacity} from 'react-native'
import {Feather} from '@expo/vector-icons';
import styles from './style'


export default function Header(){

    return(
            <View style = {styles.viewHeader}>

                <TouchableOpacity>  

                <Feather name = 'menu' size= {36} color = "#FFF" />

                </TouchableOpacity>
                
                <Text style={styles.textHeader}>   PRIMEFILMES  </Text>
            
            </View>
    );

}