# areMaps

## Beskrivelse

`areMaps` afgør, om et givent array er ikke-tomt, og om alle dets elementer er `Map`-instanser.

### Anvendelsestilfælde

Validér ukendt input (f.eks. fra JSON-parsing, eksterne API'er eller dynamiske kilder), før det behandles som en
ikke-tom liste af `Map`-objekter.

> **Bemærkning til TypeScript-brugere:**
>
> Returnerer `false` for et tomt array; den returnerer kun `true`, når arrayet er udfyldt, og hvert element er en `Map`.

### Fordele

- Sikrer, at hvert element er en `Map`-instans, og returnerer kun `true`, når hele arrayet består testen.
- Afviser tomme arrays som standard, hvilket forhindrer utilsigtet accept af “ingen data” som gyldigt input.
- Nyttig som en guard, før der udføres `Map`-specifikke operationer (f.eks. `.get()`, `.set()`, iteration) på tværs af
  en samling.

## Brug

### Syntaks

Funktion:

- `areMaps(array)`

Parametre:

- `array`: Arrayet, der skal kontrolleres.

### Lokal import af funktion

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  // items er garanteret at være et ikke-tomt array af Map-instanser ved kørselstid
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // falsk for: tomme arrays eller arrays, der indeholder en hvilken som helst ikke-Map-værdi
}

```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.areMaps(array)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [areMaps](../_analysis/areMaps.md)

<br>

---

<small>Filen blev oprettet den 31 January 2026 at 16:12:07 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>