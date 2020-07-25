import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../redux/counter';
import { fetchProfileData } from '../../redux/profileInfo';

const Login = (props) => {

    /**
     * USER DISPATCH
     */
    const dispatch = useDispatch();

    const _increment = () => { dispatch(increment()) };
    const _decrement = () => { dispatch(decrement()) };
    const _fetchProfile = () => { dispatch(fetchProfileData()) };

    /**
     * USE SELECTOR
     */
    const { ReducerCounter, ReducerProfile } = useSelector(state => state);

    useEffect(() => {
        console.log('Use effect')
    })

    const { value } = ReducerCounter

    /**
     * USE MEMO
     */
    const [memo, setMemo] = useState(0);

    const onSetMemo = () => { setMemo(memo + 1) };

    const _VIEW_MEMO = useMemo(
        () =>
            <Text style={{ width: 100, height: 30, color: 'red' }}>{`${memo}`}</Text>
        ,
        //README: something like add stack to memories => get from stack to compare with the new input.
        [memo]
    );

    /**
     * USE CALLBACK
     */
    const [callbackValue, setCallBackValue] = useState(0);
    
    const onsetCallbackValue = useCallback(() => setCallBackValue(0), [callbackValue])

    return (
        <SafeAreaView style={{ ...styles.container, flexDirection: 'column' }}>
            <View style={styles.container}>
                <TouchableOpacity onPress={_increment} style={styles.myButton}>
                    <Text style={styles.myButtonTitle}>InCrement</Text>
                </TouchableOpacity>

                <Text style={styles.myTextCount}>{`${value}`}</Text>

                <TouchableOpacity onPress={_decrement} style={styles.myButton}>
                    <Text style={styles.myButtonTitle}>DeCrement</Text>
                </TouchableOpacity>
            </View>
            <Text>{`${JSON.stringify(ReducerProfile)}`}</Text>
            <TouchableOpacity onPress={_fetchProfile} style={{ ...styles.myButton, width: 200 }}>
                <Text style={styles.myButtonTitle}>Fetch User Info</Text>
            </TouchableOpacity>

            {_VIEW_MEMO}
            <TouchableOpacity onPress={onSetMemo} style={{ ...styles.myButton, width: 200 }}>
                <Text style={styles.myButtonTitle}>Use Memo</Text>
            </TouchableOpacity>

            <Text>{callbackValue}</Text>

            <HvhButton
                title={`Use CallBack`}
                onClickListener={onsetCallbackValue}
            />


        </SafeAreaView>
    )
}

export const HvhButton = ({ title = '', onClickListener = () => { }, btnStyle, titleBtnStyle }) => {
    return (
        <TouchableOpacity style={{ ...btnStyle, width: 100, height: 50, backgroundColor: 'red', justifyContent: 'center' }} onPress={onClickListener}>
            <Text style={{ ...titleBtnStyle, color: 'white', alignSelf: 'center' }}>{title}</Text>
        </TouchableOpacity>
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