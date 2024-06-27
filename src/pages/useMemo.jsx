import { useMemo, useState } from 'react';

export default function UseMemo() {
  const [numbers, setNumbers] = useState([10, 30, 20]);
  const [newNumber, setNewNumber] = useState('');

  function addNumber() {
    setNumbers([...numbers, parseInt(newNumber)]);
    setNewNumber('');
  }

  function topla(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      total += Number(numbers[i]);
    }
    return total;
  }

  const sum = useMemo(() => topla(numbers), [numbers]);
  return (
    <div>
      <h1>UseMemo</h1>
      <div>
        {numbers.map((x, index) => (
          <h1 key={index}>{x}</h1>
        ))}
      </div>
      <button onClick={addNumber}>Sayı Ekle</button>
      <input
        type='number'
        value={newNumber}
        onChange={(e) => setNewNumber(e.target.value)}
      />
      <span>{sum}</span>
    </div>
  );
}
