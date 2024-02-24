import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import FormRegister from './FormRegister'; // Ajuste o caminho conforme necessário

describe('FormRegister', () => {
  it('renderiza o formulário de registro', () => {
    render(<FormRegister />);
    expect(screen.getByLabelText(/Nome completo:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Data Nascimento:/i)).toBeInTheDocument();
   
  });

  it('permite a entrada de dados no formulário', () => {
    render(<FormRegister />);

    fireEvent.change(screen.getByLabelText(/Nome completo:/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Email:/i), { target: { value: 'johndoe@example.com' } });

    expect(screen.getByLabelText(/Nome completo:/i).value).toBe('John Doe');
    expect(screen.getByLabelText(/Email:/i).value).toBe('johndoe@example.com');
  });

});
