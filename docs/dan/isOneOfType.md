# isOneOfType

## Beskrivelse

`isOneOfType` afgør, om en given `value` matcher mindst én af de angivne typestrenge, og returnerer `true`, hvis der
findes et match, ellers `false`.

### Anvendelsestilfælde

Validér løst typede eller eksterne data (f.eks. parsed JSON, query-parametre) ved at tillade flere acceptable
runtime-typer (såsom `number` eller `string`), før du fortsætter med yderligere logik.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `isOneOfType`, når du vil lave et runtime-tjek af, at en værdi matcher en af flere tilladte typer; den returnerer
`true`, hvis mindst én type matcher, ellers `false`.

### Fordele

- Kontrollerer en værdi mod flere tilladte typer i ét enkelt kald og returnerer `true` ved det første match.
- Fungerer med `unknown`-input, hvilket gør den nyttig ved runtime-grænser (f.eks. eksterne data, brugerinput).
- Simpelt boolesk resultat (`true`/`false`), der fungerer godt sammen med betinget logik og tidlige returneringer.

## Brug

### Syntaks

Funktion:

- `isOneOfType(value, types)`

Parametre:

- `value`: Værdien, der skal kontrolleres mod de angivne typer.
- `types`: Et array af typestrenge, der repræsenterer de mulige typer for værdien.

### Lokal import af funktion

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // input er et objekt ved kørselstid
}

console.log(isOneOfType(3, ["number", "string"])); // true
console.log(isOneOfType("hello", ["number", "boolean"])); // false

```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.isOneOfType(value, types)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [isOneOfType](../_analysis/isOneOfType.md)

<br>

---

<small>Filen blev oprettet den 31 January 2026 at 23:42:53 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>