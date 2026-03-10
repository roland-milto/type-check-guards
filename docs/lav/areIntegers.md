# areIntegers

## Apraksts

`areIntegers` nosaka, vai visi dotā masīva elementi ir veseli skaitļi, atgriežot `true`, ja tā ir, un `false` pretējā
gadījumā.

### Lietošanas gadījums

Izmantojiet `areIntegers`, lai validētu lietotāja ievadītus vai ārējus datus (piem., vaicājuma parametrus, JSON
payloadus, CSV rindas), ja jūsu loģikai ir nepieciešams aizpildīts veselu skaitļu saraksts, piemēram, ID, skaitītāji,
lapošanas nobīdes vai masīvu indeksi.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `areIntegers` kā izpildlaika sargu `unknown[]` ievadēm, pirms tās apstrādājat kā `number[]`, kas satur
> tikai veselus skaitļus. Ja tā atgriež `false`, ievade vai nu nav aizpildīts masīvs, vai arī satur vismaz vienu
> vērtību,
> kas nav vesels skaitlis.

### Priekšrocības

- Atgriež `true` tikai tad, ja katrs elements ir vesels skaitlis; pretējā gadījumā atgriež `false`.
- Palīdz validēt nezināmu ievadi pirms veikt darbības, kas paredzētas tikai veseliem skaitļiem (piem., indeksēšana,
  skaitīšana, ID).
- Ātri pārtrauc pārbaudi: pārstāj pārbaudīt, tiklīdz tiek atrasts elements, kas nav vesels skaitlis.

## Lietošana

### Sintakse

Funkcija:

- `areIntegers(array)`

Parametri:

- `array`: Masīvs, kurā jāpārbauda, vai elementi ir veseli skaitļi.

### Lokāls funkcijas imports

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // patiess
console.log(areIntegers(b)); // patiess
console.log(areIntegers(c)); // aplams

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));
```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.areIntegers(array)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>Fails tika izveidots 31 January 2026 at 00:59:18 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>