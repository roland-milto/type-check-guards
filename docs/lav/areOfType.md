# areOfType

## Apraksts

Pārbauda, vai visi dotā `array` elementi ir norādītā `type`.

### Lietošanas gadījums

Izmanto `areOfType`, lai validētu nezināmu ievadi (piem., parsētu JSON, API slodzes, lietotāja ievadi) pirms veikt tipam
specifiskas darbības ar katru masīva elementu.

> **Piezīme TypeScript lietotājiem:**
>
> Tā kā `areOfType` ir tipa sargs, TypeScript sašaurina masīvu `if (areOfType(...)) {}` blokā līdz
`Array<DataTypeOf<T>>`.

### Priekšrocības

- Nodrošina TypeScript tipa sargu: kad tā atgriež `true`, ievade tiek sašaurināta līdz `Array<DataTypeOf<T>>`.
- Validē katru elementu pret pieprasīto izpildlaika tipu, neļaujot iziet cauri jaukta tipa masīviem.
- Ātri pārtrauc: atgriež `false`, tiklīdz tiek atrasts neatbilstošs elements.
- Pēc noklusējuma noraida ne-masīvus un tukšus masīvus (atkarīgs no `isFilledArray`).

## Lietošana

### Sintakse

Funkcija:

- `areOfType(array, type)`

Parametri:

- `array`: Masīvs, ko pārbaudīt.
- `type`: Tips, pret kuru pārbaudīt katru masīva elementu.

### Lokāls funkcijas imports

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values tagad ir number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // false

```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.areOfType(array, type)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>Fails tika izveidots 30 January 2026 at 17:10:17 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>