import React from 'react'

import { StyleSheet, Text, View}from 'react-native'

export default props => 
    <View style={styles.display}>
        <Text style={styles.displayValue}
            numberOfLines={1}>{props.value}</Text>
    </View>

const styles = StyleSheet.create({
    display:{
        flex:1,
        padding:20,
        justifyContent:'center',
        backgroundColor:'rgba(0,0,0, 0.6)',
        alignItems:'flex-end',
    },
    displayValue:{
        fontSize:50,
        color:'#fff',
    }
})