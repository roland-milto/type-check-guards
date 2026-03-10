# areEqual

## Beskrivelse

`areEqual` kontrollerer, om alle elementer i et array er lig med en given forventet værdi, og returnerer kun `true` for
ikke-tomme arrays, hvor hvert element matcher.

### Anvendelsestilfælde

Validér, at en liste kun indeholder én tilladt værdi (f.eks. at alle statusflag er `true`, alle roller er `"admin"`,
eller at alle numeriske indtastninger er lig med en påkrævet konstant), samtidig med at tomt input behandles som
ugyldigt (`false`).

> **Bemærkning til TypeScript-brugere:**
>
> Brug `areEqual`, når du har brug for en streng kontrol af alle elementer; den returnerer `false` for tomme arrays og
> for ethvert input, der ikke er et array eller ikke er udfyldt.

### Fordele

- Returnerer kun `true`, når hvert element matcher den forventede værdi; ellers returnerer den `false`.
- Fejler hurtigt: stopper kontrollen, så snart et element ikke matcher.
- Beskytter mod ugyldigt input ved at returnere `false`, når input ikke er et udfyldt array.

## Brug

### Syntaks

Funktion:

- `areEqual(value, expected)`

Parametre:

- `value`: Arrayet, der skal kontrolleres.
- `expected`: Elementet, som hvert array-element skal sammenlignes med.

### Lokal import af funktion

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.areEqual(value, expected)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [areEqual](../_analysis/areEqual.md)

<br>

---

<small>Filen blev oprettet den 31 January 2026 at 23:50:09 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>