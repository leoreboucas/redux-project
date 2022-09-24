import React from 'react';
import './styles.css'
import Card from '../Card'

// import { Container } from './styles';

function Intervalo(props) {
  const { min, max, onMinChanged, onMaxChanged } = props


  return (
    <Card title="Intervalo de Números" red>
        <div className='Intervalo'>
            <span>
                <strong>Mínimo:</strong>
                <input 
                  type="number" 
                  value={0} 
                  readOnly
                  />
            </span>
            <span>
                <strong>Máximo:</strong>
                <input 
                  type="number" 
                  value={10}
                  readOnly
                />
            </span>
        </div>
    </Card>
  );
}

export default Intervalo;