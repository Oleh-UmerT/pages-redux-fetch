import React, { useEffect, useState } from 'react';
import { useData } from '../services/hooks/useData';
import '../styles/HomePage.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function ServiceDetails() {
  const { id } = useParams();
  const { data, isFetching, error } = useData(String(id));
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
        <div className="block" key={id}>
          <h1>{services.name}</h1>
          <h2>{services.price}</h2>
          <h3>{services.content}</h3>
          <Link to={`/`} className="none">
            Back
          </Link>
        </div>
      ) : (
        <p>loading</p>
      )}
    </div>
  );
}
