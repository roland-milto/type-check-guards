# areFinite

## Opis

`areFinite` preveri, ali je vrednost neprazen seznam, katerega elementi so vsi končna števila; v tem primeru vrne
`true`, sicer pa `false`.

### Primer uporabe

Validirajte sezname številskih vhodov (npr. serije grafov, sezname koordinat, vzorce meritev) pred izvajanjem izračunov,
pri čemer je rezultat `true` samo, ko so vse vrednosti končna števila.

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `areFinite`, ko morate zagotoviti, da je seznam neprazen in vsebuje samo končna števila; za prazne sezname
> ter za sezname, ki vsebujejo `NaN` ali neskončnosti, vrne `false`.

### Prednosti

- Vrne `true` samo, ko je vhod neprazen seznam in je vsak element končno število.
- Zavrne `Infinity`, `-Infinity` in `NaN`, saj se zanaša na preverjanja `isFinite` za vsak element.
- Zagotavlja preprost logični rezultat (`true`/`false`), primeren za varovala (guards) in validacijske tokove.

## Uporaba

### Skladnja

Funkcija:

- `areFinite(array)`

Parametri:

- `array`: Seznam, pri katerem se preverja, ali so vsi njegovi elementi končna števila.

### Lokalni uvoz funkcije

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // res
console.log(areFinite(b)); // napačno
console.log(areFinite(c)); // napačno

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null
```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.areFinite(array)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>Datoteka je bila ustvarjena 30 January 2026 at 16:37:04 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>