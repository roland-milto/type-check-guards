# areNumerics

## Beskrivelse

`areNumerics` kontrollerer, om en værdi er et ikke-tomt array, hvor alle elementer er numeriske.

### Anvendelsestilfælde

Brug `areNumerics` til at validere eksterne eller utypede data (f.eks. JSON-payloads, query-parametre, formularinput),
før du beregner summer, gennemsnit eller andre numeriske operationer, så du sikrer, at inputtet er et ikke-tomt numerisk
array, og ellers returnerer `false`.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `areNumerics` til at beskytte `unknown` input, før det behandles som et numerisk array; den returnerer `false`
> for ikke-arrays og tomme arrays.

### Fordele

- Returnerer kun `true`, når inputtet er et ikke-tomt array, og hvert element er numerisk.
- Fejler hurtigt: stopper kontrollen, så snart et ikke-numerisk element findes, og returnerer `false`.
- Hjælper med at validere ukendt input sikkert, før der udføres numeriske operationer.

## Brug

### Syntaks

Funktion:

- `areNumerics(array)`

Parametre:

- `array`: Arrayet, der skal kontrolleres for numeriske elementer.

### Lokal import af funktion

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // sand
console.log(areNumerics(b)); // sand
console.log(areNumerics(c)); // falsk
console.log(areNumerics(d)); // falsk
console.log(areNumerics(e)); // falsk

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null
```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.areNumerics(array)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>Filen blev oprettet den 6 February 2026 at 16:04:39 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>