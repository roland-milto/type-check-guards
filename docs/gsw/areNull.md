# areNull

## Bschrybig

Prüeft, öb alli Element im aagee `array` `null` sind.

### Aawändig

Validier, dass e Dataset-Spalte, e API-Feldliste oder es Placeholder-Array nume `null`-Wert enthält, bevor du Logik
aawändisch, wo drvo usgaht, dass alli Iiträg absichtlich läär sind.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `areNull`, wänn du e strängi Prüefig bruuchsch, dass dr Input es nöd-läärs Array isch und jedes Element gnau
`null` isch (nöd `undefined`, nöd falsy Wert).

### Vorteil

- Git `true` nume zrugg, wänn jedes Element `null` isch, und isch demit e strängi „alli stimmed“‑Prüefig.
- Lehnt Nicht-Arrays und läeri Arrays ab, indem `false` zrugggeh wird, und verhindert so zuefälligi truthy Resultat bi
  ungültigem Input.
- Funktioniert guet als Vorbedingigs-Check, bevor Date verarbeitisch, wo vollständig `null` müend sii.

## Verwendig

### Syntax

Funktion:

- `areNull(array)`

Parameter:

- `array`: S Input-Array, wo uf `null`-Element prüeft wird.

### Lokale Funktions-Import

```ts
import { areNull } from "@type-check/guards";

const a = [null, null];
const b = [null, 1, null];

const allNullA = areNull(a); // wahr
const allNullB = areNull(b); // falsch

const notAnArray = areNull(123 as unknown as unknown[]); // falsch
const empty = areNull([]); // falsch

```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.areNull(array)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [areNull](../_analysis/areNull.md)

<br>

---

<small>D Datei isch am 31 January 2026 at 15:43:17 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>