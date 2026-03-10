# isNumber

## Opis

`isNumber` provjerava je li vrijednost konačan broj koji nije `NaN`.

### Slučaj uporabe

Validirajte numerički unos iz nepouzdanih izvora (obrasci, parametri upita, JSON payloadovi) prije izračuna, pohrane ili
provjera raspona, osiguravajući da prolaze samo konačni brojevi (`true`), a sve ostalo vraća `false`.

> **Napomena za TypeScript korisnike:**
>
> Koristite `isNumber` za validaciju vrijednosti tipa `unknown` prije izvođenja aritmetike; odbacuje `NaN`, `Infinity` i
`-Infinity`.

### Prednosti

- Vraća `true` samo za stvarne JavaScript brojeve (provjera tipa uz odbacivanje `NaN` i beskonačnosti).
- Sprječava česte greške u validaciji gdje `NaN`, `Infinity` ili `-Infinity` slučajno prođu kao brojevi.
- Dobro funkcionira kao runtime zaštita (guard) za nepoznat unos (npr. JSON, korisnički unos, vanjski API-ji).
- Jednostavno, brzo i bez nuspojava.

## Uporaba

### Sintaksa

Funkcija:

- `isNumber(value)`

Parametri:

- `value`: Vrijednost koju treba provjeriti.

### Lokalni uvoz funkcije

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // input je valjan konačan broj
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.isNumber(value)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>Datoteka je generirana 30 January 2026 at 13:09:11 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>