# isArray

## Opis

`isArray` provjerava da li je data vrijednost niz i vraća `true` ako jeste, u suprotnom `false`.

### Slučaj upotrebe

Validirajte nepoznate podatke (npr. parsirani JSON ili API odgovore) kako biste osigurali da je vrijednost niz prije
iteriranja, indeksiranja ili pristupa `.length`.

> **Napomena za TypeScript korisnike:**
>
> Koristite `isArray` kada vam je potrebna provjera nizova u runtime-u; vraća booleansku vrijednost i sigurno je pozvati
> je s vrijednostima tipa `unknown`.

### Prednosti

- Koristi ugrađeni `Array.isArray` za pouzdano prepoznavanje nizova kroz različite okvire (npr. iframe-ove).
- Vraća jednostavan booleanski rezultat (`true`/`false`) pogodan za guard-ove i logiku grananja.
- Radi s bilo kojim tipom ulaza jer je parametar `unknown`.

## Upotreba

### Sintaksa

Funkcija:

- `isArray(value)`

Parametri:

- `value`: Vrijednost koju treba provjeriti.

### Lokalni uvoz funkcije

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // input je niz u vrijeme izvršavanja
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.isArray(value)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isArray](../_analysis/isArray.md)

<br>

---

<small>Datoteka je generisana 6 February 2026 at 11:29:47 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>