# areFalse

## Beskrivelse

`areFalse` kontrollerer, om alle elementer i et givet array er strengt den boolske værdi `false`.

### Anvendelsestilfælde

Validér, at en liste af feature flags, checks eller guard-resultater alle er `false`, før du fortsætter (f.eks. bekræft,
at der ikke er nogen blokerende betingelser).

> **Bemærkning til TypeScript-brugere:**
>
> Brug `areFalse`, når du har brug for en streng validering af, at et array ikke er tomt og kun indeholder den boolske
> værdi `false`.

### Fordele

- Sikrer, at hvert element er strengt `false` (ingen truthy/falsey-konvertering).
- Returnerer `false` for ikke-arrays eller tomme arrays ved at kræve et udfyldt array via `isFilledArray`.
- Stopper tidligt ved det første ikke-`false` element for effektivitet.

## Brug

### Syntaks

Funktion:

- `areFalse(array)`

Parametre:

- `array`: Det array, der skal kontrolleres, som indeholder elementer af enhver type.

### Lokal import af funktion

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // sand
const b = areFalse([false, true, false]);  // falsk
const c = areFalse([false, "false", false]); // falsk
const d = areFalse([]); // falsk
```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.areFalse(array)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>Filen blev oprettet den 31 January 2026 at 16:16:42 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>