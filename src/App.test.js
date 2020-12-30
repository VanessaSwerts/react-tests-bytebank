import React from 'react'
import { render, screen } from '@testing-library/react'

//Importação do componente a ser testado
import App, { calcularNovoSaldo } from './App'

describe('Componente principal', () => {

    describe('Quando inicializar a aplicação: ', () => {
        it('o nome do banco é exibido', () => {
            render(<App />)
            expect(screen.getByText('ByteBank')).toBeInTheDocument()
        })

        it('o saldo é exibido', () => {
            render(<App />)
            expect(screen.getByText('Saldo:')).toBeInTheDocument()
        })

        it('o botão de realizar transação é exibido', () => {
            render(<App />)
            expect(screen.getByText('Realizar operação')).toBeInTheDocument()
        })
    })

    describe('Quando realizar uma transação: ', () => {
        it('saque, o valor do saldo diminue', () => {
            const valores = {
                transacao: 'saque',
                valor: 50
            }
            const novoSaldo = calcularNovoSaldo(valores, 150)

            expect(novoSaldo).toBe(100)
        })
        
        it('saque, o valor do saldo diminue', () => {
            const valores = {
                transacao: 'saque',
                valor: 50
            }
            const novoSaldo = calcularNovoSaldo(valores, 150)

            expect(novoSaldo).toBe(100)
        })
    })
})

