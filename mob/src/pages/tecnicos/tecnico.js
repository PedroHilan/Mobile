import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';


const Técnicos = ({ navigation }) => (
    <View>
        <Text>Nome do técnico:</Text>
        <Text>               {navigation.state.params.tecnico.nome}</Text>

        <Text>CPF:</Text>
        <Text>               {navigation.state.params.tecnico.cpf}</Text>

        <Text>Email:</Text>
        <Text>               {navigation.state.params.tecnico.email}</Text>

        <Text>Celular:</Text>
        <Text>               {navigation.state.params.tecnico.celular}</Text>

        <Text>Cidade:</Text>
        <Text>               {navigation.state.params.tecnico.cidade}</Text>
    </View>
);

Técnicos.navigationOptions = ({ navigation }) => ({
    headerStyle: { backgroundColor: '#dc3545' },
    headerTintColor: '#fff',
    title: navigation.state.params.tecnico.nome
})
export default Técnicos;
