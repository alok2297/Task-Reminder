import { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View,Image} from "react-native";
function GoalInput(props) {
  const [text, setText] = useState("");
  function goalInputHandler(e) {
    setText(e);
  }
  function addGoalHandler() {
    props.onAddGoal(text);
    setText("");
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')}/>
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal!"
          onChangeText={goalInputHandler}
          value={text}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}><Button title="Add goal" onPress={addGoalHandler} color='#5e0acc'/></View>
          <View style={styles.button}><Button title="Cancel" onPress={props.onCancel} color='#f31282'/></View>
        </View>
      </View>
    </Modal>
  );
}
export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#311b6b',
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: '#e4d0ff',
    width: "100%",
    color: '#120438',
    borderRadius: 6,
    padding: 10,
  },
  image :{
    width: 100,
    height: 100,
    margin: 20
  },
  buttonContainer:{
    flexDirection: "row",
    marginTop: 16
  },
  button: {
    width: 100,
    marginHorizontal: 8,

  }
});
