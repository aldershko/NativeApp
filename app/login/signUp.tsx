import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { useRouter } from "expo-router";
import React from "react";
import Colors from "@/constants/Colors";
import auth from "../../config/FirebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { SetLocalStorage } from "@/service/LocalStorage";
const signUp = () => {
  const styles = signUpStyles();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const createUserAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed up
        const user = userCredential.user;
        await updateProfile(user, {
          displayName: userName,
        });
        console.log(user);
        await SetLocalStorage("userDetail", user);
        router.push("/(tabs)");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(error);
        if (errorCode == "auth/email-already-in-use") {
          ToastAndroid.show("This email already exist", ToastAndroid.BOTTOM);
        }
      });
  };

  const handleSignIn = () => {
    router.push("/login/signIn");
  };
  const handlePress = () => {
    if (!email || !password) {
      ToastAndroid.show("Please enter email or password", ToastAndroid.BOTTOM);
      return;
    }
    createUserAccount();
  };
  return (
    <View
      style={{
        padding: 25,
      }}
    >
      <Text style={styles.headerText}>Create new account</Text>
      <View style={{ marginTop: 15 }}>
        <Text
          style={{
            padding: 10,
          }}
        >
          Fullname
        </Text>
        <TextInput
          placeholder="Fullname"
          style={styles.input}
          value={userName}
          onChangeText={(text) => setUserName(text)}
        />
      </View>

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
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonWhite} onPress={handleSignIn}>
        <Text style={styles.buttonTextWhite}>Already have an account?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default signUp;

const signUpStyles = () => {
  return StyleSheet.create({
    headerText: {
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold",
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
