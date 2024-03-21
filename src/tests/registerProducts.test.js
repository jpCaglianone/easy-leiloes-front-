import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import FormProductRegister from '../components/products/formProductsRegister'; 

describe('FormProductRegister', () => {
  it('renderiza o formulário de registro de produto', () => {
    render(<FormProductRegister />);
    expect(screen.getByTestId("name")).toBeInTheDocument();
    expect(screen.getByTestId("description")).toBeInTheDocument();
    expect(screen.getByTestId("model")).toBeInTheDocument();
    expect(screen.getByTestId("specifications")).toBeInTheDocument();
    expect(screen.getByTestId("imageUrl")).toBeInTheDocument();
  });

  it('permite a entrada de dados no formulário', () => {
    render(<FormProductRegister />);

    fireEvent.change(screen.getByTestId('name'), { target: { value: 'Nome do Produto' } });
    fireEvent.change(screen.getByTestId('description'), { target: { value: 'Descrição do Produto' } });
    fireEvent.change(screen.getByTestId('model'), { target: { value: 'Modelo do Produto' } });
    fireEvent.change(screen.getByTestId('specifications'), { target: { value: 'Especificações do Produto' } });
    fireEvent.change(screen.getByTestId('imageUrl'), { target: { value: 'https://i.imgur.com/Cd03Oqm.jpg' } });

    expect(screen.getByTestId("name").value).toBe('Nome do Produto');
    expect(screen.getByTestId("description").value).toBe('Descrição do Produto');
    expect(screen.getByTestId("model").value).toBe('Modelo do Produto');
    expect(screen.getByTestId("specifications").value).toBe('Especificações do Produto');
    expect(screen.getByTestId("imageUrl").value).toBe('https://i.imgur.com/Cd03Oqm.jpg');
  });
});
