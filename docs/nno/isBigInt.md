# isBigInt

## Skildring

`isBigInt` sjekkar om ein gitt verdi er av typen `bigint`, og returnerer `true` for BigInt-primitive verdiar og `false`
elles.

### Brukstilfelle

Valider og snevre inn verdiar som kjem frå utypte kjelder (t.d. JSON-parsing, brukarinnputt, eksterne API-ar) før du
utfører BigInt-spesifikke utrekningar eller lagrar dei i felt som berre tek BigInt.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `isBigInt` til å snevre inn `unknown` til `bigint` før du gjer BigInt-aritmetikk (t.d. `+`, `*`) som krev
> BigInt-operander.

### Fordelar

- Gjev ein enkel og påliteleg køyretidskontroll for den primitive typen `bigint`.
- Hjelper med å snevre inn `unknown`-verdiar før ein utfører operasjonar som berre gjeld BigInt.
- Unngår falske positive: vanlege tal, strengar og andre typar returnerer `false`.

## Bruk

### Syntaks

Funksjon:

- `isBigInt(value)`

Parameter:

- `value`: Verdien som skal sjekkast.

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

console.log(isBigInt(10n)); // sann
console.log(isBigInt(10));  // usann
console.log(isBigInt("10")); // usann
```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.isBigInt(value)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>Fila vart generert 31 January 2026 at 23:32:46 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>