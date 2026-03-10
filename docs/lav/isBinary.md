# isBinary

## Apraksts

`isBinary` nosaka, vai vērtība ir bināra virkne (pēc izvēles ar prefiksu `0b`/`0B`), un atgriež `true` vai `false`.

### Lietošanas gadījums

Validēt lietotāja ievadītas virknes (piem., formas laukus, CLI argumentus, konfigurācijas vērtības), lai pārliecinātos,
ka tās attēlo tikai bināros ciparus, pēc izvēles ar `0b`/`0B` prefiksu, pirms turpmākas apstrādes.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `isBinary` kā tipa sargu pirms virknes parsēšanas vai pārveidošanas uz `BigInt`/`Number`, lai izvairītos
> no nederīga ievada.

### Priekšrocības

- Pieņem bināras virknes ar vai bez prefiksa `0b`/`0B`.
- Noraida tukšas virknes un virknes ar sākuma/beigu atstarpēm (ASCII ≤ 32).
- Atgriež `true`/`false` bez izņēmumu izmešanas, padarot to drošu nezināmiem ievaddatiem.

## Lietošana

### Sintakse

Funkcija:

- `isBinary(value)`

Parametri:

- `value`: Pārbaudāmā vērtība.

### Lokāls funkcijas imports

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); // patiess
const b = isBinary("1010");   // patiess
const c = isBinary("0b1020"); // aplams
const d = isBinary(0b1010);     // aplams

```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.isBinary(value)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [isBinary](../_analysis/isBinary.md)

<br>

---

<small>Fails tika izveidots 31 January 2026 at 23:10:29 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>