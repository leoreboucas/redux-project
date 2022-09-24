import React from 'react';
import Card from '../Card';
import { connect } from 'react-redux';

// import { Container } from './styles';

function Soma(props) {
  const { min, max } = props


  return (
    <Card title="Soma dos Números" green>
        <div>
            <span>
                <span>Resultado:</span>
                <strong>{min + max}</strong>
            </span>
        </div>
    </Card>
  );
}

const mapStateToProps = (state) => {
  return {
    min: state.numeros.min,
    max: state.numeros.max
  }
}

export default connect(mapStateToProps)(Soma);