// Action Creator

export const ambilData = () => {
  const data = [
    { id: 1, name: "Product 1", price: 1000 },
    { id: 2, name: "Product 2", price: 2000 },
  ];

  // Actions
  return {
    type: "ambilData",
    data: data,
  };
};
