# areUndefined

## Bschrybig

`areUndefined` prüeft, öb jedes Element i eme übergäbne Array `undefined` isch.

### Aawändig

Validier, dass e Lischt vo optionale Resultat kei tatsächligi Wärt enthaltet (nume `undefined`), z. B. nach em Mapping
vo Lookups, wo fehlendi Iiträg als `undefined` repräsentiert sind, und du wotsch bestätige, dass alli Lookups gscheitert
sind.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `areUndefined`, wänn du sicherstelle wotsch, dass es `unknown[]` nume `undefined`-Wärt enthaltet; es git
`false` zrugg für läär Arrays und für nöd-Array/ungültigi Inputs wäge em interne `isFilledArray`-Check.

### Vorteil

- Git `false` zrugg für nöd-Arrays und läär Arrays, will es mit `isFilledArray` es gfüllts Array verlangt.
- Stellt sicher, dass jedes Element `undefined` isch, nöd nume es paar, und macht d Absicht explizit.
- Nützlich als Guard-Style-Predicate bi dr Validierig vo unbekannte Input-Collectione.

## Verwendig

### Syntax

Funktion:

- `areUndefined(array)`

Parameter:

- `array`: S Array, wo uf `undefined`-Element überprüeft wird.

### Lokale Funktions-Import

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // wahr
const r2 = areUndefined(b); // falsch
const r3 = areUndefined(c); // falsch

// Hinweis: git falsch zrugg bi lääre Arrays
const r4 = areUndefined([]); // falsch
```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.areUndefined(array)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>D Datei isch am 30 January 2026 at 13:55:50 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>