import React, { useState } from 'react';
import { estilos } from './estilos';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import Slider from '@react-native-community/slider';

function Conteudo() {
  let corInicialFundoApp = '#ffff00';
  let corInicialTxtConteudo = '#3fff';

  const [corFundoCxTxt, setorFundoCxTxt] = useState('#ffff00');
  const [corDeFundoApp, setorFundoApp] = useState(corInicialFundoApp);
  const [corDoTexto, setorDoTexto] = useState(corInicialTxtConteudo);
  const [nome, setNome] = useState("");

  let textoConteudo = "O componente Slider permite que o usuário escolha um valor de um " +
    "intervalo predefinido de valores, arrastando um botão ao longo de uma linha do " +
    "controle deslizante, como mostrado nas figuras ao lado. Verifique o exemplo abaixo:\n";

  function verifica() {
    if (nome != "") {
      alert("Olá, " + nome + "! \n Experimente deslizar os componentes abaixo " +
        "e trocar os padrões de cores iniciais do app!");
    } else if (nome == "") {
      alert("Você precisa digitar seu nome na caixa de texto correspondente!");
    }
  }

  function corDeFoco() {
    setorFundoCxTxt('orange');
  }

  function corNormal() {
    setorFundoCxTxt('#ffff00');
  }

  function alteraNome(nome) {
    setNome(nome);
  }

  function deslizaSlider1(index) {
    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setorDoTexto(randomColor);
  }

  function deslizaSlider2(index) {
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setorFundoApp(randomColor);
  }

  return (
    <View id="conteudo" style={[estilos.conteudo, { backgroundColor: corDeFundoApp }]}>
      <Text style={[estilos.textoConteudo, { color: corDoTexto }]}>{textoConteudo}</Text>
      <Text style={estilos.textoConteudo}>Digite seu nome:</Text>
      <TextInput
        style={[estilos.entradaTextoConteudo, { backgroundColor: corFundoCxTxt }]}
        onFocus={corDeFoco}
        onBlur={corNormal}
        value={nome}
        onChangeText={alteraNome}
      />
      <Text style={estilos.textoConteudo}>Deslize o Slider abaixo:</Text>
      <Slider
        id="Slider1"
        style={{ width: '75%', marginTop: 30 }}
        step={5}
        minimumValue={0}
        maximumValue={100}
        onValueChange={deslizaSlider1}
      />
      <Text style={estilos.textoConteudo}>Deslize o Slider abaixo:</Text>
      <Slider
        id="Slider2"
        style={{ width: '75%', marginTop: 30 }}
        step={10}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor='white'
        maximumTrackTintColor='red'
        onValueChange={deslizaSlider2}
      />
      <TouchableHighlight
        onPress={verifica}
        style={estilos.botaoConteudo}>
        <Text style={{ color: '#ffff00', fontWeight: 'bold', textAlign: 'center' }}>
          CLIQUE AQUI
        </Text>
      </TouchableHighlight>
    </View>
  );
}

export default Conteudo;