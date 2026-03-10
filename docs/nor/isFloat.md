# isFloat

## Beskrivelse

`isFloat` avgjør om en gitt `value` er et endelig flyttall (et `number` som ikke er et heltall).

### Brukstilfelle

Valider numerisk inndata fra brukere der brøkverdier kreves (f.eks. priser, målinger, satser) og avvis heltall, `NaN` og
uendeligheter.

> **Merknad for TypeScript-brukere:**
>
> Bruk `isFloat` når du bare trenger å godta endelige, ikke-heltallige numeriske inndata; den avviser heltall og
> ikke-endelige tall.

### Fordeler

- Returnerer `true` kun for endelige, ikke-heltallige tall (utelukker heltall, `NaN`, `Infinity` og `-Infinity`).
- Fungerer med alle inndatatyper (`unknown`) og snevrer trygt inn ved å sjekke `typeof value === "number"`.
- Bruker innebygde numeriske sjekker (`Number.isInteger`, `Number.isFinite`) for forutsigbar oppførsel.

## Bruk

### Syntaks

Funksjon:

- `isFloat(value)`

Parametere:

- `value`: Verdien som skal sjekkes om den er et flyttall.

### Lokal funksjonsimport

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // boleng ke nomoro ka nako ya go tsamaya; e na le moedi (ga se Infinity) e bile ga se palomoka
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}

```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.isFloat(value)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [isFloat](../_analysis/isFloat.md)

<br>

---

<small>Filen ble generert 30 January 2026 at 16:09:05 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>