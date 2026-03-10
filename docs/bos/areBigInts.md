# areBigInts

## Opis

`areBigInts` određuje da li je vrijednost neprazan niz koji sadrži isključivo `bigint` vrijednosti.

### Slučaj upotrebe

Validirajte nepoznat ulaz (npr. parsirane JSON-slične podatke, API payloadove ili parametre funkcije tipa `unknown`)
kako biste osigurali da je to neprazan niz `bigint` vrijednosti prije obrade; vraća `true` samo kada su svi elementi
`bigint`, u suprotnom `false`.

> **Napomena za TypeScript korisnike:**
>
> Koristite `areBigInts` kao runtime guard prije izvođenja operacija koje su dozvoljene samo nad `bigint` (npr.
> aritmetika, poređenja) nad nepoznatim ulazom.

### Prednosti

- Osigurava da je svaki element `bigint`, vraćajući `true` samo kada se cijeli niz podudara.
- Po dizajnu odbacuje vrijednosti koje nisu nizovi i prazne nizove (putem `isFilledArray`), sprječavajući slučajno
  prihvatanje nevažećih ulaza.
- Brzi prekid: vraća `false` čim se pronađe element koji nije `bigint`.

## Upotreba

### Sintaksa

Funkcija:

- `areBigInts(array)`

Parametri:

- `array`: Vrijednost za provjeru.

### Lokalni uvoz funkcije

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // tačno
console.log(areBigInts(b)); // netačno
console.log(areBigInts(c)); // netačno
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.areBigInts(array)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>Datoteka je generisana 31 January 2026 at 23:25:18 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>