# areBinaries

## Apraksts

Pārbauda, vai norādītā vērtība ir netukšs derīgu bināru virkņu masīvs, un atgriež `true` tikai tad, ja visi elementi
iztur validāciju.

### Lietošanas gadījums

Izmantojiet `areBinaries`, kad saņemat nezināmu sarakstu (piem., no JSON, veidlapām vai API) un jums jānodrošina, ka tas
ir netukšs bināro virkņu masīvs pirms tā parsēšanas vai apstrādes.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `areBinaries`, lai validētu nezināmu ievadi pirms bināro virkņu pārveidošanas par skaitļiem/BigInt; tas
> nodrošina, ka masīvs nav tukšs un katrs elements ir derīga bināra virkne.

### Priekšrocības

- Validē, ka vērtība ir netukšs masīvs, kurā katrs elements ir derīga bināra virkne.
- Atgriež vienkāršu būla rezultātu (`true`/`false`), kas piemērots sargiem, agrīnai atgriešanai un ievades validācijai.
- Novērš turpmākas parsēšanas kļūdas, noraidot masīvus, kuros ir jebkurš nebinārs ieraksts.

## Lietošana

### Sintakse

Funkcija:

- `areBinaries(array)`

Parametri:

- `array`: Pārbaudāmā vērtība.

### Lokāls funkcijas imports

```ts
import { areBinaries } from "@type-check/guards";

const a = ["0b1010", "1101"];
const b = ["1010", "1020"];

console.log(areBinaries(a)); // patiess
console.log(areBinaries(b)); // aplams
console.log(areBinaries([])); // aplams
```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.areBinaries(array)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [areBinaries](../_analysis/areBinaries.md)

<br>

---

<small>Fails tika izveidots 31 January 2026 at 23:15:08 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>