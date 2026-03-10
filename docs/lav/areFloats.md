# areFloats

## Apraksts

`areFloats` pārbauda, vai dotais masīvs ir aizpildīts un visi tā elementi ir peldošā komata skaitļi.

### Lietošanas gadījums

Izmanto `areFloats`, kad saņem `unknown[]` (piem., no JSON, vaicājuma parametriem vai ārējām API) un tev jānodrošina, ka
tas ir aizpildīts masīvs, kurā katrs vienums ir peldošā komata skaitlis, pirms palaist skaitlisku loģiku, piemēram,
vidējās vērtības aprēķinu, interpolāciju vai statistiskus aprēķinus.

> **Piezīme TypeScript lietotājiem:**
>
> Izmanto `areFloats`, lai sargātu `unknown[]` pirms to apstrādā kā `number[]`, kas satur tikai peldošā komata skaitļus;
> tā atgriež `false` tukšiem masīviem un jebkuram elementam, kas nav peldošā komata skaitlis.

### Priekšrocības

- Atgriež `true` tikai tad, ja ievade ir netukšs masīvs un katrs elements ir peldošā komata skaitlis.
- Ātri pārtrauc pārbaudi: atgriež `false`, tiklīdz tiek atrasts elements, kas nav peldošā komata skaitlis.
- Palīdz validēt nezināmu ievadi pirms peldošā komata skaitļiem specifisku aprēķinu veikšanas.

## Lietošana

### Sintakse

Funkcija:

- `areFloats(array)`

Parametri:

- `array`: Masīvs, kurā jāpārbauda peldošā komata skaitļu elementi.

### Lokāls funkcijas imports

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // patiess
console.log(areFloats(b)); // aplams
console.log(areFloats(c)); // aplams

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null
```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.areFloats(array)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>Fails tika izveidots 30 January 2026 at 15:58:18 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>