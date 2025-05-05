import { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [chips, setChips] = useState([]);

  function inputChangeHandler(e) {
    setInputText(e.target.value);
  }

  function onKeyDownHandler(e) {
    if (e.key !== 'Enter') return;
    if (inputText.trim().length === 0) return;
    setChips([...chips, inputText.trim()]);
    setInputText('');
  }

  function chipDeleteHandler(indexToDelete) {
    setChips(chips.filter((_, i) => i !== indexToDelete));
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <input
        onChange={inputChangeHandler}
        value={inputText}
        onKeyDown={onKeyDownHandler}
        placeholder="Type and press Enter"
        style={{
          padding: '8px 12px',
          fontSize: '14px',
          borderRadius: '6px',
          border: '1px solid #ccc',
          width: '300px',
          marginBottom: '20px',
          outline: 'none',
        }}
      />

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          marginTop: '10px',
          maxWidth: '800px',
        }}
      >
        {chips.map((chip, i) => (
          <div
            key={i}
            style={{
              backgroundColor: '#333',
              color: '#fff',
              padding: '6px 12px',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              fontSize: '14px',
            }}
          >
            {chip}
            <span
              onClick={() => chipDeleteHandler(i)}
              style={{
                marginLeft: '10px',
                cursor: 'pointer',
                color: '#ff6b6b',
                fontWeight: 'bold',
              }}
            >
              ×
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
