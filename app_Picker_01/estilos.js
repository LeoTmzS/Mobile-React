import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    fundo:{
        flex:1, backgroundColor: '#87cefa'
    },
    cabecalho:{
        backgroundColor: 'white', width: '100%',
        justifyContent: 'center', alignItems: 'center', marginTop: 30, flex: 0.3
    },
    cabTexto:{
        fontSize:25, paddingTop: 10, textAlign: 'center', color: '#87cefa'    
    },
    imgcab:{
        height: 120, width: 120
    },
    conteudo:{
        backgroundColor: 'white', marginBottom: 10, flex: 0.7, backgroundColor: '#87cefa'
    },
    tituloConteudo:{
        padding:'20px', fontSize:'18px', alignSelf: 'center'
    },
    textoConteudo:{
        fontSize: '20px', padding:'10px'
    },
    inputNome:{
        backgroundColor: 'white', marginBottom: 10, height: 60, width: '60%', alignSelf: 'center', borderRadius: 30,
        padding: 20
    },
    picker:{
        backgroundColor: 'white', marginBottom: 10, height: 60, width: '60%', alignSelf: 'center', borderRadius: 30,
        padding: 20
    },
    textoResultado:{
       fontSize: '20px', padding:'10px', textAlign: 'center'
    },
    botao:{
        backgroundColor: 'green', marginTop: 30, height: 60, width: '60%', alignSelf: 'center', borderRadius: 20
    },
    textoBotao:{
        alignSelf: 'center', paddingTop: 15, fontSize: 20, color: 'white'
    }
});

export {estilos}