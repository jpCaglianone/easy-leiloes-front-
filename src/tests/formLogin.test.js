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

    });

    it('permite a entrada de dados no formulário', () => {
        render(<FormRegister />);

        fireEvent.change(screen.getByTestId('email'), { target: { value: email } });
        fireEvent.change(screen.getByTestId('password'), { target: { value: password } });

        expect(screen.getByTestId("email").value).toBe(email);
        expect(screen.getByTestId("password").value).toBe(password);

    });

});
