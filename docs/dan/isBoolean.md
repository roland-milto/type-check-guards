# isBoolean

## Beskrivelse

Afgør, om en given værdi er en `boolean`.

### Anvendelsestilfælde

Validér eksterne eller utypede data (f.eks. miljøvariabler, JSON-payloads, query-parametre) for at sikre, at en værdi er
en `boolean`, før den bruges i betinget logik.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `isBoolean` til at indsnævre `unknown` til `boolean`, før du anvender boolean-operationer.

### Fordele

- Simpel og hurtig runtime-tjek ved hjælp af `typeof`.
- Hjælper med at validere ukendt input før boolean-specifik logik.
- Returnerer et forudsigeligt `boolean`-resultat (`true`/`false`).

## Brug

### Syntaks

Funktion:

- `isBoolean(value)`

Parametre:

- `value`: Værdien, der skal kontrolleres.

### Lokal import af funktion

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // input er en boolsk værdi her
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.isBoolean(value)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>Filen blev oprettet den 30 January 2026 at 14:36:05 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>