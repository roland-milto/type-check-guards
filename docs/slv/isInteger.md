# isInteger

## Opis

Ugotovi, ali je podana `value` varno celo število.

### Primer uporabe

Preverite nezaupanja vreden vnos (npr. parametre poizvedbe, JSON payload, okoljske spremenljivke), preden ga uporabite
kot celo število za indekse polj, paginacijo, števce ali ID-je v podatkovni bazi.

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `isInteger` za preverjanje neznanega vnosa, preden ga obravnavate kot numerično celo število; vrne `true`
> samo za vrednosti, pri katerih velja `typeof value === "number"` in `Number.isSafeInteger(value)`.

### Prednosti

- Preveri tako tip kot numerično varnost: vrne `true` samo, ko je vhod število in varno celo število.
- Prepreči pogoste pasti pri numerični prisili: nizi, kot je "5", pravilno vrnejo `false`.
- Zavrne necela števila in nevarna cela števila, zato je primeren za ID-je, števce in indeksiranje polj.

## Uporaba

### Skladnja

Funkcija:

- `isInteger(value)`

Parametri:

- `value`: Vrednost, pri kateri preverimo, ali je celo število.

### Lokalni uvoz funkcije

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // res
const b = isInteger(-100);   // res
const c = isInteger("5");    // napačno
const d = isInteger(5.5);    // napačno
const e = isInteger(null);   // napačno

```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.isInteger(value)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [isInteger](../_analysis/isInteger.md)

<br>

---

<small>Datoteka je bila ustvarjena 31 January 2026 at 00:51:20 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>