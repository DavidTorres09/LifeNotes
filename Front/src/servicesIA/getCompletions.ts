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

export async function getCompletions(prompt: string, retries = MAX_RETRIES): Promise<string> {
  try {
    const response = await axiosInstance.post('', {
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
    });
    return response.data.choices[0].message.content;
  } catch (error: any) {
    if (error.response && error.response.status === 429 && retries > 0) {
      await new Promise(resolve => setTimeout(resolve, 2000));
      return getCompletions(prompt, retries - 1);
    } else {
      return 'Error fetching completion';
    }
  }
}
