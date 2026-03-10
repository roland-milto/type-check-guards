# areSets

## Apraksts

Pārbauda, vai dotais netukšais masīvs satur tikai `Set` instances, atgriežot `true`, ja tā ir, un `false` pretējā
gadījumā.

### Lietošanas gadījums

Validēt, ka vērtība (piem., no lietotāja ievades, JSON parsēšanas vai ārējiem API) ir netukšs `Set` objektu masīvs pirms
katras kopas apstrādes.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `areSets`, lai validētu nezināmu ievadi pirms iterēšanas un `Set` API (piem., `.size`, `.has`, `.add`)
> izsaukšanas katram elementam.

### Priekšrocības

- Atgriež `true` tikai tad, ja ievade ir netukšs masīvs un katrs elements ir `Set` instances.
- Novērš kļūdaini pozitīvus rezultātus tukšiem masīviem, atgriežot `false`, ja masīvā nav elementu.
- Noder kā izpildlaika sargs pirms `Set`-specifisku darbību veikšanas ar katru elementu.

## Lietošana

### Sintakse

Funkcija:

- `areSets(array)`

Parametri:

- `array`: Masīvs, kas jāpārbauda attiecībā uz `Set` instancēm.

### Lokāls funkcijas imports

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // a ir Set instanču masīvs izpildlaikā
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // aplams
console.log(areSets(c)); // aplams
```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.areSets(array)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [areSets](../_analysis/areSets.md)

<br>

---

<small>Fails tika izveidots 30 January 2026 at 23:14:13 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>