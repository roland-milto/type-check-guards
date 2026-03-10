# isOctal

## Beskrivelse

Afgør, om en værdi er en gyldig oktal literal-streng (f.eks. `0o755`).

### Anvendelsestilfælde

Validér brugerinput eller konfigurationsværdier, der skal angives som en oktal literal-streng (for eksempel
filrettighedstilstande som `0o644`), før de parses eller konverteres.

> **Bemærkning til TypeScript-brugere:**
>
> `isOctal` er en typevagt (`value is string`). Efter et `true`-resultat indsnævrer TypeScript den kontrollerede
> variabel til `string`.

### Fordele

- Giver en streng typevagt: returnerer kun `true`, når inputtet er en streng, der matcher et oktalt literalformat.
- Afviser tomme strenge og strenge med indledende/efterfølgende mellemrum (ASCII-kontrol/space), hvilket reducerer
  utilsigtede match.
- Understøtter valgfrit fortegn og skelner ikke mellem store/små bogstaver for `0o`/`0O`-præfikset.
- Lempelig over for ikke-streng-input ved at returnere `false` i stedet for at kaste en fejl.

## Brug

### Syntaks

Funktion:

- `isOctal(value)`

Parametre:

- `value`: Værdien, der skal kontrolleres.

### Lokal import af funktion

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // sand
console.log(isOctal(b)); // sand
console.log(isOctal(c)); // falsk
console.log(isOctal(d)); // falsk

if (isOctal(a)) {
  // a er en streng her
  const normalized = a.toLowerCase();
  console.log(normalized);
}
```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.isOctal(value)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [isOctal](../_analysis/isOctal.md)

<br>

---

<small>Filen blev oprettet den 30 January 2026 at 14:44:42 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>