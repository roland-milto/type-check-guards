# areOctals

## Apraksts

`areOctals` nosaka, vai sniegtā vērtība ir netukšs derīgu oktālo virkņu masīvs.

### Lietošanas gadījums

Izmantojiet `areOctals`, validējot lietotāja ievadi, konfigurācijas vērtības vai API noslodzes datus, kuriem jāietver
oktālie literāļi (piem., failu atļauju režīmi kā `0o755`), un jūs vēlaties noraidīt tukšus masīvus vai jebkādus
nederīgus ierakstus, atgriežot `false`.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `areOctals`, lai pārliecinātos, ka jums ir netukšs `unknown[]`, kurā katrs ieraksts ir derīga oktāla
> virkne, pirms pārveidošanas (piem., ar `Number(...)` vai pielāgotu parsēšanu).

### Priekšrocības

- Validē, ka vērtība ir netukšs masīvs, kurā katrs elements ir oktāla virkne, atgriežot `true` tikai tad, ja visi
  elementi iztur pārbaudi.
- Ātri pārtrauc: atgriež `false`, tiklīdz tiek atrasts neoktāls elements.
- Noder kā sargs pirms oktālo virkņu parsēšanas vai pārveidošanas, lai izvairītos no izpildlaika kļūdām un
  nekonsekventas ievades apstrādes.

## Lietošana

### Sintakse

Funkcija:

- `areOctals(array)`

Parametri:

- `array`: Pārbaudāmā vērtība.

### Lokāls funkcijas imports

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  // value ir netukšs oktālo virkņu masīvs
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.areOctals(array)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [areOctals](../_analysis/areOctals.md)

<br>

---

<small>Fails tika izveidots 30 January 2026 at 14:57:08 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>