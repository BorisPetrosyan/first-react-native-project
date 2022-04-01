import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = enteredText => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('')
    }
    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course Goal"
                    style={enteredGoal ? styles.input : styles.inputPink}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title={"CANCEL"} color='red' onPress={props.onCancel}/>
                    </View>
                    <View style={styles.button}>
                    <Button title="ADD" onPress={addGoalHandler}/>
                    {/*<Button title="ADD" onPress={() => props.onAddGoal(enteredGoal)} />*/}
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
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
        padding: 10,
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
        width:'60%'
    },
    button: {
        width:'40%'
    }
});

export default GoalInput;