import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../redux/counter';

const Login = (props) => {

    const dispatch = useDispatch();

    const _increment = () => { dispatch(increment())} ;
    const _decrement = () => { dispatch(decrement())};

    const {value} = useSelector(state => state.ReducerCounter)

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={_increment} style={styles.myButton}>
                <Text style={styles.myButtonTitle}>InCrement</Text>
            </TouchableOpacity>

            <Text style={styles.myTextCount}>{`${value}`}</Text>

            <TouchableOpacity onPress={_decrement} style={styles.myButton}>
                <Text style={styles.myButtonTitle}>DeCrement</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    myTextCount: {
        padding: 20,
        fontSize: 20,
    },
    myButton: {
        width: 100,
        height: 50,
        borderRadius: 5,
        backgroundColor: 'grey',
        justifyContent: 'center',
    },
    myButtonTitle: {
        color: 'white',
        fontSize: 16,
        alignSelf: 'center'
    }
});


export default Login;