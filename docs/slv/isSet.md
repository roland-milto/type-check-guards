# isSet

## Opis

Ugotovi, ali je dana vrednost `Set`.

### Primer uporabe

Validirajte vnose iz zunanjih virov (npr. razčlenjevanje JSON, uporabniški vnos ali API-ji tretjih oseb), da zagotovite,
da je vrednost `Set`, preden izvedete operacije `Set`.

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `isSet` za zoženje vrednosti tipa `unknown` pred klicanjem API-jev, specifičnih za `Set`, kot so `.add`,
`.has` ali `.size`.

### Prednosti

- Omogoča preprost preveritveni pregled med izvajanjem, da potrdite, ali je vrednost `Set`.
- Pomaga preprečiti napake tipov, saj omogoča zgodnje razvejanje, ko vrednost ni `Set`.
- Deluje s katerokoli vsebino `Set` (prazen ali napolnjen) in dosledno vrne `true`/`false`.

## Uporaba

### Skladnja

Funkcija:

- `isSet(value)`

Parametri:

- `value`: Vrednost za preverjanje.

### Lokalni uvoz funkcije

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  // a je Set med izvajanjem
  console.log(a.size);
}

console.log(isSet(b)); // napačno
```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.isSet(value)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [isSet](../_analysis/isSet.md)

<br>

---

<small>Datoteka je bila ustvarjena 30 January 2026 at 23:11:09 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>