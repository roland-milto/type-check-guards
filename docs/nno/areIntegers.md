# areIntegers

## Skildring

`areIntegers` avgjer om alle elementa i ein gitt array er heiltal, og returnerer `true` dersom dei er det og `false`
elles.

### Brukstilfelle

Bruk `areIntegers` til å validere data som kjem frå brukarar eller eksterne kjelder (t.d. query-parametrar,
JSON-payloads, CSV-rader) når logikken din krev ei fylt liste med heiltalsverdiar som ID-ar, teljarar,
pagineringsforskyvingar eller array-indeksar.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `areIntegers` som ein runtime-guard for `unknown[]`-input før du handsamar han som `number[]` som berre inneheld
> heiltal. Dersom han returnerer `false`, er inputen anten ikkje ein fylt array eller inneheld minst éin verdi som ikkje
> er heiltal.

### Fordelar

- Returnerer `true` berre når kvart element er eit heiltal; elles returnerer han `false`.
- Hjelper med å validere ukjent input før du utfører operasjonar som berre gjeld heiltal (t.d. indeksering, teljingar,
  ID-ar).
- Feilar raskt: sluttar å sjekke så snart eit element som ikkje er heiltal blir funne.

## Bruk

### Syntaks

Funksjon:

- `areIntegers(array)`

Parameter:

- `array`: Arrayen som skal sjekkast for heiltalselement.

### Lokal funksjonsimport

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // sant
console.log(areIntegers(b)); // sant
console.log(areIntegers(c)); // usant

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));
```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.areIntegers(array)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>Fila vart generert 31 January 2026 at 00:59:44 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>