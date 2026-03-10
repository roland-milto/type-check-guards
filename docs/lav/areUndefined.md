# areUndefined

## Apraksts

`areUndefined` pārbauda, vai katrs elements dotajā masīvā ir `undefined`.

### Lietošanas gadījums

Validēt, ka izvēles rezultātu saraksts nesatur nekādas faktiskas vērtības (tikai `undefined`), piem., pēc meklējumu
mapēšanas, kur trūkstošie ieraksti tiek attēloti kā `undefined`, un vēlaties apstiprināt, ka visi meklējumi neizdevās.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `areUndefined`, kad nepieciešams apgalvot, ka `unknown[]` satur tikai `undefined` vērtības; tā atgriež
`false` tukšiem masīviem un ne-masīva/nederīgām ievadēm iekšējās `isFilledArray` pārbaudes dēļ.

### Priekšrocības

- Atgriež `false` ne-masīviem un tukšiem masīviem, jo, izmantojot `isFilledArray`, tiek prasīts aizpildīts masīvs.
- Nodrošina, ka katrs elements ir `undefined`, nevis tikai daži, tādējādi skaidri paužot nolūku.
- Noder kā sarga tipa predikāts, validējot nezināmas ievades kolekcijas.

## Lietošana

### Sintakse

Funkcija:

- `areUndefined(array)`

Parametri:

- `array`: Masīvs, kurā pārbaudīt `undefined` elementus.

### Lokāls funkcijas imports

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // true
const r2 = areUndefined(b); // false
const r3 = areUndefined(c); // false

// Piezīme: tukšiem masīviem atgriež false
const r4 = areUndefined([]); // false

```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.areUndefined(array)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>Fails tika izveidots 30 January 2026 at 13:56:39 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>