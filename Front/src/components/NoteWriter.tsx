import AudioRecorder from "./utils/audioRecorder";
import React, { useState, useEffect } from "react";
import axios from 'axios'; // Asegúrate de tener axios instalado
import { transcribeAudio } from "../servicesIA/transcribeAudio";
import "../styles/noteWriter.css";

const MOODS = [
  { mood: "muy enfadado", emoji: "😡", description: "Muy Enfadad@" },
  { mood: "enfadado", emoji: "😠", description: "Enfadad@" },
  { mood: "frustrado", emoji: "😤", description: "Frustrad@" },
  { mood: "confundido", emoji: "😕", description: "Confundid@" },
  { mood: "neutral", emoji: "😐", description: "Neutral" },
  { mood: "algo feliz", emoji: "🙂", description: "Algo Feliz" },
  { mood: "feliz", emoji: "😊", description: "Feliz" },
  { mood: "muy feliz", emoji: "😁", description: "Muy Feliz" },
  { mood: "entusiasmado", emoji: "😃", description: "Entusiasmad@" },
  { mood: "extasiado", emoji: "😍", description: "Extasiad@" },
];

const CATEGORIES = ["Trabajo", "Personal", "Estudio", "Hobbies", "Otros"];

const NoteWriter: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [mood, setMood] = useState<string | null>(null);
  const [message, setMessage] = useState<string>("");
  const [currentDateTime, setCurrentDateTime] = useState<string>(getDateAndHour());
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const handleFileReady = async (file: File) => {
    setIsUploading(true);
    try {
      const text = await transcribeAudio(file);
      if (text) {
        simulateTyping(text);
      }
    } catch (error) {
      console.error("Error transcribing audio:", error);
    } finally {
      setIsUploading(false);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(getDateAndHour());
    }, 1000); 

    return () => clearInterval(intervalId);
  }, []);

  function getDateAndHour() {
    const date = new Date();
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }

  function getISODate() {
    const date = new Date();
    return date.toISOString();
  }

  const simulateTyping = (text: string) => {
    let index = 0;
    setMessage('');
    const interval = setInterval(() => {
      setMessage(prev => prev + text[index]);
      index += 1;
      if (index >= text.length) {
        clearInterval(interval);
      }
    }, 50);
  };

  const handleSave = async () => {
    const user = sessionStorage.getItem('user');

    if (!user) {
      alert("No se encontró el usuario en la sesión.");
      return;
    }

    const noteData = {
      user,
      title,
      date: getISODate(), // Usa el formato ISO 8601 para enviar al backend
      category,
      mood,
      content: message
    };

    try {
      const response = await axios.post('http://localhost:5023/api/lifenotes/notes/addnote', noteData);

      if (response.status === 200) {
        alert('Nota guardada exitosamente');
        // Limpiar campos
        setTitle('');
        setCategory('');
        setMood(null);
        setMessage('');
        setCurrentDateTime(getDateAndHour()); // Reiniciar fecha y hora si es necesario
      } else {
        console.error('Error al guardar la nota:', response.statusText);
      }
    } catch (error) {
      console.error('Error al guardar la nota:', error);
    }
  };

  return (
    <div className="note-writer-container">
      <div className="note-writer-form">
        <div className="flex justify-between items-center">
          <h1 className="text-left">Escribir Nota</h1>
          <p className="text-right mt-2">Fecha: {currentDateTime}</p>
        </div>

        <div className="form-group mb-4 input-container">
          <label htmlFor="title">Título (Opcional):</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group mb-4 input-container">
          <label htmlFor="category">Categoría (Opcional):</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="category-select"
          >
            <option value="">Selecciona una categoría</option>
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group mb-4 input-container">
          <label>Estado de Ánimo (Obligatorio):</label>
          <div className="flex flex-wrap justify-center">
            {MOODS.map(({ mood: moodName, emoji }) => (
              <button
                key={moodName}
                onClick={() => setMood(moodName)}
                className={`mood-button ${mood === moodName ? "selected" : ""}`}
              >
                <span className="emoji">{emoji}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="form-group input-container">
          <label>Mensaje:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
          />
          <div className="flex justify-center mt-2">
            <AudioRecorder onFileReady={handleFileReady} />
          </div>
          {isUploading && <p className="text-center mt-2">Uploading...</p>}
        </div>

        <div className="text-center">
          <button onClick={handleSave} className="save-button">
            Guardar Nota
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteWriter;
