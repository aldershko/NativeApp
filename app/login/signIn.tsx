import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import Colors from "@/constants/Colors";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../config/FirebaseConfig";

const signIn = () => {
  const styles = signInStyles();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePress = () => {
    if (!email || !password) {
      ToastAndroid.show("Please enter email or password", ToastAndroid.BOTTOM);
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        console.log("..redirecting");
        router.replace("/(tabs)");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode == "auth/invalid-credential") {
          ToastAndroid.show("Invalid Password", ToastAndroid.BOTTOM);
        }
      });
  };

  const handleSignUp = () => {
    router.push("/login/signUp");
  };
  return (
    <View
      style={{
        padding: 25,
      }}
    >
      <Text style={styles.headerText}>Let's Sign You In</Text>
      <Text style={styles.subText}>Welcome Back</Text>
      <Text style={styles.subText}>You've been missed!</Text>

      <View style={{ marginTop: 5 }}>
        <Text
          style={{
            padding: 10,
          }}
        >
          Email
        </Text>
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View style={{ marginTop: 5 }}>
        <Text
          style={{
            padding: 10,
          }}
        >
          Password
        </Text>
        <TextInput
          placeholder="Password"
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonWhite} onPress={handleSignUp}>
        <Text style={styles.buttonTextWhite}>Create an account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default signIn;

const signInStyles = () => {
  return StyleSheet.create({
    headerText: {
      fontSize: 30,
      fontWeight: "bold",
      marginTop: 10,
    },
    subText: {
      fontSize: 30,
      fontWeight: "bold",
      color: "gray",
      marginTop: 10,
    },
    input: {
      borderWidth: 1,
      borderRadius: 23,
      backgroundColor: "white",
      fontSize: 15,
      padding: 10,
    },
    button: {
      padding: 15,
      backgroundColor: Colors.PRIMARY,
      marginTop: 20,
      borderRadius: 23,
    },
    buttonText: {
      color: "white",
      textAlign: "center",
      fontSize: 17,
    },
    buttonWhite: {
      padding: 15,
      backgroundColor: "white",
      marginTop: 20,
      borderRadius: 23,
    },
    buttonTextWhite: {
      color: Colors.PRIMARY,
      textAlign: "center",
      fontSize: 17,
    },
  });
};
