
import React, { useEffect, useRef, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";

const jogos = [
  {
    id: "1",
    nome: "Red Dead Redemption",
    imagem: require("../../assets/images/redDead.jpg"),
  },
  {
    id: "2",
    nome: "Dark Souls",
    imagem: require("../../assets/images/DarkSouls.jpg"),
  },
  {
    id: "3",
    nome: "Cyberpunk 2077",
    imagem: require("../../assets/images/CP.jpg"),
  },
  {
    id: "4",
    nome: "Mortal Kombat 9",
    imagem: require("../../assets/images/MK9.jpg"),
  },
  {
    id: "5",
    nome: "Silent Hill 2",
    imagem: require("../../assets/images/SilentHill2.jpg"),
  },
  {
    id: "6",
    nome: "Days Gone",
    imagem: require("../../assets/images/DaysGone.jpg"),
  },
];

export default function CarrosselJogos() {
  const listaRef = useRef(null);
  const [indice, setIndice] = useState(0);
  const { width } = useWindowDimensions();

  const larguraCard = Math.min(width * 0.65, 230);
  const espacamento = 12;
  const passo = larguraCard + espacamento;

  function irPara(novoIndice) {
    const indiceValido =
      (novoIndice + jogos.length) % jogos.length;

    setIndice(indiceValido);

    listaRef.current?.scrollToOffset({
      offset: indiceValido * passo,
      animated: true,
    });
  }

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice((indiceAtual) => {
        const proximo = (indiceAtual + 1) % jogos.length;

        listaRef.current?.scrollToOffset({
          offset: proximo * passo,
          animated: true,
        });

        return proximo;
      });
    }, 4000);

    return () => clearInterval(intervalo);
  }, [passo]);

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <View>
          <Text style={styles.titulo}>Jogos em destaque</Text>
          <Text style={styles.subtitulo}>
            Descubra seu próximo jogo favorito
          </Text>
        </View>

        <View style={styles.botoes}>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => irPara(indice - 1)}
            accessibilityLabel="Jogo anterior"
          >
            <Text style={styles.seta}>‹</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => irPara(indice + 1)}
            accessibilityLabel="Próximo jogo"
          >
            <Text style={styles.seta}>›</Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        ref={listaRef}
        data={jogos}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        ItemSeparatorComponent={() => (
          <View style={{ width: espacamento }} />
        )}
        getItemLayout={(_, index) => ({
          length: passo,
          offset: passo * index,
          index,
        })}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => irPara(index)}
            style={[
              styles.card,
              { width: larguraCard },
            ]}
          >
            <Image
              source={item.imagem}
              style={styles.imagem}
              resizeMode="cover"
            />

            <View style={styles.faixaTitulo}>
              <Text
                style={styles.nomeJogo}
                numberOfLines={2}
              >
                {item.nome}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <View style={styles.indicadores}>
        {jogos.map((jogo, index) => (
          <TouchableOpacity
            key={jogo.id}
            onPress={() => irPara(index)}
            accessibilityLabel={`Mostrar ${jogo.nome}`}
            style={[
              styles.ponto,
              indice === index && styles.pontoAtivo,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginBottom: 20,
  },
  cabecalho: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "700",
    color: "#292A24",
  },
  subtitulo: {
    fontSize: 13,
    color: "#77786D",
    marginTop: 4,
  },
  botoes: {
    flexDirection: "row",
    gap: 8,
  },
  botao: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E4E1D8",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  seta: {
    fontSize: 27,
    lineHeight: 30,
    color: "#626B45",
  },
  lista: {
    paddingHorizontal: 16,
  },
  card: {
    height: 220,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#F1EFE7",
    borderWidth: 1,
    borderColor: "#E8E6DF",
  },
  imagem: {
    width: "100%",
    height: 170,
  },
  faixaTitulo: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    backgroundColor: "#FFFFFF",
  },
  nomeJogo: {
    fontSize: 14,
    fontWeight: "600",
    color: "#292A24",
  },
  indicadores: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 7,
    marginTop: 14,
  },
  ponto: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#D6D5CC",
  },
  pontoAtivo: {
    width: 22,
    backgroundColor: "#777F55",
  },
});
