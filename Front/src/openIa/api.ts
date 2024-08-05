import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

const MAX_RETRIES = 3;

export async function getCompletionWithRetries(prompt:string, retries = MAX_RETRIES) {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });
    return completion.choices[0].message.content;
  } catch (error: any) {
    if (error.response && error.response.status === 429 && retries > 0) {
      await new Promise(resolve => setTimeout(resolve, 2000)); 
      return getCompletionWithRetries(prompt, retries - 1);
    } else {
      console.error('Error fetching completion:', error);
      return 'Error fetching completion';
    }
  }
}
