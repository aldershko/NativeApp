import AsyncStorage from "@react-native-async-storage/async-storage"

export const SetLocalStorage = async (key , value) =>{
   await AsyncStorage.setItem(key,JSON.stringify(value));
}


export const GetLocalStorage = async (key) =>{
     const result =await AsyncStorage.getItem(key);
    return JSON.parse(result)
}