import type { Config } from "../types/types";
export default class Utils {
  valor: string;
  settings: Config;
  alfabeto: string[];
  constructor(valor: string, settings: Config = {} as Config) {
    this.valor = valor;
    this.settings = settings;
    this.alfabeto = [
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
    console.log("constructor");
  }
  #encode(mensaje: string): string {
    return mensaje
      .split(" ")
      .map((palabra) => {
        return palabra
          .split("")
          .map((l, index) => {
            return this.alfabeto[index + 1];
          })
          .join("");
      })
      .join(" ");
  }
  get Valor() {
    console.log("Encode");

    return this.#encode(this.valor);
  }
  set Valor(v: string) {
    this.valor = v;
  }
}
