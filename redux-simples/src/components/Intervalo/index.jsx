import React from 'react';
import './styles.css'
import Card from '../Card'

import { connect } from 'react-redux'

// import { Container } from './styles';

import { alterarNumeroMaximo, alterarNumeroMinimo } from '../../store/actions/numerosAction'

function Intervalo(props) {
  const { min, max, alterarMinimo, alterarMaximo } = props


  return (
    <Card title="Intervalo de Números" red>
        <div className='Intervalo'>
            <span>
                <strong>Mínimo:</strong>
                <input 
                  type="number" 
                  value={min}
                  onChange={e => alterarMinimo(+e.target.value)} 
                  />
            </span>
            <span>
                <strong>Máximo:</strong>
                <input 
                  type="number" 
                  value={max}
                  onChange={e => alterarMaximo(+e.target.value)} 
                />
            </span>
        </div>
    </Card>
  );
}

const mapStateToProps = (state) => {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    alterarMinimo(novoNumero){
      // action creator -> action
      const action = alterarNumeroMinimo(novoNumero)
      dispatch(action)
    },

    alterarMaximo(novoNumero){
      const action = alterarNumeroMaximo(novoNumero)
      console.log(action)
      dispatch(action)
    }
  }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
  )(Intervalo);