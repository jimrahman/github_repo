import React, { useState } from "react";
import { View, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";

const LogIn = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const newUsername = (userinfo) => {
    setUserName(userinfo);
  };
  const pass = (passwordtext) => {
    setPassword(passwordtext);
  };

  const sendLoginReq = () => {
    const postData = {
      method: "POST",
      body: JSON.stringify({ username: userName, password: password }),
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
    };
    const apiURL = "http://192.168.0.107:8080/session";
    fetch(apiURL, postData)
      .then((res) => res.json())
      .then((json) => json.token)
      .then((jsonData) => {
        setToken(jsonData);
        console.log(jsonData);
      })
      .catch((e) => console.error(e));
  };
  console.log(token);
  return (
    <>
      <View>
        <TextInput
          label="Username"
          onChangeText={newUsername}
          value={userName}
        />
        <View>
          <TextInput label="Password" onChangeText={pass} value={password} />
        </View>
        <Button
          onPress={() => {
            sendLoginReq();
            console.log("presses");
          }}
        >
          Login
        </Button>
      </View>
    </>
  );
};

export default LogIn;
