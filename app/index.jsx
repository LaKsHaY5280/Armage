import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Link } from "expo-router";
import Profile from "./Profile";

export default function App() {
  return (
    <View className=" flex justify-center items-center bg-blue-300">
      <Text className=" text-3xl">armage</Text>
      <StatusBar style="auto" />
      <Link href="/Profile" to="profile">
        Profile
      </Link>
    </View>
  );
}
