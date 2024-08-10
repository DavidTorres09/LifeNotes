import AudioRecorder from './utils/audioRecorder';
import React, { useState } from 'react';
import { transcribeAudio } from '../servicesIA/transcribeAudio';

const NoteWriter: React.FC = () => {

    const [transcription, setTranscription] = useState<string | null>(null);
    const [isUploading, setIsUploading] = useState<boolean>(false);

    const handleFileReady = async (file : File) => {
        setIsUploading(true);
        try {
            const text = await transcribeAudio(file);
            setTranscription(text);
        } catch (error) {
            console.error('Error transcribing audio:', error);
            setTranscription('Error al transcribir el audio');
        } finally {
            setIsUploading(false);
        }
    };


    return (
        <div>
        
          <AudioRecorder onFileReady={handleFileReady} />
          {isUploading && <p className='text-center'>Uploading...</p>}
          {transcription && (
            <div className="transcription">
              <h2 className='text-center'>Tu nota</h2>
              <p className='text-center'>{transcription}</p>
            </div>
          )}
        </div>
      );
    };

export default NoteWriter;
