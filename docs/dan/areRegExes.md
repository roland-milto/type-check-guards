# areRegExes

## Beskrivelse

`areRegExes` kontrollerer, om en værdi er et udfyldt array, der kun indeholder `RegExp`-objekter.

### Anvendelsestilfælde

Validér, at en konfigurationsindstilling (f.eks. en liste over tillad/afvis-mønstre) er et ikke-tomt array af regulære
udtryk, før den bruges til matchning.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `areRegExes` til at indsnævre `unknown` til `RegExp[]` før iteration eller sammensætning af mønstre.

### Fordele

- Sikrer, at en værdi er et ikke-tomt array, hvor hvert element er en `RegExp`-instans.
- Giver en enkel boolesk vagt (`true`/`false`) til validering af brugerinput eller konfiguration.
- Hjælper med at forhindre runtime-fejl, når senere kode antager, at alle elementer understøtter
  regulærudtryksoperationer.

## Brug

### Syntaks

Funktion:

- `areRegExes(array)`

Parametre:

- `array`: Værdien, der skal kontrolleres.

### Lokal import af funktion

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // patterns er et array af RegExp her
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.areRegExes(array)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>Filen blev oprettet den 30 January 2026 at 23:17:31 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>