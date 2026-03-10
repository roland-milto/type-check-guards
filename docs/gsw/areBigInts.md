# areBigInts

## Bschrybig

`areBigInts` bestimmt, öb en Wert es nöd-läärs Array isch, wo nume `bigint`-Wert enthält.

### Aawändig

Unbekannte Input validiere (z.B. parste JSON-ähnlichi Date, API-Payloads oder Funktionsparameter, wo als `unknown`
typisiert sind), zum sicherstelle, dass es es nöd-läärs Array vo `bigint`-Wert isch, bevor du’s verarbeitisch; git nume
denn `true` zrugg, wänn alli Element `bigint` sind, susch `false`.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `areBigInts` als Runtime-Guard, bevor du `bigint`-only-Operatione (z.B. Arithmetik, Vergliich) uf unbekanntem
> Input machsch.

### Vorteil

- Stellt sicher, dass jedes Element es `bigint` isch, und git nume denn `true` zrugg, wänn s ganze Array passt.
- Lehnt Nicht-Arrays und läär Arrays absichtlich ab (über `isFilledArray`) und verhindert so, dass ungültigi Inputs us
  Verseh akzeptiert wärde.
- Schnälls Abbräche: git `false` zrugg, sobald es Element gfunde wird, wo nöd `bigint` isch.

## Verwendig

### Syntax

Funktion:

- `areBigInts(array)`

Parameter:

- `array`: De Wert, wo überprüeft werde söll.

### Lokale Funktions-Import

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // wahr
console.log(areBigInts(b)); // falsch
console.log(areBigInts(c)); // falsch
```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.areBigInts(array)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>D Datei isch am 31 January 2026 at 23:25:55 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>