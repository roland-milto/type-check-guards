# arePrimitives

## Beskrivelse

`arePrimitives` evaluerer om alle elementer i en gitt, ikke-tom array er primitive typer.

### Brukstilfelle

Valider at innkommende data (f.eks. spørringsparametere, CSV-radverdier eller en liste med ID-er/tagger) kun inneholder
primitive verdier før serialisering, hashing, logging eller før det sendes til API-er som ikke må motta objekter.

> **Merknad for TypeScript-brukere:**
>
> Bruk `arePrimitives` når du må sikre at en `unknown[]` kun inneholder primitive verdier (string, number, bigint,
> boolean, symbol, undefined eller null) før videre behandling.

### Fordeler

- Returnerer `true` bare når hvert element er en primitiv verdi, noe som gjør den til en streng vakt for «ingen
  objekter/funksjoner»-arrayer.
- Feiler raskt: returnerer `false` så snart et ikke-primitivt element blir funnet.
- Returnerer også `false` for ikke-arrayer og tomme arrayer (via sjekken for fylt array), og forhindrer utilsiktet
  godkjenning av ugyldig input.

## Bruk

### Syntaks

Funksjon:

- `arePrimitives(array)`

Parametere:

- `array`: Arrayen som skal sjekkes for elementer av primitiv type.

### Lokal funksjonsimport

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // sant
const r2 = arePrimitives(b); // sant
const r3 = arePrimitives(c); // falsk
```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.arePrimitives(array)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>Filen ble generert 31 January 2026 at 00:05:54 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>