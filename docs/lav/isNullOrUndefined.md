# isNullOrUndefined

## Apraksts

Pārbauda, vai dotā vērtība ir `null` vai `undefined`.

### Lietošanas gadījums

Izmantojiet `isNullOrUndefined`, kad nepieciešams gan `null`, gan `undefined` uzskatīt par “nav vērtības”, piemēram,
validējot izvēles ievades, normalizējot API slodzes datus vai sargājot koda ceļus pirms atsauces uz potenciāli trūkstošu
vērtību.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `isNullOrUndefined`, lai pasargātos no trūkstošām vērtībām pirms īpašību piekļuves vai metožu izsaukšanas;
> tā atgriež `true` tikai `null` un `undefined` gadījumā.

### Priekšrocības

- Nodrošina skaidru, atkārtoti izmantojamu sargu, lai vienuviet noteiktu `null` un `undefined`.
- Atgriež vienkāršu būla vērtību (`true`/`false`), ko ir viegli kombinēt nosacījumos un validācijās.
- Palīdz izvairīties no biežām izpildlaika kļūdām, pārbaudot trūkstošas vērtības pirms īpašību piekļuves vai metožu
  izsaukšanas.

## Lietošana

### Sintakse

Funkcija:

- `isNullOrUndefined(value)`

Parametri:

- `value`: Vērtība, kas jāpārbauda attiecībā uz `null` vai `undefined`.

### Lokāls funkcijas imports

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // apstrādāt trūkstošo vērtību
}

console.log(isNullOrUndefined(b)); // patiess
console.log(isNullOrUndefined(c)); // aplams

```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.isNullOrUndefined(value)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>Fails tika izveidots 31 January 2026 at 00:34:22 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>