# areJson

## Apraksts

Pārbauda, vai visi masīva elementi ir JSON virknes, atgriežot `true` tikai tad, ja masīvs ir aizpildīts un katrs vienums
ir derīgs JSON; pretējā gadījumā atgriež `false`.

### Lietošanas gadījums

Validēt ienākošos datus (piem., no vaicājuma parametriem, vides mainīgajiem vai ārējām API), kad sagaidāt JSON kodētu
virkņu masīvu un vēlaties noraidīt tukšus masīvus vai jebkādus ierakstus, kas nav JSON.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `areJson`, kad nepieciešams validēt, ka `unknown[]` satur tikai JSON virknes pirms to parsēšanas (piem.,
> ar `JSON.parse`).

### Priekšrocības

- Atgriež `true` tikai tad, ja katrs elements ir derīga JSON virkne; pretējā gadījumā atgriež `false`.
- Ātri pārtrauc pārbaudi: pārstāj pārbaudīt, tiklīdz tiek atrasts elements, kas nav JSON.
- Pēc noklusējuma noraida tukšus masīvus, atgriežot `false` neaizpildītai ievadei.

## Lietošana

### Sintakse

Funkcija:

- `areJson(array)`

Parametri:

- `array`: Masīvs, kurā jāpārbauda JSON virkņu elementi.

### Lokāls funkcijas imports

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // patiess
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // aplams
const empty = areJson([]); // aplams

```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.areJson(array)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [areJson](../_analysis/areJson.md)

<br>

---

<small>Fails tika izveidots 30 January 2026 at 16:16:33 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>