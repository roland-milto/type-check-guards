# arePromises

## Apraksts

`arePromises` nosaka, vai visi masīva elementi ir `Promise` instances.

### Lietošanas gadījums

Validēt, ka dinamiski izveidots vai ārēji nodrošināts saraksts satur tikai solījumus, pirms tos apkopot (piem., ar
`Promise.all`).

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `arePromises`, lai validētu `unknown[]` pirms `Promise.all` vai citu tikai solījumiem paredzētu operāciju
> izsaukšanas; tas atgriež `false` tukšiem masīviem.

### Priekšrocības

- Nodrošina, ka katrs elements ir `Promise`, pirms turpināt ar solījumiem specifisku loģiku.
- Atgriež `false` neaizpildītiem masīviem, novēršot divdomīgus rezultātus tukšām ievadēm.
- Noder kā izpildlaika sargs, strādājot ar `unknown[]` no ārējiem avotiem.

## Lietošana

### Sintakse

Funkcija:

- `arePromises(array)`

Parametri:

- `array`: Masīvs, kurā pārbaudīt `Promise` instanču esamību.

### Lokāls funkcijas imports

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values izpildlaikā ir Promise instanču masīvs
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.arePromises(array)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>Fails tika izveidots 30 January 2026 at 23:49:02 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>