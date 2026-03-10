# isUndefined

## Apraksts

Pārbauda, vai dotā vērtība ir `undefined`.

### Lietošanas gadījums

Izmantojiet `isUndefined`, lai sargātu izvēles ievades, noteiktu trūkstošas īpašības vai atšķirtu “nav norādīts” (
`undefined`) no “apzināti tukšs” (`null`).

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `isUndefined`, ja jums konkrēti jānosaka `undefined` (nevis `null`). Tas ir droši, jo balstās uz
`typeof value === "undefined"`.

### Priekšrocības

- Nodrošina skaidru, nepārprotamu pārbaudi uz `undefined`, izmantojot `typeof`, izvairoties no robežgadījumiem ar
  nedeklarētiem mainīgajiem.
- Atgriež vienkāršu loģisku rezultātu (`true`/`false`), kas piemērots sargiem, atzarošanai un validācijas loģikai.
- Palīdz atšķirt `undefined` no citām “tukšām” vērtībām, piemēram, `null`, `0`, `""` vai `NaN`.

## Lietošana

### Sintakse

Funkcija:

- `isUndefined(value)`

Parametri:

- `value`: Pārbaudāmā vērtība.

### Lokāls funkcijas imports

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // x šeit ir undefined
} else {
  // x šeit nav undefined
}

const a = isUndefined(undefined); // true
const b = isUndefined(null);      // false

```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.isUndefined(value)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>Fails tika izveidots 30 January 2026 at 14:03:24 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>