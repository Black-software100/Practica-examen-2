import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container:{
        flex: 1,
        padding:20,
        alignItems:'center',
        justifyContent: 'center',
    },
    error:{
        color:"red"
    },
    success:{
        color:"green"
    },
    button:{
        marginTop:10
    },
    check:{
        display: "inline"
    }
});

export default styles;