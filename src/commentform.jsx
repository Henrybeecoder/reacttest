import React, { useState, useEffect } from 'react';
import './artists.css'
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

export default function CommentForm (){
  const [person, setPerson] = useState({ name: '', email: '', body: '' });
  const [tweets, setTweet] = useState([]);
const [error, setError] = useState(null);
const [isLoaded, setIsLoaded] = useState(false);
    




  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.name && person.email && person.body) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setTweet([...tweets, newPerson]);
      setPerson({ name: '', email: '', body: '' });
    }
  };

  
  useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setTweet(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    if (error) {
        return <>{error.message}</>;
    } else if (!isLoaded) {
        return <>loading...</>;
    } else {
        return (
  
    <>
      <article className='form'>
        <form>
          <div className='form-control'>
            <label htmlFor='name'>Name : </label>
            <input
              type='text'
              id='name'
              name='name'
              value={person.name}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='body'>Message : </label>
            <input
              type='textarea'
              id='body'
              name='body'
              value={person.body}
              onChange={handleChange}
            />
          </div>
          <button type='submit' className='btn' onClick={handleSubmit}>
            Add Tweet
          </button>
        </form>
      </article>
      <article>
        {tweets.map((tweet) => {
          const { id, name, email, body } = tweet;
          return (
            <div key={id} className='tweet'>
              <h4>{name}</h4>
              <p>{email}</p>
              <p>{body}</p>
            </div>
          );
        })}
      </article>
    </>
  );
    }};

