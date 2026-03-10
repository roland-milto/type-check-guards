# areBooleans

## Beskrivelse

`areBooleans` sjekker om en gitt ikke-tom matrise kun inneholder boolske verdier, og returnerer `true` hvis den gjør det
og `false` ellers.

### Brukstilfelle

Valider brukeroppgitte eller eksterne data (f.eks. JSON-payloads, query-parametere, konfigurasjonsmatriser) for å sikre
at en ikke-tom liste kun inneholder boolske verdier før du anvender boolsk logikk eller sender den til API-er som
forventer `boolean[]`.

> **Merknad for TypeScript-brukere:**
>
> Bruk `areBooleans` til å validere `unknown[]` før du behandler det som `boolean[]`; den returnerer `false` for tomme
> matriser, så håndter det tilfellet eksplisitt hvis en tom liste skal være tillatt.

### Fordeler

- Returnerer `true` bare når hvert element er en boolsk verdi og inndata er en ikke-tom matrise.
- Forhindrer falske positiver ved å avvise tomme matriser (returnerer `false`).
- Fungerer godt som en runtime-guard før operasjoner som kun skal brukes på boolske verdier (f.eks. `every`, `some`,
  logiske reduksjoner).

## Bruk

### Syntaks

Funksjon:

- `areBooleans(array)`

Parametere:

- `array`: Matrisen som skal sjekkes for boolske elementer.

### Lokal funksjonsimport

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.areBooleans(array)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>Filen ble generert 30 January 2026 at 14:41:37 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>