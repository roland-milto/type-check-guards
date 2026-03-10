# areOctals

## Beskrivelse

`areOctals` afgør, om den angivne værdi er et ikke-tomt array af gyldige oktale strenge.

### Anvendelsestilfælde

Brug `areOctals`, når du validerer brugerinput, konfigurationsværdier eller API-payloads, der skal indeholde oktale
litteraler (f.eks. filrettighedstilstande som `0o755`), og du vil afvise tomme arrays eller ugyldige poster ved at
returnere `false`.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `areOctals` til at sikre, at du har et ikke-tomt `unknown[]`, hvor hver post er en gyldig oktal streng, før du
> konverterer (f.eks. via `Number(...)` eller custom parsing).

### Fordele

- Validerer, at en værdi er et ikke-tomt array, hvor hvert element er en oktal streng, og returnerer kun `true`, når
  alle elementer består.
- Fejler hurtigt: returnerer `false`, så snart et ikke-oktalt element findes.
- Nyttig som en guard før parsing eller konvertering af oktale strenge for at undgå runtime-fejl og inkonsistent
  håndtering af input.

## Brug

### Syntaks

Funktion:

- `areOctals(array)`

Parametre:

- `array`: Værdien, der skal kontrolleres.

### Lokal import af funktion

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  // value er et ikke-tomt array af oktale strenge
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.areOctals(array)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [areOctals](../_analysis/areOctals.md)

<br>

---

<small>Filen blev oprettet den 30 January 2026 at 14:44:37 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>