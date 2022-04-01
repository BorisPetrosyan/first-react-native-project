import React, {useState} from 'react';
import {StyleSheet, View, FlatList, Button} from 'react-native';
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {

    const [courseGoals, setCourseGoals] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false)
    const addGoalHandler = goalTitle => {
        setCourseGoals(currentGoals => [
            ...currentGoals,
            {id: Math.random().toString(), value: goalTitle}
        ]);
        setIsAddMode(false)
    };

    const removeGoalHandler = goalId => {
        setCourseGoals(currentGoals => {
            return currentGoals.filter((goal) => goal.id !== goalId)
        })
    }

    const cancelGoalAdditionHandler = () => {
        setIsAddMode(false)
    }

    return (
        <View>
            <View style={styles.screen}>
                <Button title={'Add New Goal'} onPress={() => setIsAddMode(true)}/>
                <GoalInput
                    visible={isAddMode}
                    onAddGoal={addGoalHandler}
                    onCancel={cancelGoalAdditionHandler}
                />
                <FlatList
                    keyExtractor={(item, index) => item.id}
                    data={courseGoals}
                    renderItem={itemData => (
                        <GoalItem
                            id={itemData.item.id}
                            onDelete={removeGoalHandler}
                            title={itemData.item.value}
                        />
                    )}
                />
            </View>


            {/*Flexes*/}
            {/*<View*/}
            {/*    style={styles.flexContainer}*/}
            {/*>*/}
            {/*    <View*/}
            {/*        style={styles.flexContainer1}*/}
            {/*    >*/}
            {/*        <Text>1</Text>*/}
            {/*    </View>*/}
            {/*    <View*/}
            {/*        style={styles.flexContainer2}*/}
            {/*    >*/}
            {/*        <Text>2</Text>*/}
            {/*    </View>*/}
            {/*    <View*/}
            {/*        style={styles.flexContainer3}*/}
            {/*    >*/}
            {/*        <Text>3</Text>*/}
            {/*    </View>*/}
            {/*</View>*/}
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50
    },
    flexContainer3: {
        backgroundColor: 'green',
        flex: 1,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    flexContainer2: {
        backgroundColor: 'blue',
        flex: 2,
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center'
    },
    flexContainer1: {
        backgroundColor: 'red',
        flex: 3,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
