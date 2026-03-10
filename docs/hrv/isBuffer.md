# isBuffer

## Opis

Provjerava je li vrijednost Node.js `Buffer` i vraća `true` ili `false`.

### Slučaj uporabe

Provjerite ulaze u vrijeme izvođenja (npr. API payloadove, podatke datoteka ili međuspremnike poruka) kako biste
osigurali da je vrijednost `Buffer` prije obrade te pouzdano dobili `false` pri izvođenju izvan Node.js okruženja gdje
`Buffer` možda ne postoji.

> **Napomena za TypeScript korisnike:**
>
> Koristite `isBuffer` za sužavanje vrijednosti tipa `unknown` na `Buffer` prije pozivanja metoda specifičnih za Buffer.

### Prednosti

- Sigurno otkriva instance Node.js `Buffer` koristeći `Buffer.isBuffer`.
- Vraća `false` u okruženjima gdje `Buffer` nije dostupan, čime se izbjegavaju pogreške tijekom izvođenja.
- Radi s ulazom tipa `unknown`, što ga čini prikladnim za provjeru valjanosti u vrijeme izvođenja i sužavanje tipa.

## Uporaba

### Sintaksa

Funkcija:

- `isBuffer(value)`

Parametri:

- `value`: Vrijednost koju treba testirati.

### Lokalni uvoz funkcije

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // true
console.log(isBuffer(b)); // false

if (isBuffer(a)) {
  // a je ovdje Buffer
  console.log(a.toString("utf8"));
}
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.isBuffer(value)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>Datoteka je generirana 31 January 2026 at 16:31:48 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>