# isBigInt

## Beskrivelse

`isBigInt` sjekker om en gitt verdi er av typen `bigint`, og returnerer `true` for BigInt-primitiver og `false` ellers.

### Brukstilfelle

Valider og snevre inn verdier som kommer fra utypede kilder (f.eks. JSON-parsing, brukerinput, eksterne API-er) før du
utfører BigInt-spesifikke beregninger eller lagrer dem i felt som kun tillater BigInt.

> **Merknad for TypeScript-brukere:**
>
> Bruk `isBigInt` til å snevre inn `unknown` til `bigint` før du gjør BigInt-aritmetikk (f.eks. `+`, `*`) som krever
> BigInt-operander.

### Fordeler

- Gir en enkel og pålitelig kjøretidssjekk for den primitive typen `bigint`.
- Hjelper med å snevre inn `unknown`-verdier før du utfører operasjoner som kun gjelder BigInt.
- Unngår falske positiver: vanlige tall, strenger og andre typer returnerer `false`.

## Bruk

### Syntaks

Funksjon:

- `isBigInt(value)`

Parametere:

- `value`: Verdien som skal sjekkes.

### Lokal funksjonsimport

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // sant
console.log(isBigInt(10));  // falsk
console.log(isBigInt("10")); // falsk
```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.isBigInt(value)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>Filen ble generert 31 January 2026 at 23:32:49 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>