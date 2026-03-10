# areFinite

## Opis

`areFinite` provjerava je li vrijednost neprazno polje čiji su elementi svi konačni brojevi te vraća `true` ako jest, a
`false` u suprotnom.

### Slučaj uporabe

Validirajte polja numeričkih ulaza (npr. serije za grafikon, popise koordinata, uzorke mjerenja) prije izvođenja
izračuna, osiguravajući da je rezultat `true` samo kada su sve vrijednosti konačni brojevi.

> **Napomena za TypeScript korisnike:**
>
> Koristite `areFinite` kada trebate osigurati da je polje neprazno i sadrži samo konačne brojeve; vraća `false` za
> prazna polja i za polja koja sadrže `NaN` ili beskonačnosti.

### Prednosti

- Vraća `true` samo kada je ulaz neprazno polje i svaki element je konačan broj.
- Odbacuje `Infinity`, `-Infinity` i `NaN` oslanjajući se na provjere `isFinite` za svaki element.
- Pruža jednostavan booleovski rezultat (`true`/`false`) prikladan za guardove i tokove validacije.

## Uporaba

### Sintaksa

Funkcija:

- `areFinite(array)`

Parametri:

- `array`: Polje koje treba provjeriti kako bi se utvrdilo jesu li svi njegovi elementi konačni.

### Lokalni uvoz funkcije

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // točno
console.log(areFinite(b)); // netočno
console.log(areFinite(c)); // netočno

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.areFinite(array)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>Datoteka je generirana 30 January 2026 at 16:34:56 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>