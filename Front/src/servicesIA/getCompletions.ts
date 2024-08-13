import axios from 'axios';

const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
const API_URL = 'https://api.openai.com/v1/chat/completions';
const MAX_RETRIES = 3;

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Authorization': `Bearer ${OPENAI_API_KEY}`,
    'Content-Type': 'application/json',
  },
});

function generatePrompt(tipo: string, descripcion: string, animo: string): string {
  let prompt = '';

  switch (tipo) {
    case 'practico':
      prompt = `🔧 Basándote en el estado de ánimo del usuario, que es "${animo}", y en la situación descrita como: "${descripcion}", proporciona un consejo práctico muy útil. Asegúrate de incluir ejemplos claros y pasos concretos que el usuario pueda seguir. 🌟 Utiliza emojis para hacer el consejo más amigable y accesible.`;
      break;
    case 'amigable':
      prompt = `🤗 Considerando que el estado de ánimo del usuario es "${animo}" y la descripción de la situación es: "${descripcion}", ofrece un consejo amigable y cálido que ayude a levantar el ánimo. Añade un toque personal con emojis que hagan sentir al usuario más apoyado y comprendido. 🌈💖`;
      break;
    case 'motivacional':
      prompt = `🚀 Con el estado de ánimo del usuario de "${animo}" y la situación descrita como: "${descripcion}", ofrece un consejo motivacional que inspire y anime. Usa emojis para transmitir entusiasmo y energía positiva. Haz que el consejo sea inspirador y que motive al usuario a seguir adelante con determinación. 💪✨`;
      break;
    case 'inspirador':
      prompt = `🌟 Dado que el estado de ánimo del usuario es "${animo}" y la situación es la siguiente: "${descripcion}", proporciona un consejo inspirador que ilumine su camino. Utiliza emojis que reflejen esperanza y positividad para hacer el mensaje más impactante y alentador. 🌈💫`;
      break;
    default:
      prompt = `📝 Considerando el estado de ánimo del usuario de "${animo}" y la descripción de la situación: "${descripcion}", ofrece un consejo general. Usa emojis para hacer el mensaje más amigable y accesible. Asegúrate de que el consejo sea útil y aplicable. 🤔✨`;
      break;
  }
  return prompt;
}


export async function getCompletions(tipo: string, descripcion: string, animo: string, retries = MAX_RETRIES): Promise<string> {
  const prompt = generatePrompt(tipo, descripcion, animo);

  try {
    const response = await axiosInstance.post('', {
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
    });
    return response.data.choices[0].message.content;
  } catch (error: any) {
    if (error.response && error.response.status === 429 && retries > 0) {
      await new Promise(resolve => setTimeout(resolve, 2000));
      return getCompletions(tipo, descripcion, animo, retries - 1);
    } else {
      return 'Error al obtener la respuesta';
    }
  }
}