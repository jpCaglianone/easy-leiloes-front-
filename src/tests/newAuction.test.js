import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import NewAuction from '../components/NewAuction'; 

describe('NewAuction', () => {
  it('renderiza o formulário de novo leilão', () => {
    render(<NewAuction />);
    expect(screen.getByTestId("timeAuction")).toBeInTheDocument();
    expect(screen.getByTestId("value")).toBeInTheDocument();
  });

  it('permite a entrada de dados no formulário', () => {
    render(<NewAuction />);

    fireEvent.change(screen.getByTestId('timeAuction'), { target: { value: '30' } });
    fireEvent.change(screen.getByTestId('value'), { target: { value: '1000' } });

    expect(screen.getByTestId("timeAuction").value).toBe('30');
    expect(screen.getByTestId("value").value).toBe('1000');
  });
});
