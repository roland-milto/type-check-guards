# areBigInts

## Opis

`areBigInts` određuje je li vrijednost neprazno polje koje sadrži samo `bigint` vrijednosti.

### Slučaj uporabe

Validirajte nepoznati ulaz (npr. parsirane podatke nalik JSON-u, API payloadove ili parametre funkcije tipa `unknown`)
kako biste osigurali da je neprazno polje `bigint` vrijednosti prije obrade; vraća `true` samo kada su svi elementi
`bigint`, inače `false`.

> **Napomena za TypeScript korisnike:**
>
> Koristite `areBigInts` kao zaštitu u izvođenju (runtime guard) prije izvođenja operacija koje rade samo s `bigint` (
> npr. aritmetika, usporedbe) nad nepoznatim ulazom.

### Prednosti

- Osigurava da je svaki element `bigint`, vraćajući `true` samo kada se cijelo polje podudara.
- Namjerno odbacuje vrijednosti koje nisu polja i prazna polja (putem `isFilledArray`), sprječavajući slučajno
  prihvaćanje nevaljanih ulaza.
- Brzi prekid: vraća `false` čim se pronađe element koji nije `bigint`.

## Uporaba

### Sintaksa

Funkcija:

- `areBigInts(array)`

Parametri:

- `array`: Vrijednost koju treba provjeriti.

### Lokalni uvoz funkcije

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // istina
console.log(areBigInts(b)); // netočno
console.log(areBigInts(c)); // netočno
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.areBigInts(array)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>Datoteka je generirana 31 January 2026 at 23:26:06 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>