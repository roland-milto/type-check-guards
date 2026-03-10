# isNaN

## Apraksts

Nosaka, vai norādītā `value` ir tipa `number` `NaN`, nepārveidojot virknes.

### Lietošanas gadījums

Validēt neuzticamu vai vāji tipizētu ievadi (piem., API payloadus, formas vērtības, parsētu JSON), lai noteiktu īpašo
`NaN` vērtību un to apstrādātu explicitā veidā, vienlaikus uzskatot ne-skaitliskas ievades par ne-`NaN`.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `isNaN`, kad nepieciešams noteikt īpašo skaitlisko vērtību `NaN`, vienlaikus nodrošinot, ka ievade
> patiešām ir `number` (bez virknes pārvēršanas par skaitli).

### Priekšrocības

- Pārbauda, vai vērtība ir `NaN`, nepiespiežot ne-skaitļus (piem., virknes) pārvērst par skaitļiem.
- Atgriež `true` tikai tām vērtībām, kas ir gan tipa `number`, gan `NaN`.
- Drošs `unknown` ievadēm un izvairās no kļūdaini pozitīviem rezultātiem, ko rada netiešas konvertācijas.

## Lietošana

### Sintakse

Funkcija:

- `isNaN(value)`

Parametri:

- `value`: Vērtība, kas jāpārbauda, vai tā ir tipa `number` `NaN`.

### Lokāls funkcijas imports

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // patiess
console.log(isNaN(b)); // aplams
console.log(isNaN(c)); // aplams

if (isNaN(a)) {
  // a ir skaitlis un konkrēti NaN
}
```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.isNaN(value)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [isNaN](../_analysis/isNaN.md)

<br>

---

<small>Fails tika izveidots 30 January 2026 at 15:46:52 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>