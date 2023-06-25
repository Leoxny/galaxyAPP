import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { colors, theme } from '../themes/theme';
import { AntDesign } from '@expo/vector-icons';

export const VenusScreen = ({ navigation }) => {
  return (
    <View style={theme.container}>

      <ScrollView>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={{ marginTop: 70 }}>
            <AntDesign name="arrowleft" size={25} color={colors.white} />
          </View>
        </TouchableOpacity>

        <View style={{ alignItems: 'center' }}>
          <Image source={require('../assets/venus.png')} style={theme.image} />
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={theme.title}>Venus</Text>
          <Text style={theme.subTitle}>Planeta mais quente</Text>
        </View>

        <View style={[theme.line, { marginTop: 20 }]} />

        <View>
          <Text style={theme.subTitle}>Também chamado de Estrela Dalva, estrela da manhã, estrela da tarde e joia do céu, é considerado um planeta irmão da Terra.
            Isso decorre em virtude das similaridades de massa, densidade e volume entre ambos.</Text>
        </View>

        <View style={[theme.line, { marginTop: 20 }]} />

        <View style={{ marginTop: 10 }}>
          <Text style={theme.title}>Galeria</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Image
            source={require('../assets/images/venus1.jpg')}
            style={styles.image}
          />
          <Image source={require('../assets/images/venus2.jpg')} style={styles.image}
          />
        </View>

      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 180,
    height: 180,
    marginTop: 10,
    borderRadius: 10
  },
});