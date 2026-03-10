# isFloat

## Opis

`isFloat` određuje da li je zadana `value` konačan broj s pomičnim zarezom (tj. `number` koji nije cijeli broj).

### Slučaj upotrebe

Validirajte numerički unos koji korisnik daje kada su potrebne razlomljene vrijednosti (npr. cijene, mjerenja, stope) i
odbacite cijele brojeve, `NaN` i beskonačnosti.

> **Napomena za TypeScript korisnike:**
>
> Koristite `isFloat` kada trebate prihvatiti samo konačne, ne-cjelobrojne numeričke ulaze; odbacuje cijele brojeve i
> ne-konačne brojeve.

### Prednosti

- Vraća `true` samo za konačne, ne-cjelobrojne brojeve (isključuje cijele brojeve, `NaN`, `Infinity` i `-Infinity`).
- Radi s bilo kojim tipom ulaza (`unknown`) i sigurno sužava tip provjerom `typeof value === "number"`.
- Koristi ugrađene numeričke provjere (`Number.isInteger`, `Number.isFinite`) za predvidivo ponašanje.

## Upotreba

### Sintaksa

Funkcija:

- `isFloat(value)`

Parametri:

- `value`: Vrijednost koju treba provjeriti da li je broj s pomičnim zarezom.

### Lokalni uvoz funkcije

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // vrijednost je broj u vrijeme izvođenja; konačna je i nije cijeli broj
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.isFloat(value)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isFloat](../_analysis/isFloat.md)

<br>

---

<small>Datoteka je generisana 30 January 2026 at 16:06:54 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>