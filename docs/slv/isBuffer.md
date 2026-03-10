# isBuffer

## Opis

Preveri, ali je vrednost Node.js `Buffer`, in vrne `true` ali `false`.

### Primer uporabe

Preverite vnose med izvajanjem (npr. API payloadi, podatki datotek ali medpomnilniki sporočil), da zagotovite, da je
vrednost `Buffer` pred obdelavo, in zanesljivo dobite `false`, ko se izvaja zunaj Node.js, kjer `Buffer` morda ne
obstaja.

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `isBuffer` za zoženje vrednosti tipa `unknown` na `Buffer`, preden pokličete metode, specifične za Buffer.

### Prednosti

- Varno zazna primerke Node.js `Buffer` z uporabo `Buffer.isBuffer`.
- Vrne `false` v okoljih, kjer `Buffer` ni na voljo, s čimer se izogne napakam med izvajanjem.
- Deluje z vhodom tipa `unknown`, zato je primeren za preverjanje med izvajanjem in zoževanje tipov.

## Uporaba

### Skladnja

Funkcija:

- `isBuffer(value)`

Parametri:

- `value`: Vrednost, ki jo je treba preveriti.

### Lokalni uvoz funkcije

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // true
console.log(isBuffer(b)); // false

if (isBuffer(a)) {
  // a je tukaj Buffer
  console.log(a.toString("utf8"));
}
```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.isBuffer(value)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>Datoteka je bila ustvarjena 31 January 2026 at 16:33:13 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>