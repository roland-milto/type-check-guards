# areFilledArrays

## Apraksts

`areFilledArrays` pārbauda, vai divdimensionāls masīvs nav tukšs un vai visi tā apakšmasīvi nav tukši.

### Lietošanas gadījums

Izmantojiet `areFilledArrays`, lai validētu tabulāru vai matricai līdzīgu ievadi (piem., CSV rindas, režģa datus,
grupētus rezultātus), lai varētu droši pieņemt, ka ir vismaz viens apakšmasīvs un neviens no apakšmasīviem nav tukšs.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `areFilledArrays`, kad nepieciešams nodrošināt, ka 2D masīvam ir vismaz viena rinda un katrā rindā ir
> vismaz viens elements, pirms to iterēt vai indeksēt.

### Priekšrocības

- Pārbauda, vai ārējais masīvs nav tukšs un vai katrs iekšējais masīvs arī nav tukšs, atgriežot `true` tikai tad, ja ir
  izpildīti abi nosacījumi.
- Darbojas ar jebkuriem elementu tipiem apakšmasīvos (piem., skaitļi, virknes, objekti, ligzdoti masīvi), jo tas
  pārbauda tikai masīva “aizpildītības” statusu, nevis elementu saturu.
- Nodrošina vienkāršu būla rezultātu (`true`/`false`), kas ir piemērots kā sargs pirms divdimensionālu datu apstrādes.

## Lietošana

### Sintakse

Funkcija:

- `areFilledArrays(array)`

Parametri:

- `array`: Divdimensionālais masīvs, ko pārbaudīt.

### Lokāls funkcijas imports

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // patiess
console.log(areFilledArrays(b)); // patiess
console.log(areFilledArrays(c)); // patiess
console.log(areFilledArrays(d)); // aplams
console.log(areFilledArrays(e)); // aplams
console.log(areFilledArrays(f)); // aplams

```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.areFilledArrays(array)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>Fails tika izveidots 6 February 2026 at 11:57:35 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>