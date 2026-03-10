# areStrings

## Opis

`areStrings` provjerava da li je niz neprazan i da su svi njegovi elementi stringovi, vraćajući `true` samo u tom
slučaju.

### Slučaj upotrebe

Validirajte eksterne ili korisnički dostavljene podatke (npr. query parametre, JSON payloadove, CSV polja) kako biste
osigurali da imate nepraznu listu stringova prije obrade.

> **Napomena za TypeScript korisnike:**
>
> Koristite `areStrings` za validaciju nepoznatih nizova prije primjene logike samo za stringove; vraća `false` za
> prazne nizove.

### Prednosti

- Osigurava da je svaki element string i odbacuje nizove miješanih tipova vraćajući `false`.
- Odbacuje prazne nizove, tako da `true` označava samo nepraznu listu stringova.
- Korisno kao brza runtime provjera prije izvođenja operacija samo nad stringovima (npr. `trim`, `toLowerCase`).

## Upotreba

### Sintaksa

Funkcija:

- `areStrings(value)`

Parametri:

- `value`: Expected type `string[]`.

### Lokalni uvoz funkcije

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // input je ne-prazan string[] u vrijeme izvršavanja
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.areStrings(value)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>Datoteka je generisana 30 January 2026 at 13:17:24 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>