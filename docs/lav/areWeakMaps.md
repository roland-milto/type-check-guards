# areWeakMaps

## Apraksts

`areWeakMaps` pārbauda, vai vērtība ir netukšs masīvs, kurā katrs elements ir `WeakMap`, atgriežot `true` tikai šajā
gadījumā un citādi `false`.

### Lietošanas gadījums

Validēt izpildlaika datus (piem., parsētu JSON, spraudņu ievades vai brīvi tipizētu konfigurāciju), lai pārliecinātos,
ka tas ir netukšs `WeakMap` instanču masīvs pirms iterēšanas un `WeakMap` metožu izsaukšanas; atgriež `false`, ja kāds
elements nav `WeakMap` vai ja masīvs ir tukšs.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `areWeakMaps`, lai validētu nezināmu ievadi pirms tās apstrādes kā netukša `WeakMap[]`; tukšiem masīviem
> tā atgriež `false`.

### Priekšrocības

- Nodrošina, ka katrs elements norādītajā masīvā ir `WeakMap` instances.
- Tukšiem masīviem atgriež `false`, novēršot nejaušu “nav datu” pieņemšanu kā derīgu ievadi.
- Noder kā aizsargpārbaude pirms `WeakMap` specifisku darbību veikšanas ar visiem elementiem.

## Lietošana

### Sintakse

Funkcija:

- `areWeakMaps(array)`

Parametri:

- `array`: Masīvs, kurā jāpārbauda `WeakMap` instances.

### Lokāls funkcijas imports

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // list ir nepusts WeakMap instanču masīvs
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // nav nepusts WeakMap[]
}

```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.areWeakMaps(array)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>Fails tika izveidots 30 January 2026 at 13:38:07 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>