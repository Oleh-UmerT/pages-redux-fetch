import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { servicesActions } from '../actions';

export const useData = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (id !== '') {
      dispatch(servicesActions.fetchAsync(id));
    }
  }, [dispatch, id]);

  const { data, isFetching, error } = useSelector((state) => state.services);

  const [services, setServices] = useState(data?.data);

  useEffect(() => {
    if (data?.data) {
      setServices(data?.data);
      if (isFetching === false && services) {
        // eslint-disable-next-line
        setServices([...services, ...data?.data]);
      }
    }
  }, [data]);

  return {
    data,
    isFetching,
    error
  };
};
