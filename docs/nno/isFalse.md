# isFalse

## Skildring

`isFalse` sjekkar om ein gitt verdi er strengt lik den boolske litteralen `false`.

### Brukstilfelle

Valider ukjende data (t.d. frå JSON, query-parametrar eller brukarinput) der berre den eksplisitte boolske verdien
`false` skal reknast som eit gyldig flagg, og alt anna skal avvisast.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `isFalse` når du berre vil godta litteralen `false` og avvise alle andre «falsy»-verdiar; han returnerer `true`
> berre for `value === false`.

### Fordelar

- Gjev ein streng kontroll av den boolske litteralen `false` utan typekonvertering.
- Hjelper med å skilje `false` frå andre «falsy»-verdiar som `0`, `""`, `null` og `undefined`.
- Forbetrar lesbarheita ved å gjere intensjonen tydeleg når ein validerer ukjend input.

## Bruk

### Syntaks

Funksjon:

- `isFalse(value)`

Parameter:

- `value`: Verdien som skal kontrollerast.

### Lokal funksjonsimport

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // input er nøyaktig false her
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.isFalse(value)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [isFalse](../_analysis/isFalse.md)

<br>

---

<small>Fila vart generert 31 January 2026 at 16:43:57 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>