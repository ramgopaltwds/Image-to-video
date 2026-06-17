
const store = new Map();

export const setJob = (id, data) => {
  store.set(id, data);
};

export const getJob = (id) => {
  return store.get(id);
};

export const updateJob = (id, data) => {
  store.set(id, {
    ...store.get(id),
    ...data,
  });
};