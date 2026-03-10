# isIndexFound

## Beskrivelse

`isIndexFound` afgør, om en given værdi er et ikke-negativt heltal, hvilket indikerer, at et indeks er fundet.

### Anvendelsestilfælde

Validér, at et søgeresultat repræsenterer et brugbart indeks (heltal `>= 0`), før der indekseres i et array eller en
streng, så utilsigtet brug af `-1` eller ikke-numeriske værdier undgås.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `isIndexFound` efter operationer som `indexOf`, `findIndex` eller brugerdefinerede søgninger, hvor `-1` (eller
> andre ugyldige værdier) kan indikere “ikke fundet”. Når den returnerer `true`, er værdien et tal og sikker at bruge
> som
> et array-/strengindeks.

### Fordele

- Giver en enkel type guard til at registrere, om et indeks blev fundet, ved at tjekke for et ikke-negativt heltal.
- Returnerer kun `true` for gyldige indeks-lignende værdier (heltal `>= 0`) og afviser negative tal, ikke-heltal og
  ikke-tal.
- Hjælper med at undgå off-by-one- og sentinel-værdi-fejl, når man arbejder med API'er, der returnerer `-1` for “ikke
  fundet”.

## Brug

### Syntaks

Funktion:

- `isIndexFound(value)`

Parametre:

- `value`: Værdien, der skal kontrolleres for at være et ikke-negativt heltal.

### Lokal import af funktion

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  // idx er et tal her og er >= 0
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

// Typisk brug med indexOf
const pos = "hello".indexOf("e");
if (isIndexFound(pos)) {
  console.log("Found at", pos);
}
```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.isIndexFound(value)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [isIndexFound](../_analysis/isIndexFound.md)

<br>

---

<small>Filen blev oprettet den 31 January 2026 at 00:45:26 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>