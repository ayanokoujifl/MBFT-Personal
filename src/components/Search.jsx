import { Image, Input, View } from "native-base"
import SearchImage from "../assets/magnifying-glass.png"
export function Search() {
  return (
    <>
      <View w={"100%"} alignItems={"center"}>
        <Input
          type="text"
          leftElement={<Image source={SearchImage} alt="Logo" />}
          px={"12"}
          w={{
            base: "75%",
            md: "25%",
          }}
          variant={"underlined"}
          placeholder="Pesquise pela ficha"
          placeholderTextColor="#ffff"
          fontSize={"lg"}
          color={"#ffff"}
        />
      </View>
    </>
  )
}
