# areMaps

## Apraksts

`areMaps` nosaka, vai dotais masīvs nav tukšs un vai visi tā elementi ir `Map` instances.

### Lietošanas gadījums

Validēt nezināmu ievadi (piem., no JSON parsēšanas, ārējiem API vai dinamiskiem avotiem) pirms to apstrādāt kā netukšu
`Map` objektu sarakstu.

> **Piezīme TypeScript lietotājiem:**
>
> Atgriež `false` tukšam masīvam; `true` tiek atgriezts tikai tad, ja masīvs ir aizpildīts un katrs elements ir `Map`.

### Priekšrocības

- Nodrošina, ka katrs elements ir `Map` instances, atgriežot `true` tikai tad, ja pārbaudi iztur viss masīvs.
- Pēc būtības noraida tukšus masīvus, novēršot nejaušu “nav datu” pieņemšanu kā derīgu ievadi.
- Noder kā sargs pirms `Map`-specifisku darbību veikšanas (piem., `.get()`, `.set()`, iterēšana) visā kolekcijā.

## Lietošana

### Sintakse

Funkcija:

- `areMaps(array)`

Parametri:

- `array`: Masīvs, ko pārbaudīt.

### Lokāls funkcijas imports

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  // items izpildlaikā ir garantēti netukšs Map instanču masīvs
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // false: tukšiem masīviem vai masīviem, kas satur jebkuru vērtību, kas nav Map
}

```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.areMaps(array)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [areMaps](../_analysis/areMaps.md)

<br>

---

<small>Fails tika izveidots 31 January 2026 at 16:13:21 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>