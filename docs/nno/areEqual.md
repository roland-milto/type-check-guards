# areEqual

## Skildring

`areEqual` sjekkar om alle element i ein array er like ein gitt forventa verdi, og returnerer `true` berre for
ikkje-tomme arrayar der kvart element samsvarar.

### Brukstilfelle

Valider at ei liste berre inneheld éin tillaten verdi (t.d. at alle statusflagg er `true`, alle roller er `"admin"`,
eller at alle numeriske oppføringar er lik ein påkravd konstant), samstundes som tom input blir rekna som ugyldig (
`false`).

> **Merknad for TypeScript-brukarar:**
>
> Bruk `areEqual` når du treng ein streng kontroll av alle element; han returnerer `false` for tomme arrayar og for all
> input som ikkje er ein array eller ikkje er fylt.

### Fordelar

- Returnerer `true` berre når kvart element samsvarar med den forventa verdien; elles returnerer han `false`.
- Feilar raskt: sluttar å sjekke så snart eit element ikkje samsvarar.
- Vernar mot ugyldig input ved å returnere `false` når input ikkje er ein fylt array.

## Bruk

### Syntaks

Funksjon:

- `areEqual(value, expected)`

Parameter:

- `value`: Arrayen som skal kontrollerast.
- `expected`: Elementet som kvart array-element skal samanliknast med.

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

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.areEqual(value, expected)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [areEqual](../_analysis/areEqual.md)

<br>

---

<small>Fila vart generert 31 January 2026 at 23:51:34 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>