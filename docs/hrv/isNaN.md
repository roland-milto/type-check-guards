# isNaN

## Opis

Određuje je li zadana `value` `NaN` tipa `number` bez pretvaranja stringova.

### Slučaj uporabe

Validirajte nepouzdane ili labavo tipizirane ulaze (npr. API payloadove, vrijednosti obrazaca, parsirani JSON) kako
biste detektirali posebnu vrijednost `NaN` i eksplicitno je obradili, dok se nenumerički ulazi tretiraju kao da nisu
`NaN`.

> **Napomena za TypeScript korisnike:**
>
> Koristite `isNaN` kada trebate detektirati posebnu numeričku vrijednost `NaN` uz osiguranje da je ulaz doista
`number` (bez pretvorbe stringa u broj).

### Prednosti

- Provjerava je li vrijednost `NaN` bez prisilnog pretvaranja nenumeričkih vrijednosti (npr. stringova) u brojeve.
- Vraća `true` samo za vrijednosti koje su i tipa `number` i `NaN`.
- Sigurno za ulaze tipa `unknown` i izbjegava lažno pozitivne rezultate zbog implicitnih pretvorbi.

## Uporaba

### Sintaksa

Funkcija:

- `isNaN(value)`

Parametri:

- `value`: Vrijednost koju treba provjeriti je li `NaN` tipa `number`.

### Lokalni uvoz funkcije

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // true
console.log(isNaN(b)); // false
console.log(isNaN(c)); // false

if (isNaN(a)) {
  // a je broj i to konkretno NaN
}
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.isNaN(value)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isNaN](../_analysis/isNaN.md)

<br>

---

<small>Datoteka je generirana 30 January 2026 at 15:46:17 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>