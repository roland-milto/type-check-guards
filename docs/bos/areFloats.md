# areFloats

## Opis

`areFloats` provjerava da li je dati niz popunjen i da li su svi njegovi elementi float vrijednosti.

### Slučaj upotrebe

Koristite `areFloats` kada primite `unknown[]` (npr. iz JSON-a, parametara upita ili eksternih API-ja) i trebate
osigurati da je to popunjen niz u kojem je svaka stavka float prije pokretanja numeričke logike kao što su prosjek,
interpolacija ili statistički proračuni.

> **Napomena za TypeScript korisnike:**
>
> Koristite `areFloats` kao zaštitu (guard) za `unknown[]` prije nego što ga tretirate kao `number[]` koji sadrži samo
> float vrijednosti; vraća `false` za prazne nizove i za bilo koji element koji nije float.

### Prednosti

- Vraća `true` samo kada je ulaz neprazan niz i svaki element je broj s pomičnim zarezom (float).
- Brzo prekida: vraća `false` čim se pronađe element koji nije float.
- Pomaže validirati nepoznat ulaz prije izvođenja izračuna specifičnih za float.

## Upotreba

### Sintaksa

Funkcija:

- `areFloats(array)`

Parametri:

- `array`: Niz koji se provjerava da li sadrži float elemente.

### Lokalni uvoz funkcije

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // tačno
console.log(areFloats(b)); // netačno
console.log(areFloats(c)); // netačno

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.areFloats(array)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>Datoteka je generisana 30 January 2026 at 15:56:29 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>