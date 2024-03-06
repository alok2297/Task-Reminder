import { Pressable, StyleSheet } from "react-native";
import { View, Text } from "react-native";
function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={props.onDelete.bind(this, props.id)}
      >
        <Text style={styles.textItem}>{props.text}</Text>
      </Pressable>
    </View>
  );
}
export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    padding: 8,
  },
  textItem: {
    color: "white",
  },
});
