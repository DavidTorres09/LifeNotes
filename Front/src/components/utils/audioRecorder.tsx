import React, { useState, useRef } from 'react';
import { MicrophoneIcon, StopIcon } from '@heroicons/react/24/solid';
import '../../styles/audioRecorder.css';

interface AudioRecorderProps {
  onFileReady: (file: File) => void;
}

const AudioRecorder: React.FC<AudioRecorderProps> = ({ onFileReady }) => {
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);

      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        const audioFile = new File([audioBlob], 'recording.wav', { type: 'audio/wav' });
        audioChunksRef.current = [];
        onFileReady(audioFile); // Llama a la función cuando el archivo está listo
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error accessing the microphone:', error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  return (
    <div className="audio-recorder-container">
      <button
        onClick={isRecording ? stopRecording : startRecording}
        className={`btn-record ${isRecording ? 'recording' : ''}`}
      >
        {isRecording ? (
          <StopIcon className="icon" />
        ) : (
          <MicrophoneIcon className="icon" />
        )}
      </button>
    </div>
  );
};

export default AudioRecorder;
