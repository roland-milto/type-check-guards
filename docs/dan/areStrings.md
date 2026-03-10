# areStrings

## Beskrivelse

`areStrings` kontrollerer, om et array er ikke-tomt, og om alle dets elementer er strenge, og returnerer kun `true` i
det tilfælde.

### Anvendelsestilfælde

Validér eksterne eller brugerleverede data (f.eks. query params, JSON-payloads, CSV-felter) for at sikre, at du har en
ikke-tom liste af strenge, før du behandler dem.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `areStrings` til at validere ukendte arrays, før du anvender logik kun for strenge; den returnerer `false` for
> tomme arrays.

### Fordele

- Sikrer, at hvert element er en streng, og afviser arrays med blandede typer ved at returnere `false`.
- Afviser tomme arrays, så `true` indikerer kun en ikke-tom liste af strenge.
- Nyttig som en hurtig runtime-guard, før du udfører streng-specifikke operationer (f.eks. `trim`, `toLowerCase`).

## Brug

### Syntaks

Funktion:

- `areStrings(value)`

Parametre:

- `value`: Expected type `string[]`.

### Lokal import af funktion

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // input er en ikke-tom string[] ved kørselstid
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.areStrings(value)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>Filen blev oprettet den 30 January 2026 at 13:17:52 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>