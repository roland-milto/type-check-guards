# isNaN

## Opis

Utvrđuje da li je proslijeđena vrijednost `value` `NaN` tipa `number` bez pretvaranja stringova.

### Slučaj upotrebe

Validirajte nepouzdane ili labavo tipizirane ulaze (npr. API payloadove, vrijednosti iz formi, parsirani JSON) kako
biste detektovali posebnu vrijednost `NaN` i eksplicitno je obradili, dok se nenumerički ulazi tretiraju kao da nisu
`NaN`.

> **Napomena za TypeScript korisnike:**
>
> Koristite `isNaN` kada trebate detektovati posebnu numeričku vrijednost `NaN` uz osiguranje da je ulaz zaista tipa
`number` (bez konverzije stringa u broj).

### Prednosti

- Provjerava da li je vrijednost `NaN` bez prisilnog pretvaranja nenumeričkih vrijednosti (npr. stringova) u brojeve.
- Vraća `true` samo za vrijednosti koje su istovremeno tipa `number` i `NaN`.
- Sigurno za ulaze tipa `unknown` i izbjegava lažno pozitivne rezultate zbog implicitnih konverzija.

## Upotreba

### Sintaksa

Funkcija:

- `isNaN(value)`

Parametri:

- `value`: Vrijednost koju treba provjeriti da li je `NaN` tipa `number`.

### Lokalni uvoz funkcije

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // tačno
console.log(isNaN(b)); // netačno
console.log(isNaN(c)); // netačno

if (isNaN(a)) {
  // a je broj i konkretno NaN
}
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.isNaN(value)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isNaN](../_analysis/isNaN.md)

<br>

---

<small>Datoteka je generisana 30 January 2026 at 15:45:22 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>