const initialState = {
    nome: '',
    nomes: [
        'Leonardo'
    ]
}

export default function nomesReducer(state = initialState, action) {
    switch(action.type){
        case 'NOME_ALTERADO':
            console.log(action.payload)
            return {
                ...state,
                nome: action.payload
            }
        case 'NOME_ADICIONADO':
            return {
                ...state,
                nomes: [...state.nomes, action.payload]
            }
        default:
            return state
    }
} 