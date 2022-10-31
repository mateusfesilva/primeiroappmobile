import {Text, View, Image, StyleSheet, ScrollView } from 'react-native';


export default function App() {

  return (

    <View style={estilo.container}>

      <ScrollView>

        <Text style={estilo.titulo}>¡la mejor película del 2008!</Text>

        <Text style={estilo.subTitulo}>el sabado me mato :D</Text>

        <Image style={estilo.img} source={require("/assets/feijao.jpg")}/>

        <Text style={estilo.desc}>Frijoles Asesinos</Text>

        <Image style={estilo.img} source={require("/assets/chiquinha.jpg")}/>

        <Text style={estilo.desc}>Chiquinha en Apuros</Text>

        <Image style={estilo.img} source={require("/assets/pichula.jpg")}/>

        <Text style={estilo.desc}>El Pichula</Text>

        <Text style={estilo.subTitulo}>mírame un bol con un poco de harina</Text>
      </ScrollView>

    </View>

  );

}


const estilo = StyleSheet.create({
  container: {

    flex: 1,

    backgroundColor: '#261e23',

    alignItems: 'center',

    justifyContent: 'center',

  },



  titulo:{

    textAlign:"center",

    fontSize:40,

    color:"#fff",

    fontWeight:"900",

    marginTop:50,

    marginBottom:50

  },



  subTitulo:{

    fontSize: 30,

    textAlign:"center",

    color:"#eaed2b"

  },



  img:{

    border:2,

    width: 300,

    height: 400,

    alignSelf: "center",

    marginTop:30,

    marginBottom:30

    },



  desc:{

    fontSize:24,

    textAlign:"center",

    color:"#fff",

    marginBottom:100

  }
});
