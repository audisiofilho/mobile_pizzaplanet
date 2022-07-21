import React, { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";

import { View, Text, Button } from "react-native";

export default function Dashboard() {
  const { signOut } = useContext(AuthContext);

  return (
    <View>
      <Text>Tela dashboard</Text>
      <Button title="Sair" onPress={signOut} />
    </View>
  );
}
