# isFinite

## Beskrivelse

Avgjør om en gitt `value` er et endelig `number`.

### Brukstilfelle

Bruk `isFinite` til å validere ukjent inndata (f.eks. fra JSON, skjemaer eller API-er) før du utfører numeriske
beregninger, slik at du sikrer at verdien er et reelt, endelig tall.

> **Merknad for TypeScript-brukere:**
>
> `isFinite` returnerer `true` kun for endelige tall; den returnerer `false` for `NaN`, `Infinity` og enhver verdi som
> ikke er et tall.

### Fordeler

- Bruker den innebygde `Number.isFinite` for en pålitelig sjekk av om en verdi er endelig.
- Returnerer `true` kun for endelige tall; returnerer `false` for `NaN`, `Infinity` og inndata som ikke er tall.
- Enkel, uten bivirkninger, predikat som egner seg for validering og beskyttelseslogikk.

## Bruk

### Syntaks

Funksjon:

- `isFinite(value)`

Parametere:

- `value`: Verdien som skal sjekkes for endelighet.

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

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.isFinite(value)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>Filen ble generert 30 January 2026 at 16:31:06 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>