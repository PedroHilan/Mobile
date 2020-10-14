import React, {Component} from 'react';
import api from '../../services/api';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default class Main extends Component {
    static navigationOptions = {  
        title: "Técnicos",
        headerStyle: { 
            backgroundColor: '#dc3545'
        },
        headerTintColor: '#fff'
    }

    state = {
        docs: [],
        isSelected: true
    }

    componentDidMount(){
        this.carregarTecnicos();
    }

    carregarTecnicos = async () => {
        const response = await api.get('/tecnicos?token=6109AE5E94E0D1574C8DCEE83201DBF3F5C1B31D80F8148A31DF3586247FE6E9')
        
        const docs = response.data;
        this.setState({ docs })
    }

    adicionarTecnico = () => {
        api.post()
    }

    renderItem = ({item}) => (
        <View style={styles.containerTecnico}>
            <View>
                <TouchableWithoutFeedback>
                    <Text style={styles.tecnicoNome} >{item.nome}</Text>
                    <Icon name="angle-down" size={20} color="#000"/>
                </TouchableWithoutFeedback>
            </View>
            </View>
    )
            renderDescription = ({item}) => (
            <View style={styles.containerTecnico}>

                <Text style={styles.tecnicoCidade}>{item.cidade}</Text>
                <Text style={styles.tecnicoCelular}>{item.celular}</Text>
            
                <TouchableOpacity style={styles.tecnicoButton} 
                onPress={()=>{
                    this.props.navigation.navigate('Técnicos', {tecnico: item});
                }}>
                    <Text style={styles.tecnicoButtonText}> <Icon name="eye" size={18} color="#fff" />  
                    <Text/> Visualizar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tecnicoButton} onPress={()=>{}}>
                    <Text style={styles.tecnicoButtonText}> <Icon name="pencil" size={18} color="#fff" /> 
                    <Text/> Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tecnicoButton} onPress={()=>{}}>
                    <Text style={styles.tecnicoButtonText}> <Icon name="trash" size={18} color="#fff" />
                    <Text/> Excluir</Text>
                </TouchableOpacity>
            </View>
            )
    
    render(){
        const { isSelected } = this.state.isSelected;
        return(
            <View style={styles.containerList}>

                <TouchableOpacity style={styles.novoTecnicoButton} 
                onPress={()=>{
                    this.props.navigation.navigate('', {});
                }}>
                    <Text style={styles.novoTecnicoButtonText}> <Icon name="plus" size={18} color="#fff" />  
                    <Text/> Novo Técnico</Text>
                </TouchableOpacity>
                
                <FlatList
                    contentContainerStyle = {styles.list} 
                    data={this.state.docs}
                    keyExtractor={item => item.id}
                    renderItem={this.renderItem}
                />              
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerList:{
        flex: 1,
        backgroundColor: '#fafafa'
    },
    list:{
        padding: 20
    },
    containerTecnico:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#C0C0C0',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 6,
        padding: 10,
        marginBottom: 20
    },
    tecnicoNome:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    tecnicoCidade:{},
    tecnicoCelular:{},
    tecnicoButton:{
        height: 40,
        borderRadius: 5,
        backgroundColor: '#dc3545',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5
    },
    tecnicoButtonText:{
        color: '#fff',
        fontSize: 18
    },
    novoTecnicoButton: {
        height: 40,
        width: 150,
        marginLeft: 20,
        marginBottom: 5,
        borderRadius: 5,
        backgroundColor: '#dc3545',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8
    },
    novoTecnicoButtonText: {
        color: '#fff',
        fontSize: 16
    }
})