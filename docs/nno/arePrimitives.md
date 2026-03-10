# arePrimitives

## Skildring

`arePrimitives` vurderer om alle element i ein oppgjeven, ikkje-tom array er primitive typar.

### Brukstilfelle

Valider at innkomande data (t.d. spørjeparameterar, CSV-radverdiar eller ei liste med ID-ar/taggar) berre inneheld
primitive verdiar før serialisering, hashing, logging eller før du sender det vidare til API-ar som ikkje må få objekt.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `arePrimitives` når du må sikre at ein `unknown[]` berre inneheld primitive verdiar (string, number, bigint,
> boolean, symbol, undefined eller null) før vidare handsaming.

### Fordelar

- Returnerer `true` berre når kvart element er ein primitiv verdi, noko som gjer det til ein streng vakt for «ingen
  objekt/funksjonar»-arrayer.
- Feilar raskt: returnerer `false` så snart eit ikkje-primitivt element blir funne.
- Returnerer òg `false` for ikkje-arrayer og tomme arrayer (via sjekken for fylt array), og hindrar utilsikta
  godkjenning av ugyldig input.

## Bruk

### Syntaks

Funksjon:

- `arePrimitives(array)`

Parameter:

- `array`: Arrayen som skal sjekkast for element av primitiv type.

### Lokal funksjonsimport

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // sann
const r2 = arePrimitives(b); // sann
const r3 = arePrimitives(c); // usann
```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.arePrimitives(array)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>Fila vart generert 31 January 2026 at 00:05:50 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>