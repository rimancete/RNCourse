import { StyleSheet, Text, View } from "react-native";

interface GoalItemProps {
    text: string
}

export default function GoalItem({text}: GoalItemProps) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
