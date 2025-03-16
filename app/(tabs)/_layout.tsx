import React, { useEffect } from "react";
import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { GetLocalStorage } from "../../service/LocalStorage";
import { useRouter } from "expo-router";
const TabLayout = () => {
  const router = useRouter();

  const getUser = async () => {
    const userInfo = await GetLocalStorage("userDetail");

    if (!userInfo) {
      router.push("/login/signIn");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome size={24} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Addnew"
        options={{
          tabBarLabel: "AddNew",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome size={24} name="plus-square" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome size={24} name="user" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
