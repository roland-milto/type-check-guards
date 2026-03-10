# isSet

## Beskrivelse

Afgør, om en given værdi er et `Set`.

### Anvendelsestilfælde

Validér input fra eksterne kilder (f.eks. JSON-parsing, brugerinput eller tredjeparts-API'er) for at sikre, at en værdi
er et `Set`, før du udfører `Set`-operationer.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `isSet` til at indsnævre `unknown`-værdier, før du kalder `Set`-specifikke API'er som `.add`, `.has` eller
`.size`.

### Fordele

- Giver en enkel runtime-kontrol til at bekræfte, om en værdi er et `Set`.
- Hjælper med at forhindre typefejl ved at muliggøre tidlig forgrening, når en værdi ikke er et `Set`.
- Fungerer med ethvert `Set`-indhold (tomt eller udfyldt) og returnerer konsekvent `true`/`false`.

## Brug

### Syntaks

Funktion:

- `isSet(value)`

Parametre:

- `value`: Værdien, der skal kontrolleres.

### Lokal import af funktion

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  // a er et Set ved kørselstid
  console.log(a.size);
}

console.log(isSet(b)); // false
```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.isSet(value)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [isSet](../_analysis/isSet.md)

<br>

---

<small>Filen blev oprettet den 30 January 2026 at 23:09:19 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>