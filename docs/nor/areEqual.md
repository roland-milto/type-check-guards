# areEqual

## Beskrivelse

`areEqual` sjekker om alle elementer i en array er lik en gitt forventet verdi, og returnerer `true` bare for ikke-tomme
arrayer der hvert element samsvarer.

### Brukstilfelle

Valider at en liste bare inneholder én tillatt verdi (f.eks. at alle statusflagg er `true`, alle roller er `"admin"`,
eller at alle numeriske oppføringer er lik en påkrevd konstant), samtidig som tom inndata behandles som ugyldig (
`false`).

> **Merknad for TypeScript-brukere:**
>
> Bruk `areEqual` når du trenger en streng sjekk av alle elementer; den returnerer `false` for tomme arrayer og for
> enhver inndata som ikke er en array eller ikke er fylt.

### Fordeler

- Returnerer `true` bare når hvert element samsvarer med den forventede verdien; ellers returnerer den `false`.
- Feiler raskt: slutter å sjekke så snart et element som ikke samsvarer blir funnet.
- Beskytter mot ugyldig inndata ved å returnere `false` når inndata ikke er en fylt array.

## Bruk

### Syntaks

Funksjon:

- `areEqual(value, expected)`

Parametere:

- `value`: Arrayen som skal sjekkes.
- `expected`: Elementet som hvert array-element skal sammenlignes med.

### Lokal funksjonsimport

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.areEqual(value, expected)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [areEqual](../_analysis/areEqual.md)

<br>

---

<small>Filen ble generert 31 January 2026 at 23:51:40 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>