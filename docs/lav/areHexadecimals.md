# areHexadecimals

## Apraksts

Pārbauda, vai visi masīva elementi ir heksadecimālas virknes, atgriežot `true` tikai netukšiem masīviem, kuros katrs
vienums ir derīgs.

### Lietošanas gadījums

Izmantojiet `areHexadecimals`, lai validētu lietotāja ievadi vai ārējos datus (piem., ID, kontrolsummas, krāsu kodus bez
sākuma '#') pirms heksadecimālās parsēšanas vai turpmākas apstrādes.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `areHexadecimals`, lai validētu nezināmu ievadi pirms parsēšanas vai vērtību konvertēšanas (piemēram,
> pirms `parseInt(value, 16)` vai BigInt konvertēšanas).

### Priekšrocības

- Validē, ka katrs elements ir heksadecimāla virkne, un atgriež `true` tikai tad, ja visi vienumi atbilst.
- Pēc noklusējuma noraida tukšus masīvus, atgriežot `false`, ja trūkst ievaddatu.
- Nodrošina vienkāršu būla rezultātu (`true`/`false`), kas piemērots aizsargpārbaudēm un agrīnai atgriešanai validācijas
  laikā.

## Lietošana

### Sintakse

Funkcija:

- `areHexadecimals(array)`

Parametri:

- `array`: Masīvs, kurā jāpārbauda heksadecimālu virkņu elementi.

### Lokāls funkcijas imports

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.areHexadecimals(array)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>Fails tika izveidots 31 January 2026 at 23:06:53 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>