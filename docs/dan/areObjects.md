# areObjects

## Beskrivelse

`areObjects` kontrollerer, om et angivet udfyldt array kun indeholder objekter.

### Anvendelsestilfælde

Brug `areObjects`, når du modtager et ukendt array (f.eks. fra JSON-parsing eller eksterne API'er) og skal sikre, at det
ikke er tomt, og at hvert element er et objekt, før du itererer og tilgår objektegenskaber.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `areObjects` til at validere `unknown[]`, før du behandler elementer som objekter; den returnerer `false` for
> tomme arrays.

### Fordele

- Returnerer kun `true`, når inputtet er et udfyldt array, og hvert element er et objekt.
- Stopper tidligt og returnerer `false`, så snart et ikke-objekt-element findes.
- Hjælper med at validere ukendt input, før der udføres objektspecifikke operationer.

## Brug

### Syntaks

Funktion:

- `areObjects(array)`

Parametre:

- `array`: Arrayet, der skal kontrolleres for objektelementer.

### Lokal import af funktion

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value er et udfyldt array af objekter
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.areObjects(array)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [areObjects](../_analysis/areObjects.md)

<br>

---

<small>Filen blev oprettet den 31 January 2026 at 00:08:22 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>