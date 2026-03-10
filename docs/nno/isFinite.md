# isFinite

## Skildring

Avgjer om ein gitt `value` er eit endeleg `number`.

### Brukstilfelle

Bruk `isFinite` til å validere ukjend input (t.d. frå JSON, skjema eller API-ar) før du gjer numeriske utrekningar, slik
at du sikrar at verdien er eit reelt, endeleg tal.

> **Merknad for TypeScript-brukarar:**
>
> `isFinite` returnerer `true` berre for endelege tal; det returnerer `false` for `NaN`, `Infinity` og alle verdiar som
> ikkje er tal.

### Fordelar

- Brukar den innebygde `Number.isFinite` for ein påliteleg sjekk av om noko er endeleg.
- Returnerer `true` berre for endelege tal; returnerer `false` for `NaN`, `Infinity` og input som ikkje er tal.
- Enkel, utan sideeffektar-predikat som passar for validering og vaktlogikk.

## Bruk

### Syntaks

Funksjon:

- `isFinite(value)`

Parameter:

- `value`: Verdien som skal sjekkast for om ho er endeleg.

### Lokal funksjonsimport

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers er: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // value er eit endeleg tal her
  const doubled = value * 2;
  console.log(doubled);
}
```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.isFinite(value)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>Fila vart generert 30 January 2026 at 16:31:02 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>