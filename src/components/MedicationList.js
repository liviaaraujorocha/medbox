// MedicationList.js
import React from 'react';

const MedicationList = ({ medications, onDeleteMedication }) => {
  return (
    <div>
      <h2>Lista de Medicamentos:</h2>
      <ul>
        {medications.map((medication) => (
          <li key={medication.id}>
            <strong>{medication.nome}</strong>
            <p>Dosagem: {medication.dosagem}</p>
            <p>Frequência: {medication.frequencia}</p>
            <button onClick={() => onDeleteMedication(medication.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicationList;
