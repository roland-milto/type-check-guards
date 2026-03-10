# isPlainObject

## Beskrivelse

Kontrollerer, om en given `value` er et almindeligt objekt og returnerer `true`, hvis den er det, ellers `false`.

### Anvendelsestilfælde

Validér, at et `unknown` input (f.eks. parsed JSON, eksterne data eller funktionsargumenter) er et almindeligt objekt,
før der læses nøgler, eller det mappes til et typet konfigurationsobjekt.

> **Bemærkning til TypeScript-brugere:**
>
> `isPlainObject` er nyttig til at indsnævre `unknown`, før det behandles som et record-lignende objekt; den returnerer
> kun `true` for værdier, hvis interne tag er `[object Object]`.

### Fordele

- Giver en enkel og pålidelig kontrol af, om en værdi er et almindeligt objekt (dvs. `Object` / `{}`), og returnerer
  `true` eller `false`.
- Hjælper med at skelne almindelige objekter fra arrays, funktioner, `null` og andre ikke-almindelige objekttyper.
- Nyttig som en type guard i TypeScript til at indsnævre `unknown`-værdier, før der tilgås objektegenskaber.

## Brug

### Syntaks

Funktion:

- `isPlainObject(value)`

Parametre:

- `value`: Værdien, der skal testes for status som almindeligt objekt.

### Lokal import af funktion

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // input er et almindeligt objekt her
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // sand
console.log(isPlainObject([])); // falsk
console.log(isPlainObject(null)); // falsk
```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.isPlainObject(value)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>Filen blev oprettet den 6 February 2026 at 12:17:06 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>