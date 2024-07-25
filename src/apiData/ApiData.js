import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  const handleNext = () => {
    if (currentPage < Math.ceil(data.length / itemsPerPage)) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id));
  };

  return (
    <div className='py-5'>
      <div className='container'>
        <h1 className='text-center pb-3'>API DATA</h1>
        <ul className='list_ul_row'>
          {currentItems.map(item => (
            <li key={item.id} id={item.id}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <button onClick={() => handleDelete(item.id)} className="delete-button">X</button>
              </div>
            </li>
          ))}
        </ul>
        <div className='btn_group'>
          <button onClick={handlePrevious} disabled={currentPage === 1}>
            Previous
          </button>
          <button onClick={handleNext} disabled={currentPage === Math.ceil(data.length / itemsPerPage)}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApiData;
