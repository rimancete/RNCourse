import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

  
interface GoalInputProps {
    onAddGoal: (value: string) => void;
}

export default function GoalInput({ onAddGoal }: GoalInputProps) {
  const [enterdGoalText, setEnterdGoalText] = useState("");

  const goalInputHandler = (text: string) => {
    setEnterdGoalText(text);
  };

  const addGoalHandler = () => {
    onAddGoal(enterdGoalText);
    setEnterdGoalText('');
};
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Your course goal!"
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enterdGoalText}
      />
      <Button title="Add goal" onPress={addGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    marginRight: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
});
