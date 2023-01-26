import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  ListRenderItemInfo,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
import { CourseGoalsType } from "./interfaces";


export default function App() {
  const [courseGoals, setCourseGoals] = useState<CourseGoalsType[]>([]);

  const addGoalHandler = (enterdGoalText: string) => {
    setCourseGoals((currentCourseGoals) => {
      return [
        ...currentCourseGoals,
        { id: Math.random().toString(), text: enterdGoalText },
      ];
    });
  };


  const renderItem = (itemData: ListRenderItemInfo<CourseGoalsType>) => {
    const { item } = itemData;
    const { text } = item;
    return <GoalItem text={text} />;
  };

  const keyExtractor = (item: CourseGoalsType) => item.id;
  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          alwaysBounceVertical={false}
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
  },
  goalsContainer: {
    flex: 6,
  },
});
