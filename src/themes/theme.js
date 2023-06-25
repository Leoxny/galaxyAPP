import { StyleSheet } from 'react-native';

export const colors = {
    primary: "#22224e",
    white: '#ffff',
    text: '#000'
}

export const theme = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        paddingHorizontal: 20,
    },
    title: {
        color: colors.white,
        fontFamily: "Montserrat-Bold",
        fontSize: 30,
    },
    title2: {
        color: colors.white,
        fontFamily: "Montserrat-Bold",
        fontSize: 35,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 30
    },
    subTitle: {
        color: colors.white,
        fontFamily: "Montserrat-Bold",
        fontSize: 15,
    },
    circule: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: 'transparent',
    },
    titleCard: {
        fontSize: 20,
        fontFamily: 'Montserrat-Bold',
        color: colors.white,
        marginLeft: 10,
        marginBottom: 5,
        paddingHorizontal: 10,
        top: 5
    },
    subtitleCard: {
        fontSize: 12,
        fontFamily: 'Montserrat-Bold',
        color: colors.white,
        marginLeft: 10,
        paddingHorizontal: 10
    },
    image: {
        width: 280,
        height: 220,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ContContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
        flex: 1
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: 'white',
        marginVertical: 10,
    },
});