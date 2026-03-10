# isInteger

## Apraksts

Nosaka, vai dotā `value` ir drošs vesels skaitlis.

### Lietošanas gadījums

Validēt neuzticamu ievadi (piem., vaicājuma parametrus, JSON payloadus, vides mainīgos) pirms tās izmantošanas kā veselu
skaitli masīvu indeksiem, lapošanai, skaitītājiem vai datubāzes ID.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `isInteger`, lai validētu nezināmu ievadi pirms tās apstrādes kā skaitliska vesela skaitļa; tas atgriež
`true` tikai vērtībām, kur `typeof value === "number"` un `Number.isSafeInteger(value)`.

### Priekšrocības

- Pārbauda gan tipu, gan skaitlisko drošību: atgriež `true` tikai tad, ja ievade ir skaitlis un drošs vesels skaitlis.
- Novērš biežākās problēmas ar skaitlisko piespiedu pārveidi: virknes, piemēram, "5", pareizi atgriež `false`.
- Noraida neveselus skaitļus un nedrošus veselus skaitļus, tāpēc tas ir piemērots ID, skaitītājiem un masīvu
  indeksēšanai.

## Lietošana

### Sintakse

Funkcija:

- `isInteger(value)`

Parametri:

- `value`: Vērtība, kurai jāpārbauda vesela skaitļa statuss.

### Lokāls funkcijas imports

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // patiess
const b = isInteger(-100);   // patiess
const c = isInteger("5");    // aplams
const d = isInteger(5.5);    // aplams
const e = isInteger(null);   // aplams

```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.isInteger(value)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [isInteger](../_analysis/isInteger.md)

<br>

---

<small>Fails tika izveidots 31 January 2026 at 00:50:29 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>