import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { colors, theme } from '../themes/theme';
import { AntDesign } from '@expo/vector-icons';

export const UranoScreen = ({ navigation }) => {
    return (
        <View style={theme.container}>

            <ScrollView>
                
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={{ marginTop: 70 }}>
                        <AntDesign name="arrowleft" size={25} color={colors.white} />
                    </View>
                </TouchableOpacity>

                <View style={{ alignItems: 'center' }}>
                    <Image source={require('../assets/urano.png')} style={theme.image} />
                </View>

                <View style={{ marginTop: 20 }}>
                    <Text style={theme.title}>Urano</Text>
                    <Text style={theme.subTitle}>Planeta gasoso</Text>
                </View>

                <View style={[theme.line, { marginTop: 20 }]} />

                <View>
                    <Text style={theme.subTitle}>Urano é o sétimo planeta a partir do Sol, o terceiro maior e o quarto mais massivo dos oito planetas do Sistema Solar</Text>
                </View>

                <View style={[theme.line, { marginTop: 20 }]} />

                <View style={{ marginTop: 10 }}>
                    <Text style={theme.title}>Galeria</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Image
                        source={require('../assets/images/urano1.jpg')}
                        style={styles.image}
                    />
                    <Image source={require('../assets/images/urano2.jpg')} style={styles.image}
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