# isNaN

## Opis

Ugotovi, ali je podana `value` `NaN` tipa `number`, brez pretvarjanja nizov.

### Primer uporabe

Validirajte nezaupanja vredne ali ohlapno tipizirane vnose (npr. API payloads, vrednosti obrazcev, razčlenjen JSON), da
zaznate posebno vrednost `NaN` in jo izrecno obravnavate, medtem ko nenumerične vnose obravnavate kot ne-`NaN`.

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `isNaN`, ko morate zaznati posebno numerično vrednost `NaN`, pri tem pa zagotoviti, da je vhod dejansko tipa
`number` (brez pretvorbe iz niza v število).

### Prednosti

- Preveri, ali je vrednost `NaN`, ne da bi nenumerične vrednosti (npr. nize) prisilno pretvarjal v števila.
- Vrne `true` samo za vrednosti, ki so hkrati tipa `number` in `NaN`.
- Varno za vnose tipa `unknown` in se izogne lažnim pozitivnim rezultatom zaradi implicitnih pretvorb.

## Uporaba

### Skladnja

Funkcija:

- `isNaN(value)`

Parametri:

- `value`: Vrednost, ki jo je treba preveriti, ali je `NaN` tipa `number`.

### Lokalni uvoz funkcije

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // res
console.log(isNaN(b)); // napačno
console.log(isNaN(c)); // napačno

if (isNaN(a)) {
  // a je število in natančneje NaN
}
```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.isNaN(value)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [isNaN](../_analysis/isNaN.md)

<br>

---

<small>Datoteka je bila ustvarjena 30 January 2026 at 15:47:57 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>