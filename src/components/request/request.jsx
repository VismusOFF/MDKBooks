import React, { useState } from 'react';
import { database } from '../../assets/fitebase';
import { set, ref, push } from 'firebase/database';
import './Request.css'

const RequestForm = () => {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [sosto, setSosto] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestsRef = ref(database, 'заявки');
    const newRequestRef = push(requestsRef);
    set(newRequestRef, {
      название: name,
      автор: author,
      состояние: sosto,
      дата: date,
      категория: category,
      статус: 'новая'
    });
  };

  return (
    <form onSubmit={handleSubmit} className='request-form'>
      <input
        className='inp1'
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Название"
        required
      />
      <input
        className='inp1'
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Автор"
        required
      />
      <input
        className='inp1'
        type="text"
        value={sosto}
        onChange={(e) => setSosto(e.target.value)}
        placeholder="Состояние"
        required
      />
      <input
        className='inp1'
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Дата"
        required
      />
      <input
        className='inp1'
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Категория"
        required
      />
      <button className='button-submit' type="submit">Отправить заявку</button>
    </form>
  );
};

export default RequestForm;