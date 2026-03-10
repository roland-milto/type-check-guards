# areFinite

## Opis

`areFinite` provjerava da li je vrijednost neprazan niz čiji su elementi svi konačni brojevi, vraćajući `true` ako
jeste, a `false` u suprotnom.

### Slučaj upotrebe

Validirajte nizove numeričkih ulaza (npr. serije za grafikon, liste koordinata, uzorke mjerenja) prije izvođenja
proračuna, osiguravajući da je rezultat `true` samo kada su sve vrijednosti konačni brojevi.

> **Napomena za TypeScript korisnike:**
>
> Koristite `areFinite` kada trebate osigurati da je niz neprazan i da sadrži samo konačne brojeve; vraća `false` za
> prazne nizove i za nizove koji sadrže `NaN` ili beskonačnosti.

### Prednosti

- Vraća `true` samo kada je ulaz neprazan niz i svaki element je konačan broj.
- Odbacuje `Infinity`, `-Infinity` i `NaN` oslanjajući se na provjere `isFinite` za svaki element.
- Pruža jednostavan booleanski rezultat (`true`/`false`) pogodan za guardove i tokove validacije.

## Upotreba

### Sintaksa

Funkcija:

- `areFinite(array)`

Parametri:

- `array`: Niz koji se provjerava kako bi se utvrdilo jesu li svi njegovi elementi konačni.

### Lokalni uvoz funkcije

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // tačno
console.log(areFinite(b)); // netačno
console.log(areFinite(c)); // netačno

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.areFinite(array)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>Datoteka je generisana 30 January 2026 at 16:33:49 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>