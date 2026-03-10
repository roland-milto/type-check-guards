# arePlainObjects

## Apraksts

Pārbauda, vai visi masīva elementi ir vienkārši objekti, atgriežot `true` tikai tad, ja katrs elements atbilst prasībām.

### Lietošanas gadījums

Validējiet ārējus vai netipētus datus (piem., parsētu JSON, API pieprasījumu slodzes, veidlapu iesniegumus), lai
pārliecinātos, ka saņēmāt netukšu masīvu, kurā katrs ieraksts ir vienkāršs objekts, pirms iterēšanas un īpašību
nolasīšanas.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `arePlainObjects`, lai validētu nezināmu ievadi pirms tās apstrādes kā `Record<string, unknown>[]` (vai
> stingrākas objekta formas) TypeScript vidē.

### Priekšrocības

- Nodrošina, ka katrs ievades masīva elements ir vienkāršs objekts, atgriežot `true` tikai tad, ja visi vienumi atbilst.
- Agrīni noraida nederīgas ievades (ne masīvus vai tukšus masīvus), atgriežot `false`.
- Par derīgiem vienkāršiem objektiem uzskata gan objektu literāļus, gan `Object.create(null)` objektus.

## Lietošana

### Sintakse

Funkcija:

- `arePlainObjects(array)`

Parametri:

- `array`: Masīvs, kurā jāpārbauda vienkāršu objektu elementi.

### Lokāls funkcijas imports

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // patiess
const b = arePlainObjects([{}, Object.create(null)]); // patiess
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // aplams
const d = arePlainObjects([] as unknown[]); // aplams
```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.arePlainObjects(array)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>Fails tika izveidots 30 January 2026 at 16:54:34 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>