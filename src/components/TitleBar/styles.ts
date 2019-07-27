import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
interface Styles {
    container: ViewStyle;
    title: TextStyle;
}

const styles = StyleSheet.create<Styles>({
    container: {
    },
    title: {
      fontFamily: 'Futura',
      fontSize: 36,
    }
});

export default styles;