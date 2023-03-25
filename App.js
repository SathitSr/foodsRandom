import React, { useState, useEffect } from "react";
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
  const [randoms, setRandoms] = useState(-1);
  const rands = () => {
    setRandoms(Math.floor(Math.random() * (36 - 0 + 1) + 0));
  };
  return (
    <ImageBackground style={styles.container} source={bg} blurRadius={5}>
      {randoms === -1 ? (
        <View>
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 25 }}>
            มื้อนี้กินอะไรดี??
          </Text>
        </View>
      ) : (
        <>
          <Image
            source={{
              uri: foods[randoms].image,
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
            {foods[randoms].name}
          </Text>
        </>
      )}

      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: "10%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          padding: 15,
        }}
        onPress={() => rands()}
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
