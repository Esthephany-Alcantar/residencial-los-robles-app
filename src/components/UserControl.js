import React, { useState, useEffect } from 'react';
import residentData from '../residents.json'; // Importar la base de datos ficticia

const UserControl = () => {
    const [residents, setResidents] = useState([]);

    useEffect(() => {
        // Cargar datos de residentes al iniciar el componente
        setResidents(residentData);
    }, []);

    const handleDelete = (id) => {
        // Función para eliminar un residente
        const updatedResidents = residents.filter(resident => resident.id !== id);
        setResidents(updatedResidents);
    };

    return (
        <div>
            <h1>Control de Usuarios</h1>
            <ul>
                {residents.map((resident) => (
                    <li key={resident.id}>
                        {resident.nombre} - {resident.direccion} - {resident.telefono}
                        <button onClick={() => handleDelete(resident.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserControl;
