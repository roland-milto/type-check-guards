# isFinite

## Opis

Određuje je li zadani `value` konačan `number`.

### Slučaj uporabe

Koristite `isFinite` za validaciju nepoznatog unosa (npr. iz JSON-a, obrazaca ili API-ja) prije izvođenja numeričkih
izračuna, osiguravajući da je vrijednost stvaran, konačan broj.

> **Napomena za TypeScript korisnike:**
>
> `isFinite` vraća `true` samo za konačne brojeve; vraća `false` za `NaN`, `Infinity` i bilo koju vrijednost koja nije
> broj.

### Prednosti

- Koristi ugrađeni `Number.isFinite` za pouzdanu provjeru konačnosti.
- Vraća `true` samo za konačne brojeve; vraća `false` za `NaN`, `Infinity` i ulaze koji nisu brojevi.
- Jednostavan predikat bez nuspojava, prikladan za validaciju i zaštitnu logiku.

## Uporaba

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

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.isFinite(value)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>Datoteka je generirana 30 January 2026 at 16:30:03 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>