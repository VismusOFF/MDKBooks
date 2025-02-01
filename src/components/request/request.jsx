import React, { useState } from 'react';
import { database } from '../../assets/fitebase';
import { set, ref, push } from 'firebase/database';
import './Request.css'

const RequestForm = () => {
  const [name, setName] = useState('');
  const [model, setModel] = useState('');
  const [type, setType] = useState('');
  const [date, setDate] = useState('');
  const [count, setCount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestsRef = ref(database, 'заявки');
    const newRequestRef = push(requestsRef);
    set(newRequestRef, {
      название: name,
      модель: model,
      состояние: type,
      дата: date,
      категория: count,
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
        value={model}
        onChange={(e) => setModel(e.target.value)}
        placeholder="Модель"
        required
      />
      <input
        className='inp1'
        type="text"
        value={type}
        onChange={(e) => setType(e.target.value)}
        placeholder="Тип поломки"
        required
      />
      <input
        className='inpDate'
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Дата"
        required
      />
      <input
        className='inp1'
        type="text"
        value={count}
        onChange={(e) => setCount(e.target.value)}
        placeholder="Количество"
        required
      />
      <button className='button-submit' type="submit">Отправить заявку</button>
    </form>
  );
};

export default RequestForm;