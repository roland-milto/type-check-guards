# areFloats

## Beskrivelse

`areFloats` kontrollerer, om et givent array er udfyldt, og om alle dets elementer er flydende tal.

### Anvendelsestilfælde

Brug `areFloats`, når du modtager et `unknown[]` (f.eks. fra JSON, query-parametre eller eksterne API'er), og du skal
sikre, at det er et udfyldt array, hvor hvert element er et flydende tal, før du kører numerisk logik såsom gennemsnit,
interpolation eller statistiske beregninger.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `areFloats` til at beskytte `unknown[]`, før du behandler det som `number[]`, der kun indeholder flydende tal;
> den returnerer `false` for tomme arrays og for ethvert element, der ikke er et flydende tal.

### Fordele

- Returnerer kun `true`, når inputtet er et ikke-tomt array, og hvert element er et flydende tal.
- Fejler hurtigt: returnerer `false`, så snart et element, der ikke er et flydende tal, findes.
- Hjælper med at validere ukendt input, før der udføres beregninger, der er specifikke for flydende tal.

## Brug

### Syntaks

Funktion:

- `areFloats(array)`

Parametre:

- `array`: Arrayet, der skal kontrolleres for elementer, der er flydende tal.

### Lokal import af funktion

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // sand
console.log(areFloats(b)); // falsk
console.log(areFloats(c)); // falsk

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null
```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.areFloats(array)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>Filen blev oprettet den 30 January 2026 at 15:56:55 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>