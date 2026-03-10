# areArrays

## Apraksts

`areArrays` nosaka, vai vērtība ir aizpildīts divdimensiju masīvs, kura vienumi visi ir masīvi.

### Lietošanas gadījums

Izmantojiet `areArrays`, lai validētu tabulāras vai matricai līdzīgas ievades (piem., CSV rindas, režģa datus vai
grupētus sarakstus) pirms rindu/kolonnu darbību veikšanas; tā atgriež `false`, ja ievade nav masīvs, ir tukša vai satur
jebkuru elementu, kas nav masīvs.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `areArrays`, kad nepieciešams nodrošināt, ka vērtība ir netukšs 2D masīvs un ka katra rinda ir masīvs,
> pirms iterēšanas vai indeksēšanas ligzdotos masīvos.

### Priekšrocības

- Validē, ka ievade ir netukšs divdimensiju masīvs, kurā katrs elements ir masīvs.
- Atgriež vienkāršu būla rezultātu (`true`/`false`), kas piemērots sargiem un agrīnai iziešanai.
- Palīdz novērst izpildlaika kļūdas, kad vēlāk kods pieņem ligzdotu masīvu darbības (piem., rindu mapēšanu).

## Lietošana

### Sintakse

Funkcija:

- `areArrays(array)`

Parametri:

- `array`: Ievade, kas jāpārbauda.

### Lokāls funkcijas imports

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  // value ir 2D masīvs ar masīviem kā elementiem
  const lengths = value.map(row => row.length);
  console.log(lengths);
} else {
  console.log("Not a 2D array of arrays");
}

```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.areArrays(array)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [areArrays](../_analysis/areArrays.md)

<br>

---

<small>Fails tika izveidots 6 February 2026 at 13:40:19 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>