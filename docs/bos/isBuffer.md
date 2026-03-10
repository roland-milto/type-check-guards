# isBuffer

## Opis

Provjerava da li je vrijednost Node.js `Buffer` i vraća `true` ili `false`.

### Slučaj upotrebe

Validirajte ulaze u runtime-u (npr. API payloadove, podatke iz datoteka ili buffere poruka) kako biste osigurali da je
vrijednost `Buffer` prije obrade, i pouzdano dobili `false` kada se izvršava izvan Node.js gdje `Buffer` možda ne
postoji.

> **Napomena za TypeScript korisnike:**
>
> Koristite `isBuffer` da suzite vrijednosti tipa `unknown` na `Buffer` prije pozivanja metoda specifičnih za Buffer.

### Prednosti

- Sigurno otkriva Node.js instance `Buffer` koristeći `Buffer.isBuffer`.
- Vraća `false` u okruženjima gdje `Buffer` nije dostupan, izbjegavajući greške u izvršavanju.
- Radi s ulazom tipa `unknown`, što ga čini pogodnim za validaciju u runtime-u i sužavanje tipova.

## Upotreba

### Sintaksa

Funkcija:

- `isBuffer(value)`

Parametri:

- `value`: Vrijednost koja se testira.

### Lokalni uvoz funkcije

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // tačno
console.log(isBuffer(b)); // netačno

if (isBuffer(a)) {
  // a je ovdje Buffer
  console.log(a.toString("utf8"));
}
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.isBuffer(value)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>Datoteka je generisana 31 January 2026 at 16:30:56 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>