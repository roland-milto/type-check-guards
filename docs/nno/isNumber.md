# isNumber

## Skildring

`isNumber` sjekkar om ein verdi er eit endeleg tal som ikkje er `NaN`.

### Brukstilfelle

Valider numerisk input frå ikkje-tiltrudde kjelder (skjema, query-parametrar, JSON-payloadar) før utrekningar, lagring
eller områdesjekkar, slik at berre endelege tal slepp gjennom (`true`) og alt anna returnerer `false`.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `isNumber` til å validere `unknown`-verdiar før du gjer aritmetikk; han avviser `NaN`, `Infinity` og `-Infinity`.

### Fordelar

- Returnerer `true` berre for ekte JavaScript-tal (typesjekk pluss avvising av `NaN` og uendeleg).
- Forhindrar vanlege valideringsfeil der `NaN`, `Infinity` eller `-Infinity` ved eit uhell blir godkjende som tal.
- Fungerer godt som ein runtime-guard for ukjent input (t.d. JSON, brukarinput, eksterne API-ar).
- Enkel, rask og utan sideeffektar.

## Bruk

### Syntaks

Funksjon:

- `isNumber(value)`

Parameter:

- `value`: Verdien som skal sjekkast.

### Lokal funksjonsimport

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // input er eit gyldig endeleg tal
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.isNumber(value)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>Fila vart generert 30 January 2026 at 13:10:16 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>