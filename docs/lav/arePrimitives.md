# arePrimitives

## Apraksts

`arePrimitives` novērtē, vai visi elementi dotajā, netukšā masīvā ir primitīvi tipi.

### Lietošanas gadījums

Validēt, ka ienākošie dati (piem., vaicājuma parametri, CSV rindas vērtības vai ID/birku saraksts) satur tikai
primitīvas vērtības pirms serializēšanas, hešošanas, žurnalēšanas vai nodošanas API, kas nedrīkst saņemt objektus.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `arePrimitives`, kad nepieciešams nodrošināt, ka `unknown[]` satur tikai primitīvas vērtības (string,
> number, bigint, boolean, symbol, undefined vai null) pirms turpmākas apstrādes.

### Priekšrocības

- Atgriež `true` tikai tad, ja katrs elements ir primitīva vērtība, padarot to par stingru sargu masīviem “bez
  objektiem/funkcijām”.
- Ātri pārtrauc pārbaudi: atgriež `false`, tiklīdz tiek atrasts neprimitīvs elements.
- Atgriež `false` arī ne-masīviem un tukšiem masīviem (izmantojot aizpildīta masīva pārbaudi), novēršot nejaušu
  nederīgas ievades pieņemšanu.

## Lietošana

### Sintakse

Funkcija:

- `arePrimitives(array)`

Parametri:

- `array`: Masīvs, kurā jāpārbauda primitīva tipa elementi.

### Lokāls funkcijas imports

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // patiess
const r2 = arePrimitives(b); // patiess
const r3 = arePrimitives(c); // aplami
```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.arePrimitives(array)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>Fails tika izveidots 31 January 2026 at 00:05:24 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>