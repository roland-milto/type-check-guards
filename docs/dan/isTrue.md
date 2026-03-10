# isTrue

## Beskrivelse

`isTrue` afgør, om en given værdi er strengt lig med `true`.

### Anvendelsestilfælde

Brug `isTrue` til at validere flag, feature toggles eller konfigurationsværdier, hvor kun den bogstavelige `true` skal
accepteres, og alt andet skal behandles som `false`.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `isTrue`, når du kun skal acceptere den boolske literal `true` og ikke blot truthy-værdier.

### Fordele

- Giver en streng kontrol af den boolske literal `true` (ingen typekonvertering).
- Hjælper med at skelne `true` fra truthy-værdier som `1`, `"true"` eller `{}`.
- Enkel, forudsigelig adfærd, velegnet til guards og valideringspipelines.

## Brug

### Syntaks

Funktion:

- `isTrue(value)`

Parametre:

- `value`: Værdien, der skal kontrolleres.

### Lokal import af funktion

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // sand
const b = isTrue(1);         // falsk
const c = isTrue("true");   // falsk

if (isTrue(a)) {
  // a er sand her
}
```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.isTrue(value)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [isTrue](../_analysis/isTrue.md)

<br>

---

<small>Filen blev oprettet den 30 January 2026 at 13:42:04 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>