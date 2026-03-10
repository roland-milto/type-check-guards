# isIndexFound

## Apraksts

`isIndexFound` nosaka, vai dotā vērtība ir nenegatīvs vesels skaitlis, norādot, ka indekss ir atrasts.

### Lietošanas gadījums

Validēt, ka meklēšanas rezultāts ir izmantojams indekss (vesels skaitlis `>= 0`) pirms indeksēšanas masīvā vai virknē,
novēršot nejaušu `-1` vai neskaitlisku vērtību izmantošanu.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `isIndexFound` pēc tādām darbībām kā `indexOf`, `findIndex` vai pielāgotas meklēšanas, kur `-1` (vai citas
> nederīgas vērtības) var nozīmēt “nav atrasts”. Kad tā atgriež `true`, vērtība ir skaitlis un to ir droši izmantot kā
> masīva/virknes indeksu.

### Priekšrocības

- Nodrošina vienkāršu tipa sargu, lai noteiktu, vai indekss ir atrasts, pārbaudot, vai tā ir nenegatīva vesela skaitļa
  vērtība.
- Atgriež `true` tikai derīgām indeksam līdzīgām vērtībām (veseliem skaitļiem `>= 0`), noraidot negatīvas vērtības,
  ne-veselus skaitļus un ne-skaitļus.
- Palīdz izvairīties no “off-by-one” un sargvērtību kļūdām, strādājot ar API, kas atgriež `-1`, lai norādītu “nav
  atrasts”.

## Lietošana

### Sintakse

Funkcija:

- `isIndexFound(value)`

Parametri:

- `value`: Vērtība, kuru pārbaudīt, vai tā ir nenegatīvs vesels skaitlis.

### Lokāls funkcijas imports

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  // idx šeit ir skaitlis un ir >= 0
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

// Tipiska lietošana ar indexOf
const pos = "hello".indexOf("e");
if (isIndexFound(pos)) {
  console.log("Found at", pos);
}
```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.isIndexFound(value)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [isIndexFound](../_analysis/isIndexFound.md)

<br>

---

<small>Fails tika izveidots 31 January 2026 at 00:46:45 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>