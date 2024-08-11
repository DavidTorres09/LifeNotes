import AudioRecorder from "./utils/audioRecorder";
import React, { useState, useEffect } from "react";
import { transcribeAudio } from "../servicesIA/transcribeAudio";
import "../styles/noteWriter.css";

const MOODS = [
  { mood: "veryAngry", emoji: "😡", description: "Muy Enfadad@" },
  { mood: "angry", emoji: "😠", description: "Enfadad@" },
  { mood: "frustrated", emoji: "😤", description: "Frustrad@" },
  { mood: "confused", emoji: "😕", description: "Confundid@" },
  { mood: "neutral", emoji: "😐", description: "Neutral" },
  { mood: "slightlyHappy", emoji: "🙂", description: "Algo Feliz" },
  { mood: "happy", emoji: "😊", description: "Feliz" },
  { mood: "veryHappy", emoji: "😁", description: "Muy Feliz" },
  { mood: "excited", emoji: "😃", description: "Entusiasmad@" },
  { mood: "overjoyed", emoji: "😍", description: "Extasiad@" },
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
        simulateTyping(text)
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


  const handleSave = () => {
    console.log("Saving note:", { title, category, mood, message, currentDateTime });
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
