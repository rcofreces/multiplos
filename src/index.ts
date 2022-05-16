let listadoNúmeros: number;
let númerosAMostrar: string | null = "";

for (listadoNúmeros = 1; listadoNúmeros <= 100; listadoNúmeros++) {
  if (listadoNúmeros % 2 === 0 || listadoNúmeros % 3 === 0) {
    númerosAMostrar = númerosAMostrar + listadoNúmeros + " ";
  }
}
console.log(númerosAMostrar);
