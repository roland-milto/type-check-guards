# areSets

## Beskrivelse

Kontrollerer, om et givent ikke-tomt array kun indeholder `Set`-instanser, og returnerer `true`, hvis det gør, og ellers
`false`.

### Anvendelsestilfælde

Validér, at en værdi (f.eks. fra brugerinput, JSON-parsing eller eksterne API'er) er et ikke-tomt array af `Set`
-objekter, før hvert set behandles.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `areSets` til at validere ukendt input, før du itererer og kalder `Set`-API'er (f.eks. `.size`, `.has`, `.add`)
> på hvert element.

### Fordele

- Returnerer kun `true`, når inputtet er et ikke-tomt array, og hvert element er en `Set`-instans.
- Forhindrer falske positiver for tomme arrays ved at returnere `false`, når arrayet ikke har nogen elementer.
- Nyttig som en runtime-guard, før der udføres `Set`-specifikke operationer på hvert element.

## Brug

### Syntaks

Funktion:

- `areSets(array)`

Parametre:

- `array`: Arrayet, der skal kontrolleres for `Set`-instanser.

### Lokal import af funktion

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // a er et array af Set-instanser ved kørselstid
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // falsk
console.log(areSets(c)); // falsk
```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.areSets(array)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [areSets](../_analysis/areSets.md)

<br>

---

<small>Filen blev oprettet den 30 January 2026 at 23:13:02 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>