import React, { useState } from 'react';
import './App.css';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    if (altura && peso) {
      const alturaEmMetros = altura / 100;
      const imcCalculado = peso / (alturaEmMetros * alturaEmMetros);
      setImc(imcCalculado.toFixed(2));

      if (imcCalculado < 18.5) setClassificacao('Abaixo do peso');
      else if (imcCalculado < 24.9) setClassificacao('Peso normal');
      else if (imcCalculado < 29.9) setClassificacao('Sobrepeso');
      else if (imcCalculado < 34.9) setClassificacao('Obesidade Grau I');
      else if (imcCalculado < 39.9) setClassificacao('Obesidade Grau II');
      else setClassificacao('Obesidade Grau III');
    } else {
      setImc(null);
      setClassificacao('');
    }
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <div>
        <label>
          Altura (cm):
          <input
            type="number"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            placeholder="Digite sua altura em cm"
          />
        </label>
      </div>
      <div>
        <label>
          Peso (kg):
          <input
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            placeholder="Digite seu peso em kg"
          />
        </label>
      </div>
      <button onClick={calcularIMC}>Calcular IMC</button>

      {imc && (
        <div>
          <p>Seu IMC é: {imc}</p>
          <p>Classificação: {classificacao}</p>
        </div>
      )}
    </div>
  );
}

export default App;
