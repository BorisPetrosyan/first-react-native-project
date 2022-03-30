import React, { useState } from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function App() {

    const [enterGoal,setEnterGoal] = useState('')

    const goalInputHandler = (enteredText) => {
        setEnterGoal(enteredText)
    }

    const addGoalHandler = () => {
        console.log(enterGoal)
    }

    return (
        <View>
            <View style={styles.screen}>
                <View style={styles.inputContainer}>
                    <TextInput
                        onChangeText={goalInputHandler}
                        placeholder="Course Goal"
                        style={enterGoal ? styles.input : styles.inputPink}
                        value={enterGoal}
                    />
                    <Button title="ADD" onPress={addGoalHandler}/>
                </View>
                <Text>{enterGoal}</Text>
                <View/>
            </View>







            {/*Flexes*/}
            <View
                style={styles.flexContainer}
            >
                <View
                    style={styles.flexContainer1}
                >
                    <Text>1</Text>
                </View>
                <View
                    style={styles.flexContainer2}
                >
                    <Text>2</Text>
                </View>
                <View
                    style={styles.flexContainer3}
                >
                    <Text>3</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding:50
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    },
    inputPink: {
        width: '80%',
        borderColor: 'pink',
        borderWidth: 1,
        padding: 10
    },
    flexContainer3:{
        backgroundColor: 'green',
        flex: 1,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    flexContainer2:{
        backgroundColor: 'blue',
        flex: 2,
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center'
    },
    flexContainer1:{
        backgroundColor: 'red',
        flex: 3,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    flexContainer:{
        padding: 50,
        flexDirection: 'row',
        width: '80%',
        height: 300,
        justifyContent: 'space-around',
        alignItems: 'stretch'
    }
});
