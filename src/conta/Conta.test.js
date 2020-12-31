import React from 'react'
import { render, screen } from '@testing-library/react'

import Conta from './Conta'

describe('Componente de conta', () => {

    it('Exibir saldo da conta com formnatação monetária', () => {
        render(<Conta saldo={1000} />)

        const saldo = screen.getByTestId('saldo-conta')

        expect(saldo.textContent).toBe('R$ 1000')
    })
})