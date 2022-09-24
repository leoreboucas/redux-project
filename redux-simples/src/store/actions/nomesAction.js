export function adicionarNome(novoNome) {
    return {
        type: 'NOME_ADICIONADO',
        payload: novoNome
    }
}

export function alterarNome(novoNome) {
    return {
        type: 'NOME_ALTERADO',
        payload: novoNome
    }
}