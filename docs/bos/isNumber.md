# isNumber

## Opis

`isNumber` provjerava da li je vrijednost konačan broj koji nije `NaN`.

### Slučaj upotrebe

Validirajte numerički unos iz nepouzdanih izvora (forme, query parametri, JSON payloadovi) prije izračuna, pohrane ili
provjera raspona, osiguravajući da prođu (`true`) samo konačni brojevi, a sve ostalo vraća `false`.

> **Napomena za TypeScript korisnike:**
>
> Koristite `isNumber` za validaciju `unknown` vrijednosti prije računanja; odbacuje `NaN`, `Infinity` i `-Infinity`.

### Prednosti

- Vraća `true` samo za stvarne JavaScript brojeve (provjera tipa plus odbacivanje `NaN` i beskonačnosti).
- Sprječava česte greške u validaciji gdje `NaN`, `Infinity` ili `-Infinity` slučajno prođu kao brojevi.
- Dobro radi kao runtime zaštita (guard) za nepoznat ulaz (npr. JSON, korisnički unos, vanjski API-ji).
- Jednostavno, brzo i bez sporednih efekata.

## Upotreba

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
  // input je važeći konačan broj
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

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.isNumber(value)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>Datoteka je generisana 30 January 2026 at 13:08:19 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>