# areSets

## Opis

Preveri, ali dani neprazen seznam vsebuje samo primerke `Set`; vrne `true`, če jih, sicer pa `false`.

### Primer uporabe

Preverite, da je vrednost (npr. iz uporabniškega vnosa, razčlenjevanja JSON ali zunanjih API-jev) neprazen seznam
objektov `Set`, preden obdelate vsak set.

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `areSets` za preverjanje neznanega vhoda pred iteriranjem in klicanjem API-jev `Set` (npr. `.size`, `.has`,
`.add`) na vsakem elementu.

### Prednosti

- Vrne `true` samo, ko je vhod neprazen seznam in je vsak element primerek `Set`.
- Prepreči lažno pozitivne rezultate za prazne sezname, saj vrne `false`, ko seznam nima elementov.
- Uporabno kot preverjanje med izvajanjem pred izvajanjem operacij, specifičnih za `Set`, na vsakem elementu.

## Uporaba

### Skladnja

Funkcija:

- `areSets(array)`

Parametri:

- `array`: Seznam, ki ga je treba preveriti glede primerkov `Set`.

### Lokalni uvoz funkcije

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // a je v času izvajanja polje primerkov Set
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // false
console.log(areSets(c)); // false
```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.areSets(array)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [areSets](../_analysis/areSets.md)

<br>

---

<small>Datoteka je bila ustvarjena 30 January 2026 at 23:15:17 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>