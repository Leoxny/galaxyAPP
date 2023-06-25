import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { colors, theme } from '../themes/theme';
import { AntDesign } from '@expo/vector-icons';

export const NetunoScreen = ({ navigation }) => {
    return (
        <View style={theme.container}>

            <ScrollView>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={{ marginTop: 70 }}>
                        <AntDesign name="arrowleft" size={25} color={colors.white} />
                    </View>
                </TouchableOpacity>

                <View style={{ alignItems: 'center' }}>
                    <Image source={require('../assets/netuno.png')} style={theme.image} />
                </View>

                <View style={{ marginTop: 20 }}>
                    <Text style={theme.title}>Netuno</Text>
                    <Text style={theme.subTitle}>Planeta mais distante</Text>
                </View>

                <View style={[theme.line, { marginTop: 20 }]} />

                <View>
                    <Text style={theme.subTitle}>Netuno ou Neptuno é o oitavo planeta do Sistema Solar, o último a partir do Sol desde a reclassificação de Plutão
                        para a categoria de planeta anão, em 2006. Pertencente ao grupo dos gigantes gasosos, possui um tamanho ligeiramente menor que o de Urano, mas maior massa, equivalente a 17 massas terrestres.</Text>
                </View>

                <View style={[theme.line, { marginTop: 20 }]} />

                <View style={{ marginTop: 10 }}>
                    <Text style={theme.title}>Galeria</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Image
                        source={require('../assets/images/netuno1.jpg')}
                        style={styles.image}
                    />
                    <Image source={require('../assets/images/netuno2.jpg')} style={styles.image}
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