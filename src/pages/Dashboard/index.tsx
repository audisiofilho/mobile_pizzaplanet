import React, { useContext, useState } from "react";

import { AuthContext } from "../../contexts/AuthContext";

import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  StyleSheet,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamsList } from "../../routes/app.routes";

export default function Dashboard() {
  const { signOut } = useContext(AuthContext);
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamsList>>();

  const [number, setNumber] = useState("");

  async function openOrder() {
    if (number === "") {
      return;
    }

    navigation.navigate("Order", {
      number: number,
      order_id: "12931a-1238173-asd13213",
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Novo pedido</Text>

      <TextInput
        value={number}
        onChangeText={setNumber}
        placeholder="Numero da mesa"
        placeholderTextColor="#f0f0f0"
        style={styles.input}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={openOrder}>
        <Text style={styles.buttonText}>Abrir mesa</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    backgroundColor: "#1d1d2e",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 24,
  },
  input: {
    width: "90%",
    height: 60,
    backgroundColor: "#101026",
    borderRadius: 4,
    paddingHorizontal: 8,
    textAlign: "center",
    fontSize: 22,
    color: "#fff",
  },
  button: {
    width: "90%",
    height: 40,
    backgroundColor: "#3fffa3",
    borderRadius: 4,
    marginVertical: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#101026",
    fontWeight: "bold",
  },
});
