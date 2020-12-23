export function useGetColor(genre) {
  console.log(genre)
  switch (genre) {
    case 'Fiction':
      return { light: '#69f06b', dark: '#007d2b' };
    case 'Poetry':
      return { light: '#69eef0', dark: '#007570' };
    case 'Short Stories':
      return { light: '#aaf069', dark: '#008700' };
    case 'Writing':
      return { light: '#f599f3', dark: '#a500cc' };
    case 'Philosophy':
      return { light: '#69eef0', dark: '#007570' };
    case 'Classics':
      return { light: '#8687f4', dark: '#3508ae' };
    default:
      return { light: 'white', dark: 'black' };
  }

}