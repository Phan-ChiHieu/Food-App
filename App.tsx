import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppMain from "./app/index";

export default function App() {
  return (
    <View>
      {/* <Text>Open up App.tsx to start working on your app! Chi HIEU</Text>
      <StatusBar style="auto" /> */}
      <AppMain />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
