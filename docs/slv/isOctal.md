# isOctal

## Opis

Ugotovi, ali je vrednost veljaven niz osmiškega literala (npr. `0o755`).

### Primer uporabe

Preverite uporabniški vnos ali konfiguracijske vrednosti, ki morajo biti izražene kot niz osmiškega literala (na primer
načini dovoljenj datotek, kot je `0o644`), preden jih razčlenite ali pretvorite.

> **Opomba za uporabnike TypeScripta:**
>
> `isOctal` je varovalo tipa (`value is string`). Po rezultatu `true` TypeScript zoži preverjeno spremenljivko na
`string`.

### Prednosti

- Zagotavlja strogo varovalo tipa: vrne `true` samo, ko je vhod niz, ki se ujema z obliko osmiškega literala.
- Zavrne prazne nize in nize z vodilnimi/zaključnimi presledki (ASCII kontrolni znaki/presledek), s čimer zmanjša
  nenamerna ujemanja.
- Podpira neobvezen predznak in ni občutljiv na velikost črk za predpono `0o`/`0O`.
- Pri vhodih, ki niso nizi, je prizanesljiv, saj vrne `false` namesto da bi sprožil izjemo.

## Uporaba

### Skladnja

Funkcija:

- `isOctal(value)`

Parametri:

- `value`: Vrednost, ki jo je treba preveriti.

### Lokalni uvoz funkcije

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // res
console.log(isOctal(b)); // res
console.log(isOctal(c)); // napačno
console.log(isOctal(d)); // napačno

if (isOctal(a)) {
  // a je tukaj niz
  const normalized = a.toLowerCase();
  console.log(normalized);
}
```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.isOctal(value)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [isOctal](../_analysis/isOctal.md)

<br>

---

<small>Datoteka je bila ustvarjena 30 January 2026 at 15:43:16 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>