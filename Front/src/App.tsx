import { getCompletionWithRetries } from './openIa/api'; // Ajusta la ruta si es necesario
import { FormEvent, useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (event:FormEvent) => {
    event.preventDefault();
    const result = await getCompletionWithRetries(input);
    setResponse(result);
  };

  return (
    <div className="App">
      <h1>OpenAI Demo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu pregunta aquí"
        />
        <button type="submit">Enviar</button>
      </form>
      <p>Respuesta de OpenAI:</p>
      <pre>{response}</pre>
    </div>
  );
}

export default App;
