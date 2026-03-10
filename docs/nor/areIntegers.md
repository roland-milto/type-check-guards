# areIntegers

## Beskrivelse

`areIntegers` avgjør om alle elementene i et gitt array er heltall, og returnerer `true` hvis de er det og `false`
ellers.

### Brukstilfelle

Bruk `areIntegers` til å validere brukerlevert eller ekstern data (f.eks. spørringsparametere, JSON-payloads, CSV-rader)
når logikken din krever en fylt liste med heltallsverdier som ID-er, tellere, pagineringsforskyvninger eller
arrayindekser.

> **Merknad for TypeScript-brukere:**
>
> Bruk `areIntegers` som en runtime-guard for `unknown[]`-input før du behandler det som `number[]` som kun inneholder
> heltall. Hvis den returnerer `false`, er input enten ikke et fylt array eller inneholder minst én verdi som ikke er et
> heltall.

### Fordeler

- Returnerer `true` bare når hvert element er et heltall; ellers returnerer den `false`.
- Hjelper med å validere ukjent input før du utfører operasjoner som kun gjelder heltall (f.eks. indeksering, tellinger,
  ID-er).
- Feiler raskt: slutter å sjekke så snart et ikke-heltallselement blir funnet.

## Bruk

### Syntaks

Funksjon:

- `areIntegers(array)`

Parametere:

- `array`: Arrayet som skal sjekkes for heltallselementer.

### Lokal funksjonsimport

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // sant
console.log(areIntegers(b)); // sant
console.log(areIntegers(c)); // falsk

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));
```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.areIntegers(array)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>Filen ble generert 31 January 2026 at 00:59:46 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>