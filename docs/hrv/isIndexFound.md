# isIndexFound

## Opis

`isIndexFound` određuje je li zadana vrijednost nenegativan cijeli broj, što znači da je indeks pronađen.

### Slučaj uporabe

Provjerite predstavlja li rezultat pretrage upotrebljiv indeks (cijeli broj `>= 0`) prije indeksiranja u niz ili string,
čime se sprječava slučajno korištenje `-1` ili nenumeričkih vrijednosti.

> **Napomena za TypeScript korisnike:**
>
> Koristite `isIndexFound` nakon operacija poput `indexOf`, `findIndex` ili prilagođenih pretraga gdje `-1` (ili druge
> nevaljane vrijednosti) može označavati “nije pronađeno”. Kada vrati `true`, vrijednost je broj i sigurna je za
> korištenje kao indeks niza/stringa.

### Prednosti

- Pruža jednostavan čuvar tipa za otkrivanje je li indeks pronađen provjerom nenegativnog cijelog broja.
- Vraća `true` samo za valjane vrijednosti nalik indeksu (cijeli brojevi `>= 0`), odbacujući negativne vrijednosti,
  necijele brojeve i vrijednosti koje nisu brojevi.
- Pomaže izbjeći pogreške tipa off-by-one i pogreške sa sentinel vrijednostima pri radu s API-jima koji vraćaju `-1` za
  “nije pronađeno”.

## Uporaba

### Sintaksa

Funkcija:

- `isIndexFound(value)`

Parametri:

- `value`: Vrijednost koju treba provjeriti je li nenegativan cijeli broj.

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

// Tipična upotreba s indexOf
const pos = "hello".indexOf("e");
if (isIndexFound(pos)) {
  console.log("Found at", pos);
}
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.isIndexFound(value)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isIndexFound](../_analysis/isIndexFound.md)

<br>

---

<small>Datoteka je generirana 31 January 2026 at 00:46:14 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>