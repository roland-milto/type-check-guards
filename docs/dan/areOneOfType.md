# areOneOfType

## Beskrivelse

`areOneOfType` kontrollerer, om alle elementer i et ikke-tomt array er af en af de angivne runtime-typer.

### Anvendelsestilfælde

Validér indkommende data (f.eks. parsed JSON), hvor et felt skal være et ikke-tomt array, hvis elementer er begrænset
til et kendt sæt af primitive typer; returnér `false`, når arrayet er tomt eller indeholder en ikke-tilladt type.

> **Bemærkning til TypeScript-brugere:**
>
> Denne funktion returnerer en boolean og indsnævrer ikke array-elementtyperne ved compile time; brug den som et
> runtime-valideringstrin før videre behandling.

### Fordele

- Sikrer, at hvert element i et array matcher mindst én tilladt runtime-type, og returnerer kun `true`, når hele arrayet
  består testen.
- Afviser ugyldige input tidligt: returnerer `false`, når `array` eller `types` er tomt eller ikke er et udfyldt array.
- Nyttig til validering af samlinger med blandede typer (f.eks. tal og strenge) med ét enkelt kald til `areOneOfType`.

## Brug

### Syntaks

Funktion:

- `areOneOfType(array, types)`

Parametre:

- `array`: Et array af elementer, der skal verificeres mod de angivne typer.
- `types`: Et array af strenge, der repræsenterer de datatyper, der skal kontrolleres imod.

### Lokal import af funktion

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.areOneOfType(array, types)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>Filen blev oprettet den 31 January 2026 at 23:36:29 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>