import { useState } from "react";
import { Button, StyleSheet, TextInput, View, Modal } from "react-native";

interface GoalInputProps {
  onAddGoal: (value: string) => void;
  onClose: () => void;
  visible: boolean;
}

export default function GoalInput({ onAddGoal, visible, onClose }: GoalInputProps) {
  const [enterdGoalText, setEnterdGoalText] = useState("");

  const goalInputHandler = (text: string) => {
    setEnterdGoalText(text);
  };

  const addGoalHandler = () => {
    onAddGoal(enterdGoalText);
    setEnterdGoalText("");
  };
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your course goal!"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enterdGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "100%",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16
  },
  button: {
    width: '30%',
    marginHorizontal: 8
  }
});
