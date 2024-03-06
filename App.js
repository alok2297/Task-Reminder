import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
export default function App() {
  const [goals, setgoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  function addGoalHandler(text) {
    if (text.length === 0) return;
    setgoals((currentGoals) => [
      ...currentGoals,
      { msg: text, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }
  function startAddGoalHandler() {
    setModalVisible(true);
  }
  function endAddGoalHandler(){
    setModalVisible(false);
  }
  function deleteGoalHandler(id) {
    console.log("Deleted");
    setgoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }
  return (
    <View style={styles.appContainer}>
      <Button
        title="Add new Goal"
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />
      <GoalInput visible={modalVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.msg}
                id={itemData.item.id}
                onDelete={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a'
  },
  goalsContainer: {
    flex: 4,
  },
});
