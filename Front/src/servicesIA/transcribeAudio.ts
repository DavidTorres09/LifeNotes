import axios from 'axios';

interface TranscriptionResponse {
  text: string;
}

export async function transcribeAudio(audioFile: File): Promise<string | null> {
  try {
    const formData = new FormData();
    formData.append('file', audioFile);
    formData.append('model', 'whisper-1');

    const response = await axios.post<TranscriptionResponse>('https://api.openai.com/v1/audio/transcriptions', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
    });

    return response.data.text;
  } catch (error) {
    console.error('Error al transcribir el audio:', error);
    return null;
  }
}
