# isEmpty

## Opis

Ugotovi, ali je dana vrednost prazna, in vrne `true` za `null`, `undefined`, prazne/nize s presledki, prazne tabele,
prazen `Map`/`Set` ali objekte brez lastnih naštevnih lastnosti.

### Primer uporabe

Uporabite `isEmpty` za validacijo vhodnih podatkov in zaznavanje manjkajočih/praznih vrednosti pri več podatkovnih
tipih (npr. polja obrazcev, API payloadi, konfiguracijski objekti), kjer je treba `null`, `undefined`, nize s presledki,
prazne zbirke in objekte brez lastnosti obravnavati kot prazne.

> **Opomba za uporabnike TypeScripta:**
>
> `isEmpty` je pripomoček, ki vrača boolean (ni TypeScriptov predikat tipa), zato sam po sebi ne zožuje tipov; uporabite
> ga za validacijo/vejitev namesto za zoževanje v času prevajanja.

### Prednosti

- Obravnava `null` in `undefined` kot `true` pri preverjanju praznosti.
- Nize, ki vsebujejo samo presledke, šteje za prazne tako, da jih pred preverjanjem dolžine obreže.
- Podpira pogoste vrste vsebnikov (tabele/arrays, `Map`, `Set`) ter navadne objekte brez lastnih naštevnih lastnosti.
- Se izogne štetju podedovanih lastnosti z uporabo preverjanj `hasOwnProperty`.
- Vrne preprost logični rezultat (`true`/`false`), primeren za varovala (guards) in validacijo.

## Uporaba

### Skladnja

Funkcija:

- `isEmpty(value)`

Parametri:

- `value`: Vrednost, pri kateri se preverja praznost.

### Lokalni uvoz funkcije

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.isEmpty(value)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>Datoteka je bila ustvarjena 6 February 2026 at 16:20:44 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>