# areStrings

## Opis

`areStrings` provjerava je li niz neprazan i jesu li svi njegovi elementi nizovi znakova te vraća `true` samo u tom
slučaju.

### Slučaj uporabe

Validirajte vanjske ili korisnički dostavljene podatke (npr. parametre upita, JSON payloadove, CSV polja) kako biste
osigurali da imate neprazan popis nizova znakova prije obrade.

> **Napomena za TypeScript korisnike:**
>
> Upotrijebite `areStrings` za provjeru nepoznatih nizova prije primjene logike koja vrijedi samo za nizove znakova;
> vraća `false` za prazne nizove.

### Prednosti

- Osigurava da je svaki element niz znakova i odbacuje nizove miješanih tipova vraćanjem `false`.
- Odbacuje prazne nizove, pa `true` označava samo neprazan popis nizova znakova.
- Korisno kao brza zaštita u izvođenju prije primjene operacija samo nad nizovima znakova (npr. `trim`, `toLowerCase`).

## Uporaba

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
  // input je neprazan string[] tijekom izvođenja
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.areStrings(value)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>Datoteka je generirana 30 January 2026 at 13:18:30 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>