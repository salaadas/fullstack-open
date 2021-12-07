import axios from 'axios';
const baseUrl = '/api/persons';

const getAll = async () => {
  const res = await axios.get(baseUrl);
  return res.data;
};

const createOne = async (newPerson) => {
  const res = await axios.post(baseUrl, newPerson);
  return res.data;
};

const updateOne = async (id, updatedPerson) => {
  const res = await axios.put(`${baseUrl}/${id}`, updatedPerson);
  return res.data;
};

const deleteOne = async (id) => {
  const res = await axios.delete(`${baseUrl}/${id}`);
  return res.data;
};

export { getAll, createOne, updateOne, deleteOne };
