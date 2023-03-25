import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import foods from "./food.json";
import bg from "./bg.jpg";

export default function App() {
  return (
    <ImageBackground style={styles.container} source={bg} blurRadius={5}>
      <Image
        source={{
          uri: foods[2].image,
        }}
        style={{
          height: 200,
          width: 350,
          borderRadius: 15,
          resizeMode: "cover",
        }}
      />
      <Text
        style={{
          color: "#fff",
          fontSize: 20,
          fontWeight: "bold",
          marginTop: 40,
        }}
      >
        {foods[2].name}
      </Text>

      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: "10%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          padding: 15,
        }}
      >
        <View
          style={{
            backgroundColor: "#1A5F7A",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 15,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
              fontWeight: "bold",
              padding: 15,
            }}
          >
            สุ่ม เมนูอาหาร
          </Text>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
