# isWeakSet

## Opis

Ugotovi, ali je podana `value` `WeakSet` objektov.

### Primer uporabe

Uporabite `isWeakSet`, ko sprejemate netipiziran vhod (npr. iz zunanjih API-jev, dinamične konfiguracije ali vrednosti
`unknown`) in morate preveriti, ali gre za `WeakSet`, preden uporabite operacije, specifične za `WeakSet`.

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `isWeakSet` za zoženje vrednosti tipa `unknown` na `WeakSet<object>` med izvajanjem; upoštevajte, da lahko
`WeakSet` vsebuje le reference na objekte.

### Prednosti

- Omogoča preprosto preverjanje med izvajanjem, ali je vrednost `WeakSet`.
- Pomaga preprečevati napake tipov, saj zagotovi, da se kot `WeakSet` obravnavajo le primerki `WeakSet`.
- Deluje s katerim koli vhodom tipa `unknown` in vrne jasen logični rezultat (`true`/`false`).

## Uporaba

### Skladnja

Funkcija:

- `isWeakSet(value)`

Parametri:

- `value`: Vrednost, ki jo je treba preveriti.

### Lokalni uvoz funkcije

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // true
console.log(isWeakSet(b)); // false

if (isWeakSet(a)) {
  // a je WeakSet med izvajanjem
}
```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.isWeakSet(value)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>Datoteka je bila ustvarjena 30 January 2026 at 14:19:06 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>