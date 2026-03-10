# areNumerics

## Skildring

`areNumerics` sjekkar om ein verdi er ei ikkje-tom matrise der alle element er numeriske.

### Brukstilfelle

Bruk `areNumerics` til å validere eksterne eller utypte data (t.d. JSON-payloadar, spørjeparameterar, skjemainndata) før
du reknar ut summar, gjennomsnitt eller andre numeriske operasjonar, slik at inndata er ei ikkje-tom numerisk matrise,
og returnerer elles `false`.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `areNumerics` til å verne `unknown`-inndata før du handsamar dei som ei numerisk matrise; funksjonen returnerer
`false` for ikkje-matriser og tomme matriser.

### Fordelar

- Returnerer `true` berre når inndata er ein ikkje-tom matrise og kvart element er numerisk.
- Feilar raskt: sluttar å sjekke så snart eit ikkje-numerisk element blir funne, og returnerer `false`.
- Hjelper med å validere ukjende inndata på ein trygg måte før du utfører numeriske operasjonar.

## Bruk

### Syntaks

Funksjon:

- `areNumerics(array)`

Parameter:

- `array`: Matrisa som skal sjekkast for numeriske element.

### Lokal funksjonsimport

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // sann
console.log(areNumerics(b)); // sann
console.log(areNumerics(c)); // usann
console.log(areNumerics(d)); // usann
console.log(areNumerics(e)); // usann

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null
```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.areNumerics(array)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>Fila vart generert 6 February 2026 at 16:06:35 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>