import React, { useEffect, useState } from 'react';
import { useData } from '../services/hooks/useData';
import '../styles/HomePage.css';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const { data, isFetching, error } = useData();
  const [loading, setLoading] = useState(isFetching);
  const [refresh, setRefresh] = useState(false);
  const [services, setServices] = useState([]);
  useEffect(() => {
    setServices(data);
  }, [data]);
  useEffect(() => {
    setLoading(isFetching);
  }, [isFetching]);
  useEffect(() => {
    if (refresh) {
      window?.location?.reload();
      setRefresh(false);
    }
  }, [refresh]);
  if (error) {
    <div>
      <h1>ERROR</h1>
      <button onClick={setRefresh(true)}>RELOAD</button>
    </div>;
  }
  return (
    <div className="page">
      {!loading ? (
        services?.map((el, id) => {
          return (
            <Link key={id} to={`/${el.id}`} className="none">
              <div className="block">
                <h1>{el.name}</h1>
                <h2>{el.price}</h2>
              </div>
            </Link>
          );
        })
      ) : (
        <p>loading</p>
      )}
    </div>
  );
}
