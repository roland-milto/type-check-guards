# isSymbol

## Beskrivelse

`isSymbol` avgjør om en gitt verdi er av typen `symbol`, og returnerer `true` for symboler og `false` ellers.

### Brukstilfelle

Valider at en `unknown`-verdi er en `symbol` før du bruker den som en unik identifikator, en registernøkkel eller en
beregnet egenskapsnøkkel i objekter og maps.

> **Merknad for TypeScript-brukere:**
>
> Bruk `isSymbol` til å snevre inn `unknown` til `symbol` før du kaller symbol-relaterte funksjoner eller bruker den som
> en beregnet egenskapsnøkkel.

### Fordeler

- Gir en enkel og pålitelig kjøretidssjekk for JavaScript-primitive typen `symbol`.
- Hjelper med å snevre inn `unknown`-verdier før du bruker symbol-spesifikke API-er eller lagrer dem som nøkler.
- Unngår falske positiver ved å bruke `typeof`, som er den kanoniske måten å oppdage `symbol`-verdier på.

## Bruk

### Syntaks

Funksjon:

- `isSymbol(value)`

Parametere:

- `value`: Verdien som skal sjekkes.

### Lokal funksjonsimport

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // input er et symbol her
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.isSymbol(value)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>Filen ble generert 30 January 2026 at 14:28:01 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>