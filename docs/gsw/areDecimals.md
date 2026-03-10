# areDecimals

## Bschrybig

Prüeft, öb alli Element i eme Array Dezimalzahle sind und s Array gfüllti isch, und git `true` oder `false` zrugg.

### Aawändig

Validier vom Benutzer aagähni Listä (z.B. CSV-Spalte oder Formular-Inputs), zum sicherstelle, dass s Array nöd läär isch
und jede Itrag e Dezimalwert isch, bevor du parsch oder Rechnige machsch.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `areDecimals`, wänn du e schnelli boolschi Prüefig bruchsch, dass es `unknown[]` nöd läär isch und jedes
> Element e Dezimal-Darstellige isch.

### Vorteil

- Stellt sicher, dass d Eingab e gfüllti Array isch, bevor d Element validiert wärde, und verhindert so, dass läär Listä
  us Verseh akzeptiert wärde.
- Validiert jedes Element mit `isDecimal`, drum führe gmischt oder ungültigi Wert sofort zu eme `false` Resultat.
- Liferet es eifachs boolsches Resultat (`true`/`false`), geeignet für Guards und Validierig mit früehem Return.

## Verwendig

### Syntax

Funktion:

- `areDecimals(array)`

Parameter:

- `array`: S Array, wo söll überprüeft wärde.

### Lokale Funktions-Import

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); // wahr
console.log(areDecimals(b)); // falsch
console.log(areDecimals(c)); // falsch
```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.areDecimals(array)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [areDecimals](../_analysis/areDecimals.md)

<br>

---

<small>D Datei isch am 31 January 2026 at 15:57:15 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>