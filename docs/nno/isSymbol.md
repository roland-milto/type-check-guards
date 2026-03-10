# isSymbol

## Skildring

`isSymbol` avgjer om ein gitt verdi er av typen `symbol`, og returnerer `true` for symbol og `false` elles.

### Brukstilfelle

Valider at ein `unknown`-verdi er ein `symbol` før du brukar han som ein unik identifikator, ein registernøkkel eller
ein utrekna eigenskapsnøkkel i objekt og mappar.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `isSymbol` til å snevre inn `unknown` til `symbol` før du kallar symbol-relaterte funksjonar eller brukar det som
> ein utrekna eigenskapsnøkkel.

### Fordelar

- Gjev ein enkel og påliteleg køyretidskontroll for JavaScript-primitive typen `symbol`.
- Hjelper med å snevre inn `unknown`-verdiar før ein brukar symbol-spesifikke API-ar eller lagrar dei som nøklar.
- Unngår falske positive ved å bruke `typeof`, som er den kanoniske måten å oppdage `symbol`-verdiar på.

## Bruk

### Syntaks

Funksjon:

- `isSymbol(value)`

Parameter:

- `value`: Verdien som skal kontrollerast.

### Lokal funksjonsimport

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // input er eit symbol her
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.isSymbol(value)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>Fila vart generert 30 January 2026 at 14:27:59 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>