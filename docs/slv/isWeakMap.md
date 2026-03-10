# isWeakMap

## Opis

Ugotovi, ali je podana `value` primerek `WeakMap`.

### Primer uporabe

Uporabite `isWeakMap`, ko sprejmete vrednost tipa `unknown` (npr. iz javnega API-ja, sistema vtičnikov ali dinamične
konfiguracije) in morate preveriti, da gre za `WeakMap`, preden uporabite vedenje, specifično za `WeakMap`.

> **Opomba za uporabnike TypeScripta:**
>
> `isWeakMap` izvede preverjanje `instanceof WeakMap`; to je varovalo med izvajanjem, ki vrne `true` samo za dejanske
> primerke `WeakMap`.

### Prednosti

- Preprosto preverjanje med izvajanjem, ali je vrednost `WeakMap`.
- Pomaga preprečiti napačno uporabo API-jev, ki zahtevajo `WeakMap`, saj vrne `true`/`false` namesto da bi sprožil
  izjemo.
- Deluje z vnosi tipa `unknown`, zato je priročno na mejah modulov (npr. pri razčlenjevanju, zunanih podatkih ali
  netipizirani kodi).

## Uporaba

### Skladnja

Funkcija:

- `isWeakMap(value)`

Parametri:

- `value`: Vrednost, ki jo je treba preveriti.

### Lokalni uvoz funkcije

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a je WeakMap med izvajanjem
}

console.log(isWeakMap(a)); // true
console.log(isWeakMap(b)); // false
```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.isWeakMap(value)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>Datoteka je bila ustvarjena 30 January 2026 at 13:26:50 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>