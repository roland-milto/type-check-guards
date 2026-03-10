# isNull

## Apraksts

Nosaka, vai norādītā `value` ir `null`.

### Lietošanas gadījums

Izmantojiet `isNull`, lai validētu ievades datus vai API pieprasījumu laukus, kuros `null` ir nozīmīga signālvērtība un
tā jāapstrādā citādi nekā `undefined` vai citas vērtības.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `isNull`, kad nepieciešams atšķirt `null` no `undefined` un citām “falsy” vērtībām; tā atgriež `true`
> tikai `null` gadījumā.

### Priekšrocības

- Nodrošina precīzu pārbaudi `null` vērtībai, nejaucot to ar `undefined`.
- Darbojas uzticami jebkuram ievades tipam, jo pieņem `unknown`.
- Vienkārša, ātra un bez blakusparādībām; atgriež tikai `true` vai `false`.

## Lietošana

### Sintakse

Funkcija:

- `isNull(value)`

Parametri:

- `value`: Vērtība, kuru pārbaudīt uz `null`.

### Lokāls funkcijas imports

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // patiess
console.log(isNull(b)); // aplams

if (isNull(a)) {
  // a šeit ir null
}
```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.isNull(value)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [isNull](../_analysis/isNull.md)

<br>

---

<small>Fails tika izveidots 31 January 2026 at 15:39:52 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>