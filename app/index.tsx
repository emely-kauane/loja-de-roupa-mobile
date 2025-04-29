import { StyleSheet, Text, View } from "react-native";

const usuarios = [
  {
    id: 1,
    nome: "milly",
    cargo: "aluno"
  },
  {
    id: 2,
    nome: "bruna",
    cargo: "aluno"
  }
];
export default function Index() {
  return (
    <View
      style={style.container}
    >
      {
        usuarios.map(item => (
          <Text>{item.nome}</Text>
        ))
      }
    </View>
  );
}

const style = StyleSheet.create({

  container: {
    flex: 1,
    
  }

})