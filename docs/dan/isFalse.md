# isFalse

## Beskrivelse

`isFalse` kontrollerer, om en given værdi er strengt lig med den boolske literal `false`.

### Anvendelsestilfælde

Validér ukendte data (f.eks. fra JSON, query-parametre eller brugerinput), hvor kun den eksplicitte boolske værdi
`false` skal behandles som et gyldigt flag, og alt andet skal afvises.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `isFalse`, når du kun skal acceptere literal `false` og afvise alle andre falsy-værdier; den returnerer kun
`true` for `value === false`.

### Fordele

- Giver en streng kontrol af den boolske literal `false` uden typekonvertering.
- Hjælper med at skelne `false` fra andre falsy-værdier som `0`, `""`, `null` og `undefined`.
- Forbedrer læsbarheden ved at gøre hensigten eksplicit, når ukendt input valideres.

## Brug

### Syntaks

Funktion:

- `isFalse(value)`

Parametre:

- `value`: Værdien, der skal kontrolleres.

### Lokal import af funktion

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // input er præcis false her
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.isFalse(value)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [isFalse](../_analysis/isFalse.md)

<br>

---

<small>Filen blev oprettet den 31 January 2026 at 16:21:18 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>