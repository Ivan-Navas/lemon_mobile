export const date = () => {
  const d = new Date();
  const year = d.getFullYear(); // Año, por ejemplo: 2024
  const month = `0${d.getMonth() + 1}`.slice(-2); // Mes con dos dígitos (0-11) + 1 para 1-12
  const day = `0${d.getDate()}`.slice(-2); // Día con dos dígitos (1-31)

  // Formatear la fecha completa en formato DD/MM/YYYY
  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate;
};
