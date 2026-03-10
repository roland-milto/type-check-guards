# areNumerics

## Opis

`areNumerics` provjerava je li vrijednost neprazno polje u kojem su svi elementi numerički.

### Slučaj uporabe

Koristite `areNumerics` za validaciju vanjskih ili netipiziranih podataka (npr. JSON payloadova, parametara upita, unosa
u obrascima) prije izračuna zbrojeva, prosjeka ili drugih numeričkih operacija, osiguravajući da je ulaz neprazno
numeričko polje te u suprotnom vraćajući `false`.

> **Napomena za TypeScript korisnike:**
>
> Koristite `areNumerics` kao zaštitu za ulaz tipa `unknown` prije nego što ga tretirate kao numeričko polje; vraća
`false` za vrijednosti koje nisu polja i za prazna polja.

### Prednosti

- Vraća `true` samo kada je ulaz neprazno polje i svaki je element numerički.
- Brzo prekida: prestaje provjeravati čim se pronađe nenumerički element te vraća `false`.
- Pomaže sigurno validirati nepoznat ulaz prije izvođenja numeričkih operacija.

## Uporaba

### Sintaksa

Funkcija:

- `areNumerics(array)`

Parametri:

- `array`: Polje koje treba provjeriti sadrži li numeričke elemente.

### Lokalni uvoz funkcije

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // istina
console.log(areNumerics(b)); // istina
console.log(areNumerics(c)); // laž
console.log(areNumerics(d)); // laž
console.log(areNumerics(e)); // laž

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.areNumerics(array)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>Datoteka je generirana 6 February 2026 at 16:05:23 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>