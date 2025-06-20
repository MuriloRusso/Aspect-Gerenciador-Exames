// RichTextEditor.tsx
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function RichTextEditor() {
  const [value, setValue] = useState('');

  return (
    <div style={{ width: '100%' }}>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
      <div style={{ marginTop: '20px' }}>
        <strong>Conteúdo HTML gerado:</strong>
        <div style={{ border: '1px solid #ccc', padding: '10px' }}>
          <div dangerouslySetInnerHTML={{ __html: value }} />
        </div>
      </div>
    </div>
  );
}
