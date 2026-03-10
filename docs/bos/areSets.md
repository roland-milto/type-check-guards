# areSets

## Opis

Provjerava da li dati neprazan niz sadrži samo instance `Set`, vraćajući `true` ako sadrži i `false` u suprotnom.

### Slučaj upotrebe

Validirajte da je vrijednost (npr. iz korisničkog unosa, parsiranja JSON-a ili eksternih API-ja) neprazan niz `Set`
objekata prije obrade svakog seta.

> **Napomena za TypeScript korisnike:**
>
> Koristite `areSets` za validaciju nepoznatog ulaza prije iteriranja i pozivanja `Set` API-ja (npr. `.size`, `.has`,
`.add`) nad svakim elementom.

### Prednosti

- Vraća `true` samo kada je ulaz neprazan niz i svaki element je instanca `Set`.
- Sprječava lažno pozitivne rezultate za prazne nizove tako što vraća `false` kada niz nema elemenata.
- Korisno kao runtime provjera prije izvođenja operacija specifičnih za `Set` nad svakim elementom.

## Upotreba

### Sintaksa

Funkcija:

- `areSets(array)`

Parametri:

- `array`: Niz koji treba provjeriti na instance `Set`.

### Lokalni uvoz funkcije

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // a je niz instanci Set u vrijeme izvršavanja
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // netačno
console.log(areSets(c)); // netačno
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.areSets(array)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areSets](../_analysis/areSets.md)

<br>

---

<small>Datoteka je generisana 30 January 2026 at 23:12:37 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>