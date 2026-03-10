# arePlainObjects

## Beskrivelse

Kontrollerer, om alle elementer i et array er almindelige objekter, og returnerer kun `true`, hvis hvert element
kvalificerer.

### Anvendelsestilfælde

Validér eksterne eller utypede data (f.eks. parsed JSON, API-payloads, formularindsendelser) for at sikre, at du har
modtaget et ikke-tomt array, hvor hver post er et almindeligt objekt, før du itererer og læser egenskaber.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `arePlainObjects` til at validere ukendt input, før du behandler det som `Record<string, unknown>[]` (eller en
> strengere objektform) i TypeScript.

### Fordele

- Sikrer, at hvert element i input-arrayet er et almindeligt objekt, og returnerer kun `true`, når alle elementer
  matcher.
- Afviser ugyldige input tidligt (ikke-arrays eller tomme arrays) ved at returnere `false`.
- Behandler både objekt-literal-objekter og `Object.create(null)`-objekter som gyldige almindelige objekter.

## Brug

### Syntaks

Funktion:

- `arePlainObjects(array)`

Parametre:

- `array`: Arrayet, der skal kontrolleres for almindelige objekt-elementer.

### Lokal import af funktion

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // sand
const b = arePlainObjects([{}, Object.create(null)]); // sand
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // falsk
const d = arePlainObjects([] as unknown[]); // falsk
```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.arePlainObjects(array)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>Filen blev oprettet den 30 January 2026 at 16:24:51 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>