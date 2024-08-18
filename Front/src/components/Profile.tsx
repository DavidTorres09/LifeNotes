import React from 'react';
import { UserIcon, DocumentTextIcon, ChartBarIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import '../styles/myProfile.css'
import axios from 'axios';
import { getCompletions } from '../servicesIA/getCompletions';


const Profile: React.FC = () => {
  const [countNotes, setCountNotes] = React.useState<number>(0);
  const [countNotesLastMonth, setCountNotesLastMonth] = React.useState<number>(0);
  const [loadingAdvice, setLoadingAdvice] = useState<boolean>(false);
  const [mostUsedMood, setMostUsedMood] = useState<string | null>(null);
  const [monthlySummary, setMonthlySummary] = useState<string | null>(null);
  const [monthlyAdvice, setMonthlyAdvice] = useState<string | null>(null);

  const user = sessionStorage.getItem('user')
  const email = sessionStorage.getItem('email')
  const age = sessionStorage.getItem('age')
  const name = sessionStorage.getItem('name')
  
  const fetchNotes = async () => {
    try {
      const user = sessionStorage.getItem('user');
      if (!user) {
        console.error('No user found in sessionStorage');
        return;
      }

      const url = `http://localhost:5023/api/lifenotes/notes/get/${user}`;
      const response = await axios.get(url);
      setCountNotes(response.data.length);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const fetchNotesLastMonth = async () => {
    try {
      const user = sessionStorage.getItem('user');
      if (!user) {
        console.error('No user found in sessionStorage');
        return;
      }

      const url = `http://localhost:5023/api/lifenotes/notes/getlastmonth/${user}`;
      const response = await axios.get(url);
      const notes = response.data;

      setCountNotesLastMonth(notes.length);

      const moodCounts: { [key: string]: number } = {};
      notes.forEach((note: any) => {
        const mood = note.mood;
        if (mood) {
          moodCounts[mood] = (moodCounts[mood] || 0) + 1;
        }
      });

      const mostUsedMood = Object.keys(moodCounts).reduce((a, b) => moodCounts[a] > moodCounts[b] ? a : b, '');
      setMostUsedMood(mostUsedMood);

      const allContents = notes.map((note: any) => note.content).join('\n\n');
      setMonthlySummary(allContents);

    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const handleGetSummary = async () => {
    if (monthlySummary && mostUsedMood) {
      setLoadingAdvice(true);

      try {
        const advice = await getCompletions('motivacional', monthlySummary, mostUsedMood);
        setMonthlyAdvice(advice);
      } catch (error) {
        console.error('Error getting completion:', error);
      } finally {
        setLoadingAdvice(false);
      }
    }
  };

  useEffect(() => {
    fetchNotesLastMonth();
    fetchNotes();
  }, []);

  return (
    <div className="flex flex-col items-center mt-10 mb-10">
      <div className="user-profile p-6 w-full max-w-lg  text-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-center">Perfil de Usuario</h2>

        <div className="mb-6">
          <div className="flex items-center space-x-2 mb-4">
            <UserIcon className="w-5 h-5 text-[#6D4C41]" />
            <div>
              <h3 className="text-lg font-medium">{user}</h3>
              <p className="text-sm">Nombre: {name}</p>
              <p className="text-sm">Correo: {email}</p>
              <p className="text-sm">Edad: {age}</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center space-x-2 mb-4">
            <DocumentTextIcon className="w-5 h-5 text-[#6D4C41]" />
            <div>
              <p className="text-sm">Cantidad Total de Notas Escritas este mes: {countNotesLastMonth}</p>
              {/* Asegúrate de que 'countNotes' esté definido o reemplázalo con el valor adecuado */}
              <p className="text-sm">Cantidad de Notas Totales: {countNotes}</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Análisis del Último Mes</h3>
          <div className="flex items-center space-x-2 mb-4">
            <ChartBarIcon className="w-5 h-5 text-[#6D4C41]" />
            <div>
              <p className="text-sm">Estado de ánimo más utilizado este mes: {mostUsedMood}</p>
            </div>
          </div>
          <div className="flex justify-center space-x-4 mb-6">
            <button
              className="py-2 px-4 bg-[#F9A8D4] text-white rounded-lg hover:bg-[#F472B6] transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#F472B6] focus:ring-offset-2 text-sm"
              onClick={handleGetSummary}
            >
              Ver Resumen Mensual por IA
            </button>
          </div>
        </div>

        {loadingAdvice ? (
          <div className="mt-10 w-full max-w-lg animate-fadeInUp">
            <div className="bg-gray-700 p-4 rounded-lg shadow-md">
              <p className="text-center text-white">Analizando...</p>
            </div>
          </div>
        ) : monthlyAdvice && (
          <div className="mt-10 w-full max-w-lg animate-fadeInUp">
            <h3 className="text-xl font-semibold mb-4 text-center">Consejo Mensual</h3>
            <div className=" p-4 rounded-lg shadow-md glass-effect">
              <p>{monthlyAdvice}</p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Profile;
