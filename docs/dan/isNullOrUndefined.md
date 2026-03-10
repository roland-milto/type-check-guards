# isNullOrUndefined

## Beskrivelse

Tjekker om en given værdi er `null` eller `undefined`.

### Anvendelsestilfælde

Brug `isNullOrUndefined`, når du har brug for at behandle både `null` og `undefined` som “ingen værdi”, f.eks. ved
validering af valgfrie input, normalisering af API-payloads eller beskyttelse af kodeveje før dereferering af en
potentielt manglende værdi.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `isNullOrUndefined` til at beskytte mod manglende værdier, før du tilgår egenskaber eller kalder metoder; den
> returnerer kun `true` for `null` og `undefined`.

### Fordele

- Giver en klar, genanvendelig guard til at registrere `null` og `undefined` ét sted.
- Returnerer en simpel boolesk værdi (`true`/`false`), som er nem at kombinere i betingelser og valideringer.
- Hjælper med at undgå almindelige runtime-fejl ved at tjekke for manglende værdier, før der tilgås egenskaber eller
  kaldes metoder.

## Brug

### Syntaks

Funktion:

- `isNullOrUndefined(value)`

Parametre:

- `value`: Værdien, der skal kontrolleres for `null` eller `undefined`.

### Lokal import af funktion

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // håndter manglende værdi
}

console.log(isNullOrUndefined(b)); // sand
console.log(isNullOrUndefined(c)); // falsk

```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.isNullOrUndefined(value)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>Filen blev oprettet den 31 January 2026 at 00:33:25 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>