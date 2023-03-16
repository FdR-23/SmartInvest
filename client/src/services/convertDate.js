export const convertMilisecondsToDate = (time) => {
    const fecha = new Date(time * 1000);
    const fechaLegible = fecha.toLocaleString();
    return fechaLegible
  };

  
  export const convertISODate = (time) => {
    const date = new Date(time);
    return date.toLocaleString('en-US', { day: "numeric", month: "short", year: 'numeric'});;
  };

  export const convertDateShort = (time) => {
    const date = new Date(time);
    return date.toLocaleString('es-ES', { dateStyle: 'short', timeStyle: 'short' });
};