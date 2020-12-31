import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import Conta from './Conta'

describe('Componente de conta', () => {

    it('Exibir saldo da conta com formatação monetária', () => {
        render(<Conta saldo={1000} />)

        const saldo = screen.getByTestId('saldo-conta')

        expect(saldo.textContent).toBe('R$ 1000')
    })

    it('Chama a função realizar transação ao clicar no botão', () => {
        const funcaoRealizarTransacao = jest.fn()

        render(<Conta saldo={1000} realizarTransacao={funcaoRealizarTransacao} />)

        fireEvent.click(screen.getByText('Realizar operação'))

        expect(funcaoRealizarTransacao).toHaveBeenCalled()
    })
})