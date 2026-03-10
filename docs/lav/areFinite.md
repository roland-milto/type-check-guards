# areFinite

## Apraksts

`areFinite` pārbauda, vai vērtība ir netukšs masīvs, kura elementi visi ir galīgi skaitļi, atgriežot `true`, ja tā ir,
un `false` pretējā gadījumā.

### Lietošanas gadījums

Validēt skaitlisku ievades masīvus (piem., diagrammu sērijas, koordinātu sarakstus, mērījumu paraugus) pirms aprēķinu
veikšanas, nodrošinot, ka rezultāts ir `true` tikai tad, ja visas vērtības ir galīgi skaitļi.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `areFinite`, kad nepieciešams nodrošināt, ka masīvs ir netukšs un satur tikai galīgus skaitļus; tā atgriež
`false` tukšiem masīviem un masīviem, kas satur `NaN` vai bezgalības.

### Priekšrocības

- Atgriež `true` tikai tad, ja ievade ir netukšs masīvs un katrs elements ir galīgs skaitlis.
- Noraida `Infinity`, `-Infinity` un `NaN`, paļaujoties uz `isFinite` pārbaudēm katram elementam.
- Nodrošina vienkāršu būla rezultātu (`true`/`false`), kas piemērots sargiem un validācijas plūsmām.

## Lietošana

### Sintakse

Funkcija:

- `areFinite(array)`

Parametri:

- `array`: Masīvs, kuram jāpārbauda visu tā elementu galīgums.

### Lokāls funkcijas imports

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // patiess
console.log(areFinite(b)); // aplams
console.log(areFinite(c)); // aplams

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null
```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.areFinite(array)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>Fails tika izveidots 30 January 2026 at 16:35:42 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>