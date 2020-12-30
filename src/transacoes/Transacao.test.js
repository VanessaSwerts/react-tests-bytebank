import React from 'react'
import { render } from '@testing-library/react'

import Transacao from './Transacao'

describe('Componente de ttransação do extrato', () => {
    it('conferindo o snapshot', () => {
        const { container } = render(<Transacao
            data="30/12/2020"
            tipo="saque"
            valor="20"
        />)
        expect(container.firstChild).toMatchSnapshot()
    })
})