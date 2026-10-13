import { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import Header from "../components/Header";

export default function Product() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <View style={styles.container}>
      <Header
        menuAberto={menuAberto}
        setMenuAberto={setMenuAberto}
      />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.productContainer}
        showsVerticalScrollIndicator={true}
      >
        <Image
          source={{
            uri: "https://static.vecteezy.com/system/resources/previews/019/766/240/non_2x/amazon-logo-amazon-icon-transparent-free-png.png",
          }}
          style={styles.amazonLogo}
        />

        <Image
          source={{
            uri: "https://scale.coolshop-cdn.com/product-media.coolshop-cdn.com/23U6X8/c59051d30a9b48d48f98c793c83bb9b2.png/f/resident-evil-9-requiem.png",
          }}
          style={styles.gameCase}
        />

        <Text style={styles.title}>
          Resident Evil Requiem - PS5
        </Text>

          <Text style={styles.price}>R$ 279,90</Text>
          <Text>em até 10x R$ 30,09 </Text>
          <Text>Novo</Text>
          <Text style={{ color: "green"}}>Em estoque</Text>
     

        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            buttonColor="black"
            style={styles.button}
          >
            Ir para a loja
          </Button>
        </View>

      <View style={styles.description}>
  <Text style={styles.descriptionTitle}>
    O Retorno Sombrio a Raccoon City
  </Text>
  <Text style={styles.descriptionText}>
    Prepare-se para vivenciar o nono título principal da icônica série
    Resident Evil. Em Resident Evil Requiem, o terror de sobrevivência
    retorna com uma experiência intensa, combinando exploração, gerenciamento
    de recursos, enigmas e momentos de tensão que prometem manter você em
    constante alerta.
    
    A história acompanha Grace Ashcroft, uma analista do FBI que se vê
    envolvida em uma investigação relacionada aos acontecimentos de
    Raccoon City. A cidade, marcada pela tragédia ocorrida em 1998, retorna
    como um dos principais cenários da aventura, trazendo novos mistérios e
    ameaças para serem descobertos.
    
    O jogo permite alternar entre a perspectiva em primeira e terceira
    pessoa, oferecendo diferentes formas de explorar os ambientes e
    enfrentar os perigos. A combinação entre atmosfera sombria, violência
    extrema e elementos clássicos de survival horror proporciona uma
    experiência voltada para jogadores que buscam tensão e desafios.
    
    <Text style={{ fontWeight: "700" }}>Características:</Text>
    {"\n"}Marca: CAPCOM
    {"\n"}Modelo: Resident Evil Requiem
    
    {"\n\n"}<Text style={{ fontWeight: "700" }}>Destaques:</Text>
    {"\n"}Nono título principal da série Resident Evil
    {"\n"}Perspectiva alternável entre primeira e terceira pessoa
    {"\n"}Retorno à icônica Raccoon City
    {"\n"}Protagonista Grace Ashcroft, analista do FBI
    {"\n"}Terror de sobrevivência com foco em gerenciamento e enigmas
    
    {"\n\n"}<Text style={{ fontWeight: "700" }}>Informações Gerais:</Text>
    {"\n"}Plataforma: PS5
    {"\n"}Publisher: CAPCOM
    {"\n"}Gênero: Terror de sobrevivência
    {"\n"}Jogadores: 1 jogador offline
    {"\n"}Classificação: 18 Anos
    {"\n"}Linguagem Imprópria: Sim
    {"\n"}Violência Extrema: Sim
    
    {"\n\n"}<Text style={{ fontWeight: "700" }}>Idiomas:</Text>
    {"\n"}Áudio: Inglês
    {"\n"}Áudio: Português
    {"\n"}Áudio: Francês
    {"\n"}Legendas: Inglês
    {"\n"}Legendas: Português
    {"\n"}Legendas: Francês
    
    {"\n\n"}<Text style={{ fontWeight: "700" }}>Requisitos e Armazenamento:</Text>
    {"\n"}Espaço em Disco: Mínimo XX GB
    {"\n"}Manual: Não incluso
    
    {"\n\n"}<Text style={{ fontWeight: "700" }}>Conteúdo da Embalagem:</Text>
    {"\n"}Resident Evil Requiem PS5
    
    {"\n\n"}<Text style={{ fontWeight: "700" }}>Garantia:</Text>
    {"\n"}3 meses de garantia legal
    
    {"\n\n"}<Text style={{ fontWeight: "700" }}>Peso:</Text>
    {"\n"}82 gramas (bruto com embalagem)
  </Text>
</View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  logo: {
    fontSize: 26,
    fontWeight: "700",
    fontFamily: "System",
    paddingBottom: 20,
  },

  profile: {
    width: 44,
    height: 40,
    borderRadius: 22,
  },

  profilePic: {
    paddingBottom: 20,
  },

  scroll: {
    flex: 1,
  },

  productContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 50,
    paddingTop: 35,
  },

  amazonLogo: {
    width: 170,
    height: 50,
    marginBottom: 20,
  },

  gameCase: {
    width: 250,
    height: 300,
  },

  title: {
    paddingTop: 20,
    fontSize: 26,
    fontWeight: "500",
    fontFamily: "System",
    textAlign: "center",
  },

  price: {
    fontSize: 30,
    marginTop: 15,
  },

  buttonContainer: {
    paddingTop: 20,
    marginBottom: 30,
  },

  button: {
    width: 350,
  },

  description: {
    width: "100%",
  },

  descriptionTitle: {
    fontWeight: "500",
    fontSize: 30,
    marginBottom: 15,
  },

  descriptionText: {
    fontSize: 20,
    lineHeight: 30,
  },
});