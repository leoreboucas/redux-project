import React from 'react';
import Card from '../Card';
import './styles.css'

import { adicionarNome, alterarNome } from '../../store/actions/nomesAction';

import { connect } from 'react-redux'

// import { Container } from './styles';

function ListaDeNomes(props) {
    const { nomes, nome, adicionar, alterar } = props

    function adicionado() {
        alterar('')
        adicionar(nome)
    }

  return (
    <Card title="Lista de nomes" gray>
        <div className='ListaDeNomes'>
            <div role='form'>
                <input
                    type="text"
                    placeholder='Nomes'
                    value={nome}
                    onChange={e => alterar(e.target.value)}
                />
                <button onClick={adicionado}>Adicionar</button>
            </div>
            {nomes && (
                <div>
                    {nomes.map((nome, index) => (
                        <ul key={index}>
                            <li>{nome}</li>
                        </ul>
                    ))}
                </div>
            )}
        </div>
    </Card>
  );
}

function mapStatesToProps(state) {
    return {
        nome: state.nomes.nome,
        nomes: state.nomes.nomes
    }
}

function mapDispatchToProps(dispatch) {
    return {
        alterar(novoNome){
            const action = alterarNome(novoNome)
            dispatch(action)
        },
        adicionar(novoNome){
            const action = adicionarNome(novoNome)
            dispatch(action)
        } 
    }
}   

export default connect(mapStatesToProps, mapDispatchToProps)(ListaDeNomes);