import { Text, Box, NativeBaseProvider, StatusBar } from "native-base"
import { Header } from "./src/components/Header"
import { TouchableWithoutFeedback } from "react-native"

export default function App() {
  return (
    <NativeBaseProvider>
      <TouchableWithoutFeedback style={{ flex: 1 }}>
        <Header />
      </TouchableWithoutFeedback>
      <StatusBar
        backgroundColor={"#354B5E"}
        translucent
        barStyle={"light-content"}
      />
    </NativeBaseProvider>
  )
}
