export function toBase64(file: File){
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror= (error) => reject(error);
  })
}

export function parsearErroresAPI(response: any): string[] {
  const resultado: string[] = [];

  if(response.error){
    if(typeof response.error === 'string'){
      resultado.push(response.error);
    }
    else{
      const  mapaErrores = response.error.errors;
      const entradas = Object.entries(mapaErrores);
      entradas.forEach((arreglo: any[]) => {
        const campo = arreglo[0];
        arreglo[1].forEach((mensajeError: any) => {
          resultado.push(`${campo}: ${mensajeError}`);
        });
      });
    }
  }

  return  resultado;
}

export function dateFormat(date: Date){
  const format = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });

  const [
    {value: month},,
    {value:_day},,
    {value: year}
  ] = format.formatToParts(date);

  return `${year}-${month}-${date}`;
}
