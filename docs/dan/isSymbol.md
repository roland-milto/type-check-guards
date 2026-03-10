# isSymbol

## Beskrivelse

`isSymbol` afgør, om en given værdi er af typen `symbol`, og returnerer `true` for symboler og ellers `false`.

### Anvendelsestilfælde

Validér, at en `unknown`-værdi er et `symbol`, før du bruger den som en unik identifikator, en registreringsnøgle eller
en beregnet egenskabsnøgle i objekter og maps.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `isSymbol` til at indsnævre `unknown` til `symbol`, før du kalder symbol-relaterede funktioner eller bruger det
> som en beregnet egenskabsnøgle.

### Fordele

- Giver en enkel og pålidelig runtime-kontrol af den primitive JavaScript-type `symbol`.
- Hjælper med at indsnævre `unknown`-værdier, før der bruges symbol-specifikke API'er eller de gemmes som nøgler.
- Undgår falske positiver ved at bruge `typeof`, som er den kanoniske måde at detektere `symbol`-værdier på.

## Brug

### Syntaks

Funktion:

- `isSymbol(value)`

Parametre:

- `value`: Værdien, der skal kontrolleres.

### Lokal import af funktion

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // input er et symbol her
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.isSymbol(value)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>Filen blev oprettet den 30 January 2026 at 14:26:25 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>