import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import FormRegister from '../components/auth/formRegister'; 

const email = "teste@teste.com"
const password = "123-abc"

describe('FormRegister', () => {
  it('renderiza o formulário de registro', () => {
    render(<FormRegister />);
    expect(screen.getByTestId("name")).toBeInTheDocument();
    expect(screen.getByTestId("email")).toBeInTheDocument();
    expect(screen.getByTestId("birthday")).toBeInTheDocument();
    expect(screen.getByTestId("password")).toBeInTheDocument();
    expect(screen.getByTestId("confirmPassword")).toBeInTheDocument();
    expect(screen.getByTestId("confirmEmail")).toBeInTheDocument();
   
  });

  it('permite a entrada de dados no formulário', () => {
    render(<FormRegister />);

    fireEvent.change(screen.getByTestId('name'), { target: { value: 'Nome teste' } });
    fireEvent.change(screen.getByTestId('email'), { target: { value: email } });
    fireEvent.change(screen.getByTestId('password'), { target: { value: password } });
    fireEvent.change(screen.getByTestId('birthday'), { target: { value: "2011-11-11" } });
    fireEvent.change(screen.getByTestId('confirmEmail'), { target: { value: email } });
    fireEvent.change(screen.getByTestId('confirmPassword'), { target: { value: password } });

    

    expect(screen.getByTestId("name").value).toBe('Nome teste');
    expect(screen.getByTestId("email").value).toBe(email);
    expect(screen.getByTestId("birthday").value).toBe("2011-11-11");
    expect(screen.getByTestId("password").value).toBe(password);
    expect(screen.getByTestId("confirmEmail").value).toBe(email);
    expect(screen.getByTestId("confirmPassword").value).toBe(password);

  });

});
