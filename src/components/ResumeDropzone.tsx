import React, { useState, useRef } from 'react';
import { Upload,  CheckCircle2, AlertCircle, X } from 'lucide-react';

interface ResumeDropzoneProps {
  onTextExtracted: (text: string, fileName: string) => void;
  currentFileName?: string;
  onClearFile?: () => void;
}

export const ResumeDropzone: React.FC<ResumeDropzoneProps> = ({
  onTextExtracted,
  currentFileName,
  onClearFile
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successInfo, setSuccessInfo] = useState<string | null>(currentFileName || null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const extractTextFromFile = async (file: File): Promise<string> => {
    const ext = file.name.split('.').pop()?.toLowerCase();

    // Plain text formats
    if (ext === 'txt' || ext === 'md' || ext === 'json' || ext === 'csv' || ext === 'rtf') {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target?.result as string || '');
        reader.onerror = () => reject(new Error('Failed to read text file'));
        reader.readAsText(file);
      });
    }

    // PDF extraction using browser-compatible stream text decoder
    if (ext === 'pdf') {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          try {
            const buffer = reader.result as ArrayBuffer;
            const uint8Array = new Uint8Array(buffer);
            // Decode raw content and extract stream strings
            let rawStr = '';
            for (let i = 0; i < uint8Array.length; i++) {
              rawStr += String.fromCharCode(uint8Array[i]);
            }

            // Extract text enclosed in parentheses inside PDF content streams: (Text) Tj or [(T)(e)(x)(t)] TJ
            const matches: string[] = [];
            const textBlockRegex = /\(([^)]+)\)\s*(?:Tj|'|")/g;
            let match;
            while ((match = textBlockRegex.exec(rawStr)) !== null) {
              const cleaned = match[1]
                .replace(/\\r/g, ' ')
                .replace(/\\n/g, ' ')
                .replace(/\\t/g, ' ')
                .replace(/\\/g, '');
              if (cleaned.trim().length > 0) {
                matches.push(cleaned);
              }
            }

            if (matches.length > 10) {
              resolve(matches.join(' '));
            } else {
              // Fallback to ASCII filter
              const asciiMatches = rawStr.match(/[\x20-\x7E]{4,}/g) || [];
              const filtered = asciiMatches.filter(s => 
                !s.startsWith('/Root') && 
                !s.startsWith('/Filter') && 
                !s.startsWith('stream') &&
                !s.startsWith('endstream') &&
                s.length > 5
              );
              resolve(filtered.join('\n'));
            }
          } catch {
            reject(new Error('PDF parsing error'));
          }
        };
        reader.onerror = () => reject(new Error('Unable to read PDF file'));
        reader.readAsArrayBuffer(file);
      });
    }

    // DOCX files (ZIP container with XML word/document.xml)
    if (ext === 'docx') {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          try {
            const textDecoder = new TextDecoder('utf-8');
            const rawContent = textDecoder.decode(reader.result as ArrayBuffer);
            // Clean XML tags <w:t>...</w:t>
            const xmlTexts = rawContent.match(/<w:t[^>]*>(.*?)<\/w:t>/g);
            if (xmlTexts && xmlTexts.length > 0) {
              const cleanWords = xmlTexts.map(t => t.replace(/<[^>]+>/g, '')).join(' ');
              resolve(cleanWords);
            } else {
              // General text extraction
              const ascii = rawContent.match(/[\x20-\x7E]{5,}/g) || [];
              resolve(ascii.join(' '));
            }
          } catch {
            reject(new Error('DOCX processing error'));
          }
        };
        reader.onerror = () => reject(new Error('Failed to read DOCX file'));
        reader.readAsArrayBuffer(file);
      });
    }

    // Default fallback
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target?.result as string || '');
      reader.readAsText(file);
    });
  };

  const handleFile = async (file: File) => {
    setErrorMessage(null);
    setIsLoading(true);

    try {
      if (file.size > 10 * 1024 * 1024) {
        throw new Error('File size exceeds 10MB limit. Please upload a smaller resume.');
      }

      const extracted = await extractTextFromFile(file);
      if (!extracted || extracted.trim().length < 20) {
        throw new Error('Could not extract readable text from this file. Please paste your resume text directly.');
      }

      setSuccessInfo(`${file.name} (${Math.round(file.size / 1024)} KB)`);
      onTextExtracted(extracted.trim(), file.name);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Error reading file';
      setErrorMessage(msg);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleClear = () => {
    setSuccessInfo(null);
    setErrorMessage(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
    if (onClearFile) onClearFile();
  };

  return (
    <div className="space-y-2">
      <input
        type="file"
        ref={fileInputRef}
        onChange={(e) => {
          if (e.target.files && e.target.files.length > 0) {
            handleFile(e.target.files[0]);
          }
        }}
        accept=".pdf,.txt,.docx,.md,.json,.csv"
        className="hidden"
      />

      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => fileInputRef.current?.click()}
        className={`relative border-2 border-dashed rounded-xl p-3 sm:p-4 text-center cursor-pointer transition-all ${
          isDragging
            ? 'border-orange-500 bg-orange-500/10'
            : successInfo
            ? 'border-emerald-600/60 bg-emerald-950/20 hover:border-emerald-500'
            : 'border-slate-700/80 bg-slate-900/50 hover:border-orange-500/60 hover:bg-slate-900/80'
        }`}
      >
        {isLoading ? (
          <div className="flex items-center justify-center space-x-2 py-1 text-slate-300">
            <div className="w-4 h-4 border-2 border-orange-400 border-t-transparent rounded-full animate-spin" />
            <span className="text-xs font-medium">Extracting resume content...</span>
          </div>
        ) : successInfo ? (
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-emerald-400 text-xs">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span className="font-medium truncate max-w-xs">{successInfo} loaded</span>
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleClear();
              }}
              className="p-1 text-slate-400 hover:text-red-400 rounded-md hover:bg-slate-800 transition"
              title="Remove file and clear"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-slate-400 text-xs">
            <div className="flex items-center space-x-1.5 text-orange-400">
              <Upload className="w-4 h-4" />
              <span className="font-semibold">Upload Resume File</span>
            </div>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="text-slate-400">PDF, DOCX, TXT, or MD (drag & drop or click)</span>
          </div>
        )}
      </div>

      {errorMessage && (
        <div className="flex items-center space-x-1.5 text-xs text-rose-400 bg-rose-950/30 px-3 py-1.5 rounded-lg border border-rose-800/40">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}
    </div>
  );
};
