import { useState } from "react";
import {
  Button,
  GestureResponderEvent,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [enterdGoalText, setEnterdGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState<string[]>([]);
  const goalInputHandler = (text: string) => {
    setEnterdGoalText(text);
  };

  const addGoalHandler = (e: GestureResponderEvent) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enterdGoalText,
    ]);
    console.log(enterdGoalText);
  };
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your course goal!"
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <Button title="Add goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView alwaysBounceVertical={false}>
          {courseGoals.map((goal, index) => (
            <View key={goal + index} style={styles.goalItem}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
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
  goalsContainer: {
    flex: 6,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 5,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "#eee",
  },
});
