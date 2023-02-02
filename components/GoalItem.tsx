import {
  StyleSheet,
  Text,
  View,
  Pressable,
  GestureResponderEvent,
} from "react-native";

interface GoalItemProps {
  text: string;
  onDeleteGoalHandler: (e: number) => void;
  id: number;
}

export default function GoalItem({
  text,
  onDeleteGoalHandler,
  id,
}: GoalItemProps) {
  const onRemoveGoalHandler = () => {
    onDeleteGoalHandler(id);
  };

  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={onRemoveGoalHandler}
        android_ripple={{ color: "#3a0283" }}
        style={({pressed}) => pressed && styles.pressedItem} //iOs visual feedback
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 5,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5
  },
  goalText: {
    padding: 8,
    color: "#eee",
  },
});
