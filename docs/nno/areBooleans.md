# areBooleans

## Skildring

`areBooleans` sjekkar om ein gitt ikkje-tom array berre inneheld boolske verdiar, og returnerer `true` dersom han gjer
det og `false` elles.

### Brukstilfelle

Valider brukaroppgjevne eller eksterne data (t.d. JSON-payloadar, query-parametrar, konfigurasjonsarrayar) for å sikre
at ei ikkje-tom liste berre inneheld boolske verdiar før du brukar boolsk logikk eller sender ho til API-ar som
forventar `boolean[]`.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `areBooleans` til å validere `unknown[]` før du handsamar han som `boolean[]`; han returnerer `false` for tomme
> arrayar, så handter det tilfellet eksplisitt dersom ei tom liste skal vere tillaten.

### Fordelar

- Returnerer `true` berre når kvart element er ein boolsk verdi og inndata er ein ikkje-tom array.
- Hindrar falske positive ved å avvise tomme arrayar (returnerer `false`).
- Fungerer godt som ein runtime-guard før operasjonar som berre gjeld boolske verdiar (t.d. `every`, `some`, logiske
  reduksjonar).

## Bruk

### Syntaks

Funksjon:

- `areBooleans(array)`

Parameter:

- `array`: Arrayen som skal sjekkast for boolske element.

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

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.areBooleans(array)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>Fila vart generert 30 January 2026 at 14:41:33 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>