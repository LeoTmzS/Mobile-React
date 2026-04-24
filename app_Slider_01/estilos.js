import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({
  /* ===== APP (container geral) ===== */
  area_fundo: {
    flex: 1,
    backgroundColor: '#222', // fundo padrão (vai ser alterado pelo slider)
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20
  },

  /* ===== CABEÇALHO ===== */
  cabecalho: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: '#333',
    borderBottomWidth: 2,
    borderBottomColor: '#555'
  },

  imgCabecalho: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 8
  },

  textoCabecalho: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff'
  },

  /* ===== CONTEÚDO ===== */
  conteudo: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10
  },

  textoConteudo: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10
  },

  entradaTextoConteudo: {
    width: '80%',
    height: 45,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15
  },

  botaoConteudo: {
    marginTop: 20,
    backgroundColor: '#444',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    elevation: 3
  },

  /* ===== RODAPÉ ===== */
  rodape: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: '#333',
    borderTopWidth: 2,
    borderTopColor: '#555'
  },

  imgRodape: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 8
  },

  textoRodape: {
    fontSize: 14,
    color: '#fff'
  }
});