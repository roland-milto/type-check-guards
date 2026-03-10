# areOneOfType

## Opis

`areOneOfType` preveri, ali so vsi elementi v nepraznem polju enega od navedenih izvajalnih tipov.

### Primer uporabe

Preverite vhodne podatke (npr. razčlenjen JSON), kjer mora biti polje neprazno in kjer so elementi omejeni na znan nabor
primitivnih tipov; vrnite `false`, ko je polje prazno ali vsebuje kateri koli nedovoljen tip.

> **Opomba za uporabnike TypeScripta:**
>
> Ta funkcija vrne boolean in ne zoži tipov elementov polja v času prevajanja; uporabite jo kot korak izvajalnega
> preverjanja pred nadaljnjo obdelavo.

### Prednosti

- Zagotovi, da se vsak element v polju ujema vsaj z enim dovoljenim izvajalnim tipom, in vrne `true` samo, ko uspe
  celotno polje.
- Zgodaj zavrne neveljavne vnose: vrne `false`, ko je `array` ali `types` prazen ali ni zapolnjeno polje.
- Uporabno za preverjanje zbirk z mešanimi tipi (npr. številke in nizi) z enim samim klicem `areOneOfType`.

## Uporaba

### Skladnja

Funkcija:

- `areOneOfType(array, types)`

Parametri:

- `array`: Polje elementov, ki jih je treba preveriti glede na podane tipe.
- `types`: Polje nizov, ki predstavljajo podatkovne tipe, glede na katere se preverja.

### Lokalni uvoz funkcije

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.areOneOfType(array, types)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>Datoteka je bila ustvarjena 31 January 2026 at 23:38:33 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>