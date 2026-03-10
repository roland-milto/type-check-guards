# areFalse

## Bschrybig

`areFalse` prüeft, öb alli Element i eme übergehne Array strikt s boolsche `false` sind.

### Aawändig

Validier, dass e Lischt vo Feature-Flags, Prüefige oder Guard-Resultat alli `false` sind, bevor du wiitermachsch (z. B.
zum bestätige, dass kei blockierendi Bedingige vorhande sind).

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `areFalse`, wänn du e strikti Validierig bruuchsch, dass es Array nöd läär isch und nume s boolsche `false`
> enthaltet.

### Vorteil

- Stellt sicher, dass jedes Element strikt `false` isch (kei truthy/falsey-Umwandlig).
- Git `false` zrugg für Nicht-Arrays oder läär Arrays, will es über `isFilledArray` es gfüllts Array verlangt.
- Bricht früeh ab bim erschte Element, wo nöd `false` isch, für meh Effizienz.

## Verwendig

### Syntax

Funktion:

- `areFalse(array)`

Parameter:

- `array`: S Array zum Prüefe, mit Element vo jedere Art.

### Lokale Funktions-Import

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // wahr
const b = areFalse([false, true, false]);  // falsch
const c = areFalse([false, "false", false]); // falsch
const d = areFalse([]); // falsch

```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.areFalse(array)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>D Datei isch am 31 January 2026 at 16:17:03 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>