# isNumber

## Beskrivelse

`isNumber` sjekker om en verdi er et endelig tall som ikke er `NaN`.

### Brukstilfelle

Valider numerisk input fra upålitelige kilder (skjemaer, query-parametre, JSON-payloads) før beregninger, lagring eller
områdekontroller, slik at bare endelige tall godkjennes (`true`) og alt annet returnerer `false`.

> **Merknad for TypeScript-brukere:**
>
> Bruk `isNumber` til å validere `unknown`-verdier før du gjør aritmetikk; den avviser `NaN`, `Infinity` og `-Infinity`.

### Fordeler

- Returnerer `true` kun for ekte JavaScript-tall (typesjekk pluss avvisning av `NaN` og uendelighet).
- Forhindrer vanlige valideringsfeil der `NaN`, `Infinity` eller `-Infinity` ved et uhell blir godkjent som tall.
- Fungerer godt som en runtime-guard for ukjent input (f.eks. JSON, brukerinput, eksterne API-er).
- Enkel, rask og uten sideeffekter.

## Bruk

### Syntaks

Funksjon:

- `isNumber(value)`

Parametere:

- `value`: Verdien som skal sjekkes.

### Lokal funksjonsimport

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // input er et gyldig endelig tall
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

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.isNumber(value)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>Filen ble generert 30 January 2026 at 13:10:24 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>