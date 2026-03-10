# areIndexesFound

## Apraksts

`areIndexesFound` pārbauda, vai vērtība ir ne-tukšs masīvs, kura elementi visi ir derīgi indeksi, atgriežot `true`, ja
tā ir, un `false` pretējā gadījumā.

### Lietošanas gadījums

Validēt lietotāja sniegtus vai ārējus datus (piem., parsētu JSON), no kuriem tiek sagaidīts indeksu saraksts, pirms tos
izmantot masīvu piekļuvei vai šķelšanai.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `areIndexesFound`, lai validētu nezināmu ievadi pirms tās elementu uzskatīšanas par masīva indeksiem; tā
> atgriež `false` tukšiem masīviem un masīviem, kas satur vērtības, kas nav indeksi.

### Priekšrocības

- Atgriež `true` tikai tad, ja ievade ir aizpildīts masīvs un katrs elements ir derīgs indekss.
- Ātri pārtrauc pārbaudi: atgriež `false`, tiklīdz tiek sastapts elements, kas nav indekss.
- Noder kā sargs pirms vērtību izmantošanas kā masīva pozīcijas vai nobīdes.

## Lietošana

### Sintakse

Funkcija:

- `areIndexesFound(array)`

Parametri:

- `array`: Masīvs, kas jāpārbauda attiecībā uz atbilstību indeksiem.

### Lokāls funkcijas imports

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // true
console.log(areIndexesFound(b)); // false
console.log(areIndexesFound(c)); // false

if (areIndexesFound(a)) {
  // Šeit tiek apstiprināts, ka `a` ir aizpildīts indeksu masīvs.
  const firstIndex = a[0];
  console.log(firstIndex);
}
```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.areIndexesFound(array)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>Fails tika izveidots 31 January 2026 at 00:42:34 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>