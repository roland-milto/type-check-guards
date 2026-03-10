# areSets

## Opis

Provjerava sadrži li zadani neprazan niz samo instance `Set`, vraćajući `true` ako sadrži, a `false` u suprotnom.

### Slučaj uporabe

Provjerite da je vrijednost (npr. iz korisničkog unosa, parsiranja JSON-a ili vanjskih API-ja) neprazan niz objekata
`Set` prije obrade svakog skupa.

> **Napomena za TypeScript korisnike:**
>
> Koristite `areSets` za provjeru nepoznatog ulaza prije iteriranja i pozivanja `Set` API-ja (npr. `.size`, `.has`,
`.add`) nad svakim elementom.

### Prednosti

- Vraća `true` samo kada je ulaz neprazan niz i svaki element je instanca `Set`.
- Sprječava lažno pozitivne rezultate za prazne nizove tako što vraća `false` kada niz nema elemenata.
- Korisno kao zaštita u izvođenju (runtime guard) prije izvođenja operacija specifičnih za `Set` nad svakim elementom.

## Uporaba

### Sintaksa

Funkcija:

- `areSets(array)`

Parametri:

- `array`: Niz koji se provjerava na instance `Set`.

### Lokalni uvoz funkcije

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // a je niz instanci Set u vrijeme izvođenja
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // netočno
console.log(areSets(c)); // netočno

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.areSets(array)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areSets](../_analysis/areSets.md)

<br>

---

<small>Datoteka je generirana 30 January 2026 at 23:13:37 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>