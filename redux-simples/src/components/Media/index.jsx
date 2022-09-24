import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card';

// import { Container } from './styles';

function Media(props) {
  const { min, max } = props

  return (
    <Card title="Média dos Números" blue>
        <div>
            <span>
                <span>Resultado:</span>
                <strong>{(min + max) / 2}</strong>
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

export default connect(mapStateToProps)(Media);