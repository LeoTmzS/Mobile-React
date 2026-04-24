import React from "react";
import {View, Text, Image} from "react-native";
import {estilos} from "./estilos";

function Cabecalho(){

    const img1 = require('./img/imgcab.png');

    return(
        <View id='cabecalho' style={estilos.cabecalho}>
            <Image source={img1} style={estilos.imgcab} />
            <Text style={estilos.cabTexto}> Componente Picker </Text>
        </View>
    );
}
export default Cabecalho;