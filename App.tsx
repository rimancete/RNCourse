import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  View,
  ListRenderItemInfo
} from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
import { CourseGoalsType } from "./interfaces";

export default function App() {
  const [courseGoals, setCourseGoals] = useState<CourseGoalsType[]>([]);
  const [modalVisable, setModalVisable] = useState(false);

  const startAddGoalHandler = () => {
    setModalVisable(!modalVisable);
  };
  const closeAddGoalHandler = () => {
    setModalVisable(false);
  };

  const addGoalHandler = (enterdGoalText: string) => {
    setCourseGoals((currentCourseGoals) => {
      return [
        ...currentCourseGoals,
        { id: Math.random().toString(), text: enterdGoalText },
      ];
    });
    setModalVisable(!modalVisable);
  };

  const deleteGoalHandler = (id: number) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => Number(goal.id) !== id);
    });
  };

  const renderItem = (itemData: ListRenderItemInfo<CourseGoalsType>) => {
    const { item } = itemData;
    const { text, id } = item;
    return (
      <GoalItem
        id={Number(id)}
        text={text}
        onDeleteGoalHandler={deleteGoalHandler}
      />
    );
  };

  const keyExtractor = (item: CourseGoalsType) => item.id;
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          visible={modalVisable}
          onClose={closeAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
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
