import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from "react-native";
import { Ionicons } from '@expo/vector-icons'

class TodoCreate extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
                <TextInput
                    placeholder="할 일을 입력해주세요."
                    style={{ borderWidth: 1, borderColor: '#f2f2e1', backgroundColor: '#eaeaea', height: 50, flex: 1, padding: 5 }}
                />
                <TouchableOpacity onPress={() => alert('onPress')}>
                    <View  style={styles.todoCreateButton}>
                        <Text style={{textAlign: 'center', marginTop: 15, marginLeft: 10,}}>추가하기</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
export default TodoCreate;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    todoCreateButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
});