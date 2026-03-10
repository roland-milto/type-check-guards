# isOfType

## Skildring

Avgjer om ein gitt `value` samsvarar med ein spesifisert typestreng, ved å bruke `typeof` for primitive typar og ein
reserve for komplekse typar.

### Brukstilfelle

Valider og snevre inn `unknown`-inndata (t.d. API-svar, brukarinput, tolka JSON) ved å sjekke om ein verdi har ein
forventa typestreng før du utfører type-spesifikke operasjonar.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `isOfType` til å forgreine på køyretidstypar når du jobbar med `unknown`-verdiar; funksjonen returnerer `true`/
`false` og handsamar `null` og `undefined` eksplisitt.

### Fordelar

- Sjekkar primitive typar via direkte `typeof` for fart og klarleik.
- Handterer `null` og `undefined` korrekt, noko `typeof` åleine ikkje kan skilje slik ein ønskjer.
- Støttar komplekse eller eigendefinerte typestrengar via ei reserve-samanlikning ved bruk av `getTypeOf`.
- Returnerer eit enkelt boolsk resultat (`true`/`false`) som passar for guards og forgreining.

## Bruk

### Syntaks

Funksjon:

- `isOfType(value, type)`

Parameter:

- `value`: Verdien som skal testast mot `type`.
- `type`: Strengrepresentasjonen av typen det skal sjekkast mot.

### Lokal funksjonsimport

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // input er eit tal her
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // input er ein streng her
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));
```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.isOfType(value, type)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>Fila vart generert 30 January 2026 at 17:05:28 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>