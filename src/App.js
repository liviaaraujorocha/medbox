// App.js
import React, { useState } from 'react';
import MedicationList from './components/MedicationList';
import MedicationForm from './components/MedicationForm';

const App = () => {
  const [medications, setMedications] = useState([]);

  const handleAddMedication = (newMedication) => {
    setMedications([...medications, newMedication]);
  };

  const handleDeleteMedication = (medicationId) => {
    setMedications(medications.filter((medication) => medication.id !== medicationId));
  };

  return (
    <div className="container">
      <h1 className="header center-align">Gerenciador de Medicamentos</h1>
      <div className="row">
        <div className="col s12 m6">
          <MedicationForm onAddMedication={handleAddMedication} />
        </div>
        <div className="col s12 m6">
          <MedicationList medications={medications} onDeleteMedication={handleDeleteMedication} />
        </div>
      </div>
    </div>
  );
};

export default App;
