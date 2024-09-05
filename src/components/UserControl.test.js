import { render, screen, fireEvent } from '@testing-library/react';
import UserControl from './UserControl';

test('renders Control de Usuarios title', () => {
    render(<UserControl />);
    const titleElement = screen.getByText(/Control de Usuarios/i);
    expect(titleElement).toBeInTheDocument();
});

test('deletes a resident', () => {
    render(<UserControl />);
    const deleteButton = screen.getAllByText(/Eliminar/i)[0];
    fireEvent.click(deleteButton);
    const deletedResident = screen.queryByText(/Juan Pérez/i);
    expect(deletedResident).toBeNull();
});
