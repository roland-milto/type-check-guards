# isIndexFound

## Opis

`isIndexFound` određuje da li je data vrijednost nenegativan cijeli broj, što ukazuje da je indeks pronađen.

### Slučaj upotrebe

Validirajte da rezultat pretrage predstavlja upotrebljiv indeks (cijeli broj `>= 0`) prije indeksiranja u niz ili
string, sprječavajući slučajno korištenje `-1` ili nenumeričkih vrijednosti.

> **Napomena za TypeScript korisnike:**
>
> Koristite `isIndexFound` nakon operacija kao što su `indexOf`, `findIndex` ili prilagođene pretrage gdje `-1` (ili
> druge nevažeće vrijednosti) mogu označavati “nije pronađeno”. Kada vrati `true`, vrijednost je broj i sigurna je za
> korištenje kao indeks niza/stringa.

### Prednosti

- Pruža jednostavan čuvar tipa za otkrivanje da li je indeks pronađen provjerom nenegativnog cijelog broja.
- Vraća `true` samo za važeće vrijednosti nalik indeksu (cijeli brojevi `>= 0`), odbacujući negativne, necijele i
  nenumeričke vrijednosti.
- Pomaže izbjeći greške tipa off-by-one i greške sa sentinel vrijednostima pri radu s API-jima koji vraćaju `-1` za
  “nije pronađeno”.

## Upotreba

### Sintaksa

Funkcija:

- `isIndexFound(value)`

Parametri:

- `value`: Vrijednost koju treba provjeriti da li je nenegativan cijeli broj.

### Lokalni uvoz funkcije

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  // idx je ovdje broj i >= 0
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

// Tipična upotreba sa indexOf
const pos = "hello".indexOf("e");
if (isIndexFound(pos)) {
  console.log("Found at", pos);
}
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.isIndexFound(value)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isIndexFound](../_analysis/isIndexFound.md)

<br>

---

<small>Datoteka je generisana 31 January 2026 at 00:45:06 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>