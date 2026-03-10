# isBigInt

## Opis

`isBigInt` provjerava da li je data vrijednost tipa `bigint`, vraćajući `true` za BigInt primitive, a `false` u
suprotnom.

### Slučaj upotrebe

Validirajte i suzite vrijednosti koje dolaze iz netipiziranih izvora (npr. parsiranje JSON-a, korisnički unos, vanjski
API-ji) prije izvođenja BigInt-specifičnih izračuna ili spremanja u polja koja prihvataju samo BigInt.

> **Napomena za TypeScript korisnike:**
>
> Koristite `isBigInt` da suzite `unknown` na `bigint` prije izvođenja BigInt aritmetike (npr. `+`, `*`) koja zahtijeva
> BigInt operande.

### Prednosti

- Pruža jednostavnu i pouzdanu provjeru u runtime-u za primitivni tip `bigint`.
- Pomaže suziti vrijednosti tipa `unknown` prije izvođenja operacija koje su dozvoljene samo za BigInt.
- Izbjegava lažno pozitivne rezultate: obični brojevi, stringovi i drugi tipovi vraćaju `false`.

## Upotreba

### Sintaksa

Funkcija:

- `isBigInt(value)`

Parametri:

- `value`: Vrijednost koju treba provjeriti.

### Lokalni uvoz funkcije

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // tačno
console.log(isBigInt(10));  // netačno
console.log(isBigInt("10")); // netačno

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.isBigInt(value)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>Datoteka je generisana 31 January 2026 at 23:31:16 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>