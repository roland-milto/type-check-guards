# arePrimitives

## Opis

`arePrimitives` oceni, ali so vsi elementi v podanem, nepraznem polju primitivni tipi.

### Primer uporabe

Preverite, da vhodni podatki (npr. parametri poizvedbe, vrednosti vrstic CSV ali seznam ID-jev/oznak) vsebujejo samo
primitivne vrednosti, preden jih serializirate, zgoščujete, beležite ali posredujete API-jem, ki ne smejo prejeti
objektov.

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `arePrimitives`, ko morate zagotoviti, da `unknown[]` vsebuje samo primitivne vrednosti (string, number,
> bigint, boolean, symbol, undefined ali null) pred nadaljnjo obdelavo.

### Prednosti

- Vrne `true` samo, ko je vsak element primitivna vrednost, zato je stroga zaščita za polja »brez objektov/funkcij«.
- Hitro odpove: vrne `false` takoj, ko najde ne-primitiven element.
- Prav tako vrne `false` za ne-polja in prazna polja (prek preverjanja zapolnjenega polja), s čimer prepreči nenamerno
  sprejemanje neveljavnega vnosa.

## Uporaba

### Skladnja

Funkcija:

- `arePrimitives(array)`

Parametri:

- `array`: Polje, ki ga je treba preveriti glede elementov primitivnega tipa.

### Lokalni uvoz funkcije

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // res
const r2 = arePrimitives(b); // res
const r3 = arePrimitives(c); // napačno
```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.arePrimitives(array)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>Datoteka je bila ustvarjena 31 January 2026 at 00:06:26 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>