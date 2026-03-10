# areBinaries

## Opis

Provjerava da li je data vrijednost neprazan niz važećih binarnih stringova i vraća `true` samo ako sve stavke prođu
validaciju.

### Slučaj upotrebe

Koristite `areBinaries` kada dobijete nepoznatu listu (npr. iz JSON-a, formi ili API-ja) i trebate osigurati da je to
neprazan niz binarnih stringova prije parsiranja ili obrade.

> **Napomena za TypeScript korisnike:**
>
> Koristite `areBinaries` za validaciju nepoznatog unosa prije pretvaranja binarnih stringova u brojeve/BigInt-ove;
> osigurava da je niz neprazan i da je svaki element važeći binarni string.

### Prednosti

- Provjerava da je vrijednost neprazan niz u kojem je svaki element važeći binarni string.
- Vraća jednostavan booleanski rezultat (`true`/`false`) pogodan za guardove, rane povratke i validaciju unosa.
- Sprječava naknadne greške pri parsiranju odbacivanjem nizova koji sadrže bilo koji nebinarni unos.

## Upotreba

### Sintaksa

Funkcija:

- `areBinaries(array)`

Parametri:

- `array`: Vrijednost koju treba provjeriti.

### Lokalni uvoz funkcije

```ts
import { areBinaries } from "@type-check/guards";

const a = ["0b1010", "1101"];
const b = ["1010", "1020"];

console.log(areBinaries(a)); // tačno
console.log(areBinaries(b)); // netačno
console.log(areBinaries([])); // netačno
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.areBinaries(array)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areBinaries](../_analysis/areBinaries.md)

<br>

---

<small>Datoteka je generisana 31 January 2026 at 23:13:57 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>