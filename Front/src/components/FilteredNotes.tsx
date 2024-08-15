import React, { useState } from 'react';
import '../styles/FilteredNotes.css';
import { getCompletions } from '../servicesIA/getCompletions';

interface Note {
  title: string;
  date: string;
  category: string;
  mood: string;
  description: string;
}

const sampleNotes: Note[] = [
    {
      title: "Nota de Ejemplo 1",
      date: "10/08/2024 14:30",
      category: "Trabajo",
      mood: "happy",
      description: "Descripción de la nota 1: Hoy he tenido una reunión muy productiva.",
    },
    {
      title: "Nota de Ejemplo 2",
      date: "11/08/2024 09:15",
      category: "Personal",
      mood: "veryAngry",
      description: "Descripción de la nota 2: Me he sentido frustrado por el tráfico esta mañana.",
    },
    {
      title: "Nota de Ejemplo 3",
      date: "12/08/2024 18:00",
      category: "Estudio",
      mood: "confused",
      description: "Descripción de la nota 3: No entiendo bien el tema de matemáticas que estamos viendo.",
    },
    {
      title: "Nota de Ejemplo 4",
      date: "13/08/2024 20:45",
      category: "Hobbies",
      mood: "excited",
      description: "Descripción de la nota 4: Acabo de terminar un proyecto de arte que me ha hecho sentir muy satisfecho.",
    },
    {
      title: "Nota de Ejemplo 5",
      date: "14/08/2024 12:30",
      category: "Otros",
      mood: "neutral",
      description: "Descripción de la nota 5: Día tranquilo sin eventos destacados.",
    },
    {
      title: "Nota de Ejemplo 6",
      date: "15/08/2024 10:00",
      category: "Trabajo",
      mood: "slightlyHappy",
      description: "Descripción de la nota 6: La reunión de equipo salió bien y el proyecto avanza.",
    },
    {
      title: "Nota de Ejemplo 7",
      date: "16/08/2024 15:30",
      category: "Estudio",
      mood: "happy",
      description: "Descripción de la nota 7: Comprendí el concepto complicado en clase hoy.",
    },
    {
      title: "Nota de Ejemplo 8",
      date: "17/08/2024 11:45",
      category: "Personal",
      mood: "confused",
      description: "Descripción de la nota 8: No estoy seguro de cómo proceder con el plan de fin de semana.",
    },
    {
      title: "Nota de Ejemplo 9",
      date: "18/08/2024 08:30",
      category: "Hobbies",
      mood: "overjoyed",
      description: "Descripción de la nota 9: Empecé un nuevo proyecto de jardinería que me entusiasma mucho.",
    },
    {
      title: "Nota de Ejemplo 10",
      date: "19/08/2024 14:00",
      category: "Otros",
      mood: "angry",
      description: "Descripción de la nota 10: Hubo un problema con la entrega del pedido y estoy molesto.",
    },
    {
      title: "Nota de Ejemplo 11",
      date: "20/08/2024 19:30",
      category: "Trabajo",
      mood: "frustrated",
      description: "Descripción de la nota 11: El cliente cambió de opinión a última hora y eso complicó todo.",
    },
    {
      title: "Nota de Ejemplo 12",
      date: "21/08/2024 16:15",
      category: "Estudio",
      mood: "veryHappy",
      description: "Descripción de la nota 12: Aprobé el examen con una nota excelente.",
    },
    {
      title: "Nota de Ejemplo 13",
      date: "22/08/2024 13:00",
      category: "Hobbies",
      mood: "neutral",
      description: "Descripción de la nota 13: Hice un dibujo nuevo, pero no estoy seguro de qué pensar al respecto.",
    },
    {
      title: "Nota de Ejemplo 14",
      date: "23/08/2024 17:45",
      category: "Personal",
      mood: "excited",
      description: "Descripción de la nota 14: Planeé un viaje para el fin de semana y estoy muy emocionado.",
    },
    {
      title: "Nota de Ejemplo 15",
      date: "24/08/2024 09:00",
      category: "Trabajo",
      mood: "veryAngry",
      description: "Descripción de la nota 15: Tuve un desacuerdo importante con un colega y estoy muy enfadado.",
    },
    {
      title: "Nota de Ejemplo 16",
      date: "25/08/2024 12:30",
      category: "Otros",
      mood: "slightlyHappy",
      description: "Descripción de la nota 16: Recibí una buena noticia que mejoró mi día.",
    },
    {
      title: "Nota de Ejemplo 17",
      date: "26/08/2024 18:00",
      category: "Estudio",
      mood: "happy",
      description: "Descripción de la nota 17: Terminé un proyecto de investigación que me había costado mucho tiempo.",
    },
    {
      title: "Nota de Ejemplo 18",
      date: "27/08/2024 10:15",
      category: "Hobbies",
      mood: "confused",
      description: "Descripción de la nota 18: No estoy seguro de cómo avanzar en el nuevo proyecto de manualidades.",
    },
    {
      title: "Nota de Ejemplo 19",
      date: "28/08/2024 14:30",
      category: "Personal",
      mood: "angry",
      description: "Descripción de la nota 19: Me sentí decepcionado por una situación familiar complicada.",
    },
    {
      title: "Nota de Ejemplo 20",
      date: "29/08/2024 20:00",
      category: "Trabajo",
      mood: "frustrated",
      description: "Descripción de la nota 20: La carga de trabajo ha sido muy alta y me siento agotado.",
    },
  ];  

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


const FilteredNotes: React.FC = () => {
  const [categoryFilter, setCategoryFilter] = useState<string>('');
  const [moodFilter, setMoodFilter] = useState<string>('');
  const [dateFilter, setDateFilter] = useState<string>('');
  const [titleFilter, setTitleFilter] = useState<string>('');
  const [showAdviceOptions, setShowAdviceOptions] = useState<string | null>(null);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [advice, setAdvice] = useState<string | null>(null);
  const [loadingAdvice, setLoadingAdvice] = useState<boolean>(false);

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
    setAdvice(null); // Resetear el consejo cuando se selecciona una nueva nota
    setLoadingAdvice(false); // Resetear estado de carga al solicitar un nuevo consejo
  };

  const handleAdviceTypeClick = async (type: string) => {
    if (selectedNote) {
      setLoadingAdvice(true); // Mostrar mensaje de carga
      const response = await getCompletions(type, selectedNote.description, selectedNote.mood);
      setAdvice(response);
      setLoadingAdvice(false); // Ocultar mensaje de carga
    }
  };

  const filteredNotes = sampleNotes.filter(note =>
    (categoryFilter ? note.category === categoryFilter : true) &&
    (moodFilter ? note.mood === moodFilter : true) &&
    (dateFilter ? note.date.includes(dateFilter) : true) &&
    (titleFilter ? note.title.toLowerCase().includes(titleFilter.toLowerCase()) : true)
  );

  const closeAdviceOptions = () => {
    setShowAdviceOptions(null);
    setSelectedNote(null);
    setAdvice(null); // Limpiar consejo cuando se cierran las opciones
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
          <p className="date">{note.date}</p>
        </div>

        <p><strong>Categoría:</strong> {note.category}</p>
        <p><strong>Estado de Ánimo:</strong> {note.mood}</p>
        <p><strong>Descripción:</strong> {note.description}</p>
        
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
