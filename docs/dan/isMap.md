# isMap

## Beskrivelse

Kontrollerer, om den givne `value` er en `Map`, og returnerer `true`, hvis den er, og ellers `false`.

### Anvendelsestilfælde

Brug `isMap`, når du modtager en `unknown` værdi (f.eks. fra JSON-parsing, eksterne API'er eller brugerinput) og skal
sikre, at den er en `Map`, før du udfører `Map`-operationer.

> **Bemærkning til TypeScript-brugere:**
>
> `isMap` er en runtime-guard, der returnerer `true`, når værdien er en `Map`, og ellers `false`; brug den til at
> indsnævre `unknown`, før du kalder `Map`-API'er.

### Fordele

- Giver en hurtig runtime-kontrol af, om en værdi er en `Map`.
- Hjælper med at forhindre typefejl ved at beskytte kodeveje, der kræver `Map`-metoder som `get`, `set` og `has`.
- Fungerer godt som et letvægts-valideringstrin, når man håndterer `unknown`-input.

## Brug

### Syntaks

Funktion:

- `isMap(value)`

Parametre:

- `value`: Værdien, der skal kontrolleres.

### Lokal import af funktion

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.isMap(value)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [isMap](../_analysis/isMap.md)

<br>

---

<small>Filen blev oprettet den 31 January 2026 at 16:04:13 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>