import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { colors, theme } from '../themes/theme';
import { AntDesign } from '@expo/vector-icons';

export const TerraScreen = ({ navigation }) => {
    return (
        <View style={theme.container}>

            <ScrollView>
                
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={{ marginTop: 70 }}>
                        <AntDesign name="arrowleft" size={25} color={colors.white} />
                    </View>
                </TouchableOpacity>

                <View style={{ alignItems: 'center' }}>
                    <Image source={require('../assets/terra.png')} style={theme.image} />
                </View>

                <View style={{ marginTop: 20 }}>
                    <Text style={theme.title}>Terra</Text>
                    <Text style={theme.subTitle}>Planeta com vida humana</Text>
                </View>

                <View style={[theme.line, { marginTop: 20 }]} />

                <View>
                    <Text style={theme.subTitle}>A Terra é considerada um planeta telúrico e possui sua estrutura interna dividida em: crosta terrestre, manto e núcleo. Além da estrutura interna, há também a externa
                        que corresponde à litosfera, hidrosfera, biosfera e atmosfera, que são o que oferece as condições favoráveis para a existência de vida aqui</Text>
                </View>

                <View style={[theme.line, { marginTop: 20 }]} />

                <View style={{ marginTop: 10 }}>
                    <Text style={theme.title}>Galeria</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Image
                        source={require('../assets/images/terra1.jpg')}
                        style={styles.image}
                    />
                    <Image source={require('../assets/images/terra2.jpg')} style={styles.image}
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