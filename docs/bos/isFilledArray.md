# isFilledArray

## Opis

Provjerava da li je `value` niz s barem jednim elementom, vraćajući `true` ili `false`.

### Slučaj upotrebe

Koristite `isFilledArray` za validaciju dolaznih podataka (npr. API payloadova, vrijednosti iz formi, konfiguracije)
prije iteriranja, pristupa prvom elementu ili primjene logike koja zahtijeva barem jednu stavku.

> **Napomena za TypeScript korisnike:**
>
> `isFilledArray` je runtime guard koji vraća booleansku vrijednost; ne sužava tipove elemenata osim što potvrđuje da
> niz nije prazan.

### Prednosti

- Jednostavna i brza provjera nepraznog niza koristeći `Array.isArray` i provjeru dužine.
- Pomaže izbjeći greške u izvođenju kada kod pretpostavlja da niz ima barem jedan element.
- Jasan booleanski rezultat: vraća `true` za neprazne nizove i `false` u suprotnom.

## Upotreba

### Sintaksa

Funkcija:

- `isFilledArray(value)`

Parametri:

- `value`: Vrijednost koju treba provjeriti da li je neprazan niz.

### Lokalni uvoz funkcije

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // input je neprazan niz u vrijeme izvršavanja
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.isFilledArray(value)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>Datoteka je generisana 6 February 2026 at 11:46:28 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>