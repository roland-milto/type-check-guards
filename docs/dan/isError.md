# isError

## Beskrivelse

Kontrollerer, om en given `value` er en instans af `Error`.

### Anvendelsestilfælde

Brug `isError`, når du modtager en `unknown`-værdi (såsom fra en `catch`-blok, et callback eller et eksternt bibliotek),
og du har brug for sikkert at afgøre, om det er en `Error`, før du læser `message`, `name` eller `stack`.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `isError` til at beskytte `unknown`-værdier (f.eks. fra `catch`), før du behandler dem som en `Error`.

### Fordele

- Giver en enkel runtime-kontrol af, om en værdi er en `Error`-instans.
- Hjælper med at indsnævre ukendte input, før der tilgås `Error`-egenskaber som `message` eller `stack`.
- Reducerer risikoen for runtime-undtagelser ved håndtering af værdier fra `catch`, eksterne API'er eller utypede
  kilder.

## Brug

### Syntaks

Funktion:

- `isError(value)`

Parametre:

- `value`: Værdien, der skal kontrolleres op imod typen `Error`.

### Lokal import af funktion

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.isError(value)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [isError](../_analysis/isError.md)

<br>

---

<small>Filen blev oprettet den 6 February 2026 at 12:45:08 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>