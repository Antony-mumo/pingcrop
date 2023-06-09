import React from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const OnBoardScreen = ({ navigation }) => {
  return (
    <SafeAreaView className='flex-1 items-center justify-between bg-white'>
      <Text className='text-blue-500 font-bold'>This is top text</Text>
      <Button
        title='go to login'
        onPress={() => navigation.navigate("Login")}
      />
      {/* <Button
        title='go to login'
        onPress={() => navigation.navigate("SignUp")}
      /> */}
      <Text>This is bottom text</Text>
    </SafeAreaView>
  );
};

export default OnBoardScreen;
