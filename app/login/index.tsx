import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { useRouter } from "expo-router";

const LoginScreen = () => {
  const styles = LoginStyles();
  const router = useRouter();
  const handlePress = () => {
    router.push("/login/signIn");
  };
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image
          source={require("./../../assets/images/login.png")}
          style={styles?.image}
        />
      </View>
      <View style={styles.introContainer}>
        <Text style={styles.mainText}>Stay on Track , Stay Healthy</Text>
        <Text style={styles.subText}>
          Track your meds, take control of your health.{"\n"}Stay consistent,
          stay confident
        </Text>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
        <Text
          style={{
            color: "white",
            fontSize: 12,
            marginTop: 10,
          }}
        >
          Note:By clicking continue, you will agree to our terms and conditions
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;

const LoginStyles = () => {
  return StyleSheet.create({
    imageContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 30,
    },
    image: {
      width: 210,
      height: 430,
      borderRadius: 23,
    },
    introContainer: {
      padding: 20,
      backgroundColor: Colors.PRIMARY,
      height: "100%",
      borderRadius: 23,
    },
    mainText: {
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "center",
      color: "white",
    },
    subText: {
      fontSize: 14,
      color: "white",
      textAlign: "center",
      marginTop: 10,
    },
    button: {
      padding: 15,
      backgroundColor: "white",
      marginTop: 20,
      borderRadius: 23,
    },
    buttonText: {
      color: Colors.PRIMARY,
      textAlign: "center",
      fontSize: 20,
    },
  });
};
