import type { Config } from "../types/types";
export default class Utils {
  valor: string;
  settings: Config;
  constructor(valor: string, settings: Config = {} as Config) {
    this.valor = valor;
    this.settings = settings;
    console.log("constructor");
  }
  #encode(mensaje: string): string {
    const words: string[] = mensaje.split(" ");
    console.log("palabras", words);
    const alfabeto = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    const resultado: string[] = [];

    return resultado.join(" ");
  }
  get Valor() {
    console.log("Encode");
    return this.#encode(this.valor).split("").length.toString();
  }
  set Valor(v: string) {
    this.valor = v;
  }
}
