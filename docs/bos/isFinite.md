# isFinite

## Opis

Određuje da li je dati `value` konačan `number`.

### Slučaj upotrebe

Koristite `isFinite` za validaciju nepoznatog ulaza (npr. iz JSON-a, obrazaca ili API-ja) prije izvođenja numeričkih
proračuna, osiguravajući da je vrijednost stvaran, konačan broj.

> **Napomena za TypeScript korisnike:**
>
> `isFinite` vraća `true` samo za konačne brojeve; vraća `false` za `NaN`, `Infinity` i bilo koju vrijednost koja nije
> broj.

### Prednosti

- Koristi ugrađeni `Number.isFinite` za pouzdanu provjeru konačnosti.
- Vraća `true` samo za konačne brojeve; vraća `false` za `NaN`, `Infinity` i ulaze koji nisu brojevi.
- Jednostavan predikat bez nuspojava, pogodan za validaciju i zaštitnu logiku.

## Upotreba

### Sintaksa

Funkcija:

- `isFinite(value)`

Parametri:

- `value`: Vrijednost koju treba provjeriti na konačnost.

### Lokalni uvoz funkcije

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers je: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // value je ovdje konačan broj
  const doubled = value * 2;
  console.log(doubled);
}
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.isFinite(value)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>Datoteka je generisana 30 January 2026 at 16:29:06 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>