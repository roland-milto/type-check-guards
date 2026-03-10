# isFilledArray

## Opis

Provjerava je li `value` polje s barem jednim elementom te vraća `true` ili `false`.

### Slučaj uporabe

Koristite `isFilledArray` za provjeru dolaznih podataka (npr. API payloadova, vrijednosti obrazaca, konfiguracije) prije
iteriranja, pristupa prvom elementu ili primjene logike koja zahtijeva barem jednu stavku.

> **Napomena za TypeScript korisnike:**
>
> `isFilledArray` je zaštita u izvođenju (runtime guard) koja vraća booleovsku vrijednost; ne sužava tipove elemenata
> osim što potvrđuje da polje nije prazno.

### Prednosti

- Jednostavna i brza provjera nepraznog polja pomoću `Array.isArray` i provjere duljine.
- Pomaže izbjeći pogreške u izvođenju kada kod pretpostavlja da polje ima barem jedan element.
- Jasan booleovski rezultat: vraća `true` za neprazna polja i `false` u suprotnom.

## Uporaba

### Sintaksa

Funkcija:

- `isFilledArray(value)`

Parametri:

- `value`: Vrijednost koju treba provjeriti je li neprazno polje.

### Lokalni uvoz funkcije

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // input je neprazno polje u vrijeme izvođenja
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.isFilledArray(value)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>Datoteka je generirana 6 February 2026 at 11:47:20 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>