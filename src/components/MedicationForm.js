// MedicationForm.js
import React, { useState } from 'react';

const MedicationForm = ({ onAddMedication }) => {
  const [nome, setNome] = useState('');
  const [dosagem, setDosagem] = useState('');
  const [frequencia, setFrequencia] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifica se os campos obrigatórios foram preenchidos
    if (!nome || !dosagem || !frequencia) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Cria um objeto com os dados do novo medicamento
    const newMedication = {
      id: Date.now(), // Gera um ID único baseado no timestamp
      nome,
      dosagem,
      frequencia,
    };

    // Chama a função de callback para adicionar o novo medicamento
    onAddMedication(newMedication);

    // Limpa os campos do formulário
    setNome('');
    setDosagem('');
    setFrequencia('');
  };

  return (
    <div>
      <h2>Cadastro de Medicamento</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </label>
        <br />
        <label>
          Dosagem:
          <input type="text" value={dosagem} onChange={(e) => setDosagem(e.target.value)} />
        </label>
        <br />
        <label>
          Frequência:
          <input type="text" value={frequencia} onChange={(e) => setFrequencia(e.target.value)} />
        </label>
        <br />
        <button type="submit">Adicionar Medicamento</button>
      </form>
    </div>
  );
};

export default MedicationForm;
