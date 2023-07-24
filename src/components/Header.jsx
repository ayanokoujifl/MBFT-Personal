import { Image, Text, View } from "native-base"
import { SafeAreaView } from "react-native-safe-area-context"
import Logo from "../assets/logo.png"
import { Search } from "./Search"
export function Header() {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <View flex={1} bgColor={"#354B5E"}>
          <View
            id="Header"
            flexDirection={"row"}
            alignItems={"center"}
            h={"16"}
          >
            <Search />
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}
