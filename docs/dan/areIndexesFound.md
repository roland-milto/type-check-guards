# areIndexesFound

## Beskrivelse

`areIndexesFound` kontrollerer, om en værdi er et ikke-tomt array, hvis elementer alle er gyldige indekser, og
returnerer `true`, hvis de er, og ellers `false`.

### Anvendelsestilfælde

Validér brugerleverede eller eksterne data (f.eks. parsed JSON), som forventes at være en liste af indekser, før du
bruger dem til at tilgå eller slice arrays.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `areIndexesFound` til at validere ukendt input, før du behandler dets elementer som array-indekser; den
> returnerer `false` for tomme arrays og for arrays, der indeholder ikke-indeks-værdier.

### Fordele

- Returnerer kun `true`, når inputtet er et udfyldt array, og hvert element er et gyldigt indeks.
- Fejler hurtigt: returnerer `false`, så snart et ikke-indeks-element stødes på.
- Nyttig som en guard, før man bruger værdier som array-positioner eller offsets.

## Brug

### Syntaks

Funktion:

- `areIndexesFound(array)`

Parametre:

- `array`: Arrayet, der skal kontrolleres for overholdelse af indeks-krav.

### Lokal import af funktion

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // sand
console.log(areIndexesFound(b)); // falsk
console.log(areIndexesFound(c)); // falsk

if (areIndexesFound(a)) {
  // Her bekræftes det, at `a` er et udfyldt array af indekser.
  const firstIndex = a[0];
  console.log(firstIndex);
}

```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.areIndexesFound(array)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>Filen blev oprettet den 31 January 2026 at 00:41:29 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>