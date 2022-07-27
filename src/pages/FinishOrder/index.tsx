import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Feather } from "@expo/vector-icons";

import { useRoute, useNavigation, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamsList } from "../../routes/app.routes";

import { api } from "../../services/api";

type RouteDetailParams = {
  FinishOrder: {
    number: string | number;
    order_id: string;
  };
};

type FinishOrderRouteProps = RouteProp<RouteDetailParams, "FinishOrder">;

export function FinishOrder() {
  const route = useRoute<FinishOrderRouteProps>();
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamsList>>();

  async function handleFinish() {
    try {
      await api.put("order/send", {
        order_id: route.params?.order_id,
      });

      navigation.popToTop();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.alert}>Você deseja finalizar o pedido?</Text>
      <Text style={styles.title}>Mesa {route.params?.number}</Text>

      <TouchableOpacity style={styles.button} onPress={handleFinish}>
        <Text style={styles.textButton}>Finalizar pedido</Text>
        <Feather name="shopping-cart" size={20} color="#1d1d2e" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d1d2e",
    paddingHorizontal: "4%",
    paddingVertical: "5%",
    alignItems: "center",
    justifyContent: "center",
  },
  alert: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 12,
  },
  title: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#3fffa3",
    flexDirection: "row",
    width: "60%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  textButton: {
    fontSize: 18,
    color: "#1d1d2e",
    fontWeight: "bold",
    marginRight: 8,
  },
});
