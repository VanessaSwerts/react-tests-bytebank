import React from 'react'
import { render, screen, act } from '@testing-library/react'

import api from './api'
import App from './App'

jest.mock('./api')

describe('Requisições para API', () => {

  it('Exibir transações pela API', async () => {
    api.listaTransacoes.mockResolvedValue([
      {
        "valor": "10",
        "transacao": "saque",
        "data": "10/08/2020",
        "id": 1
      },
      {
        "transacao": "deposito",
        "valor": "20",
        "data": "26/09/2020",
        "id": 2
      },
    ])

    render(<App />)

    expect(await screen.findByText('saque')).toBeInTheDocument()
    expect(screen.getByTestId('transacoes').children.length).toBe(2)

  })
})