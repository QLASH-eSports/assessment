import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { CommonButtonProps } from '../../utils/types'


const Button = ({title, onPress}:CommonButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
        <View style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        marginTop:15
    },
    button:{
        borderRadius:5,
        paddingVertical:8,
        paddingHorizontal:15,
        backgroundColor:"#6BF3E7"
    },
    buttonText:{
        color:"#000",
        fontSize:16,
        textAlign:'center',
        fontFamily:"Oswald_700Bold"
    }
})

export default Button