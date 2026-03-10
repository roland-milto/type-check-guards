# areBooleans

## Opis

`areBooleans` preveri, ali dan neprazen seznam vsebuje samo logične vrednosti; vrne `true`, če jih, sicer pa `false`.

### Primer uporabe

Validirajte podatke, ki jih posreduje uporabnik ali zunanji viri (npr. JSON vsebine, parametri poizvedb, konfiguracijski
seznami), da zagotovite, da neprazen seznam vsebuje samo logične vrednosti, preden uporabite logiko nad logičnimi
vrednostmi ali ga posredujete API-jem, ki pričakujejo `boolean[]`.

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `areBooleans` za validacijo `unknown[]`, preden ga obravnavate kot `boolean[]`; za prazne sezname vrne
`false`, zato ta primer obravnavajte izrecno, če je prazen seznam dovoljen.

### Prednosti

- Vrne `true` samo takrat, ko je vsak element logična vrednost in je vhod neprazen seznam.
- Prepreči lažno pozitivne rezultate tako, da zavrne prazne sezname (vrne `false`).
- Dobro deluje kot preverjanje v času izvajanja pred operacijami, ki so namenjene samo logičnim vrednostim (npr.
  `every`, `some`, logične redukcije).

## Uporaba

### Skladnja

Funkcija:

- `areBooleans(array)`

Parametri:

- `array`: Seznam, ki ga je treba preveriti glede logičnih elementov.

### Lokalni uvoz funkcije

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.areBooleans(array)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>Datoteka je bila ustvarjena 30 January 2026 at 14:42:20 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>