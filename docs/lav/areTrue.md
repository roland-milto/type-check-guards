# areTrue

## Apraksts

Pārbauda, vai netukšs masīvs satur tikai loģiskās vērtības `true`.

### Lietošanas gadījums

Izmantojiet `areTrue`, lai validētu, ka priekšnosacījumu vai funkciju karodziņu kopa ir pilnībā ieslēgta (visas vērtības
ir `true`) pirms turpināšanas, vienlaikus uzskatot tukšas vai nepareizi noformētas ievades par neizpildītām (`false`).

> **Piezīme TypeScript lietotājiem:**
>
> `areTrue` atgriež `false` tukšam masīvam un masīviem, kas satur jebkuru vērtību, kura nav stingri `true`.

### Priekšrocības

- Atgriež `true` tikai tad, ja katrs elements ir stingri `true` un masīvs nav tukšs.
- Ātri pārtrauc: atgriež `false`, tiklīdz tiek atrasta vērtība, kas nav `true`.
- Noraida nederīgas ievades (ne masīvus vai tukšus masīvus), atgriežot `false`.

## Lietošana

### Sintakse

Funkcija:

- `areTrue(array)`

Parametri:

- `array`: Masīvs, kurā pārbaudīt, vai visas vērtības ir `true`.

### Lokāls funkcijas imports

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.areTrue(array)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [areTrue](../_analysis/areTrue.md)

<br>

---

<small>Fails tika izveidots 30 January 2026 at 13:51:49 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>