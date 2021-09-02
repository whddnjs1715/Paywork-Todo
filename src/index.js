import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from './components/header/Header';

class TodoApp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header />
            </View>
        );
    }
}
export default TodoApp;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e9ecef',
      },
});