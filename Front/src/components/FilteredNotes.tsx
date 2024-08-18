import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Asegúrate de tener axios instalado
import '../styles/FilteredNotes.css';
import { getCompletions } from '../servicesIA/getCompletions';

interface Note {
  title: string;
  date: string;
  category: string;
  mood: string;
  content: string;
}

const MOODS = [
  { mood: "muyEnfadado", emoji: "😡", description: "Muy Enfadado" },
  { mood: "enfadado", emoji: "😠", description: "Enfadado" },
  { mood: "frustrado", emoji: "😤", description: "Frustrado" },
  { mood: "confundido", emoji: "😕", description: "Confundido" },
  { mood: "neutral", emoji: "😐", description: "Neutral" },
  { mood: "algoFeliz", emoji: "🙂", description: "Algo Feliz" },
  { mood: "feliz", emoji: "😊", description: "Feliz" },
  { mood: "muyFeliz", emoji: "😁", description: "Muy Feliz" },
  { mood: "entusiasmado", emoji: "😃", description: "Entusiasmado" },
  { mood: "extasiado", emoji: "😍", description: "Extasiado" },
];

const CATEGORIES = ["Trabajo", "Personal", "Estudio", "Hobbies", "Otros"];

const FilteredNotes: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<string>('');
  const [moodFilter, setMoodFilter] = useState<string>('');
  const [dateFilter, setDateFilter] = useState<string>('');
  const [titleFilter, setTitleFilter] = useState<string>('');
  const [showAdviceOptions, setShowAdviceOptions] = useState<string | null>(null);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [advice, setAdvice] = useState<string | null>(null);
  const [loadingAdvice, setLoadingAdvice] = useState<boolean>(false);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const user = sessionStorage.getItem('user');
        if (!user) {
          console.error('No user found in sessionStorage');
          return;
        }

        const url = `http://localhost:5023/api/lifenotes/notes/get/${user}`;
        const response = await axios.get(url);
        setNotes(response.data);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };

    fetchNotes();
  }, []);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryFilter(e.target.value);
  };

  const handleMoodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMoodFilter(e.target.value);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateFilter(e.target.value);
  };

  const handleDeleteNote = (index: number) => {
    console.log(`Nota eliminada: ${index}`);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleFilter(e.target.value);
  };

  const handleGetAdvice = (note: Note) => {
    setSelectedNote(note);
    setShowAdviceOptions(note.title);
    setAdvice(null);
    setLoadingAdvice(false);
  };

  const handleAdviceTypeClick = async (type: string) => {
    if (selectedNote) {
      setLoadingAdvice(true); 
      const response = await getCompletions(type, selectedNote.content, selectedNote.mood);
      setAdvice(response);
      setLoadingAdvice(false);
    }
  };

  const filteredNotes = notes.filter(note =>
    (categoryFilter ? note.category === categoryFilter : true) &&
    (moodFilter ? note.mood === moodFilter : true) &&
    (dateFilter ? note.date.includes(dateFilter) : true) &&
    (titleFilter ? note.title.toLowerCase().includes(titleFilter.toLowerCase()) : true)
  );

  const closeAdviceOptions = () => {
    setShowAdviceOptions(null);
    setSelectedNote(null);
    setAdvice(null);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  

  return (
    <div className="note-filter-container mt-5 mb-10">
      <div className="filters">

        <div className="filter-group">
          <label htmlFor="category">Categoría:</label>
          <select id="category" value={categoryFilter} onChange={handleCategoryChange}>
            <option value="">Todas</option>
            {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="mood">Estado de Ánimo:</label>
          <select id="mood" value={moodFilter} onChange={handleMoodChange}>
            <option value="">Todos</option>
            {MOODS.map(mood => (
              <option key={mood.mood} value={mood.mood}>{mood.description}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="date">Fecha:</label>
          <input
            id="date"
            type="date"
            value={dateFilter}
            onChange={handleDateChange}
          />
        </div>
      </div>

      <div className="filter-group title-filter mb-5">
        <label htmlFor="title">Título:</label>
        <input
          id="title"
          type="text"
          placeholder="Buscar por título"
          value={titleFilter}
          onChange={handleTitleChange}
        />
      </div>

      <div className="notes-container">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note, index) => (
            <div key={index} className="note-item">
              <div className='note-header'>
                <h3 className='title-note'>{note.title}</h3>
                <p className="date">{formatDate(note.date)}</p>
              </div>

              <p><strong>Categoría:</strong> {note.category}</p>
              <p><strong>Estado de Ánimo:</strong> {note.mood}</p>
              <p><strong>Descripción:</strong> {note.content}</p>

              <div className="note-actions flex justify-between items-center">
                <button onClick={() => handleDeleteNote(index)} className="delete-button">
                  🗑️ Eliminar
                </button>
                <button onClick={() => handleGetAdvice(note)} className="advice-button">
                  💬 Obtener Consejo
                </button>
              </div>

              {showAdviceOptions === note.title && (
                <div className="advice-section">
                  <div className="advice-bubbles">
                    <div className="advice-bubble" onClick={() => handleAdviceTypeClick('motivacional')}>
                      💡 Consejo Motivacional
                    </div>
                    <div className="advice-bubble" onClick={() => handleAdviceTypeClick('amigable')}>
                      🗨️ Consejo Amigable
                    </div>
                    <div className="advice-bubble" onClick={() => handleAdviceTypeClick('practico')}>
                      🛠️ Consejo Práctico
                    </div>
                    <div className="advice-bubble" onClick={() => handleAdviceTypeClick('inspirador')}>
                      ✨ Consejo Inspirador
                    </div>
                    <button className="close-button" onClick={closeAdviceOptions}>
                      ❌
                    </button>
                  </div>
                  <div className="advice-response-container">
                    {loadingAdvice ? (
                      <div className="advice-response">
                        <p>Analizando...</p>
                      </div>
                    ) : (
                      advice && (
                        <div className="advice-response">
                          {advice.split('\n').map((line, index) => (
                            <p key={index} className="advice-response-text">
                              {line}
                            </p>
                          ))}
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No se encontraron notas.</p>
        )}
      </div>
    </div>
  );
};

export default FilteredNotes;
