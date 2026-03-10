# areFalse

## Apraksts

`areFalse` pārbauda, vai visi sniegtā masīva elementi ir stingri būla vērtība `false`.

### Lietošanas gadījums

Validēt, ka funkciju karodziņu, pārbaužu vai sargu rezultātu saraksts pirms turpināšanas ir viss `false` (piem.,
apstiprināt, ka nav bloķējošu nosacījumu).

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `areFalse`, kad nepieciešama stingra validācija, ka masīvs nav tukšs un satur tikai būla vērtību `false`.

### Priekšrocības

- Nodrošina, ka katrs elements ir stingri `false` (bez truthy/falsey piespiedu pārveidošanas).
- Atgriež `false` ne-masīviem vai tukšiem masīviem, pieprasot aizpildītu masīvu, izmantojot `isFilledArray`.
- Efektivitātes nolūkos apstājas agrāk pie pirmā ne-`false` elementa.

## Lietošana

### Sintakse

Funkcija:

- `areFalse(array)`

Parametri:

- `array`: Masīvs, ko pārbaudīt, kas satur jebkura tipa elementus.

### Lokāls funkcijas imports

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // patiess
const b = areFalse([false, true, false]);  // aplams
const c = areFalse([false, "false", false]); // aplams
const d = areFalse([]); // aplams
```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.areFalse(array)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>Fails tika izveidots 31 January 2026 at 16:17:42 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>