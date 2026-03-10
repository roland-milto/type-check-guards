# areNumerics

## Apraksts

`areNumerics` pārbauda, vai vērtība ir netukšs masīvs, kurā visi elementi ir skaitliski.

### Lietošanas gadījums

Izmantojiet `areNumerics`, lai validētu ārējus vai netipizētus datus (piem., JSON payloadus, vaicājuma parametrus,
formas ievadi) pirms summu, vidējo vērtību vai citu skaitlisku operāciju aprēķināšanas, nodrošinot, ka ievade ir netukšs
skaitlisks masīvs, un citos gadījumos atgriežot `false`.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `areNumerics`, lai aizsargātu `unknown` ievadi pirms tās apstrādes kā skaitliska masīva; tā atgriež
`false` ne-masīviem un tukšiem masīviem.

### Priekšrocības

- Atgriež `true` tikai tad, ja ievade ir netukšs masīvs un katrs elements ir skaitlisks.
- Ātri pārtrauc pārbaudi: tiklīdz tiek atrasts neskaitlisks elements, pārbaude tiek apturēta un tiek atgriezts `false`.
- Palīdz droši validēt nezināmu ievadi pirms skaitlisku operāciju veikšanas.

## Lietošana

### Sintakse

Funkcija:

- `areNumerics(array)`

Parametri:

- `array`: Masīvs, kurā jāpārbauda skaitliskie elementi.

### Lokāls funkcijas imports

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // patiess
console.log(areNumerics(b)); // patiess
console.log(areNumerics(c)); // aplams
console.log(areNumerics(d)); // aplams
console.log(areNumerics(e)); // aplams

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null
```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.areNumerics(array)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>Fails tika izveidots 6 February 2026 at 16:06:05 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>