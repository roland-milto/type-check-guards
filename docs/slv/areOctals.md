# areOctals

## Opis

`areOctals` določi, ali je podana vrednost neprazno polje veljavnih osmiških nizov.

### Primer uporabe

Uporabite `areOctals` pri validaciji uporabniškega vnosa, konfiguracijskih vrednosti ali API payloadov, ki morajo
vsebovati osmiške literale (npr. načine dovoljenj datotek, kot je `0o755`), in želite zavrniti prazna polja ali
kakršnekoli neveljavne vnose z vračanjem `false`.

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `areOctals`, da zagotovite, da imate neprazno `unknown[]`, kjer je vsak vnos veljaven osmiški niz, preden ga
> pretvorite (npr. prek `Number(...)` ali z lastnim razčlenjevanjem).

### Prednosti

- Preveri, da je vrednost neprazno polje, kjer je vsak element osmiški niz, in vrne `true` samo, ko vsi elementi
  prestanejo preverjanje.
- Hitro odpove: vrne `false` takoj, ko je najden neosmiški element.
- Uporabno kot varovalo pred razčlenjevanjem ali pretvarjanjem osmiških nizov, da se izognete napakam med izvajanjem in
  nedosledni obravnavi vnosa.

## Uporaba

### Skladnja

Funkcija:

- `areOctals(array)`

Parametri:

- `array`: Vrednost, ki jo je treba preveriti.

### Lokalni uvoz funkcije

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  // value je neprazen niz oktalnih nizov
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.areOctals(array)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [areOctals](../_analysis/areOctals.md)

<br>

---

<small>Datoteka je bila ustvarjena 30 January 2026 at 14:58:12 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>