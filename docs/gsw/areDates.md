# areDates

## Bschrybig

`areDates` bestimmt, öb es gäbigs Array gfüllt isch und nume `Date`-Objekt enthält, und git nume denn `true` zrugg, wenn
alli Element gültigi Date sind.

### Aawändig

Bruuch `areDates`, zum unbekannti Inputs (z.B. parsti JSON, Formulardate, API-Payloads) z validiere, bevor mer
datumsspezifischi Logik wie Sortiere nach Ziit, Formatiere oder Bereich berechne uusführt.

> **Hinwiis für TypeScript-Nutzer:**
>
> Git nume denn `true` zrugg für nöd-lääre Arrays, wo jedes Element es `Date` isch; lääri Arrays gänd `false`.

### Vorteil

- Stellt sicher, dass es es Array nöd läär isch, bevor mer sini Inhält validiert, und verhindert so `true` bi lääre
  Inputs.
- Prüeft, dass jedes Element e `Date`-Instanz isch, und git bi dr erschte Abwiichig sofort `false` zrugg.
- Nützlich als Guard-Style-Check, bevor mer datumsspezifischi Operatione uf Array-Items uusführt.

## Verwendig

### Syntax

Funktion:

- `areDates(array)`

Parameter:

- `array`: S Array, wo uf `Date`-Objekt söll überprüeft werde.

### Lokale Funktions-Import

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // wahr
console.log(areDates(b)); // falsch
console.log(areDates(c)); // falsch

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}
```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.areDates(array)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [areDates](../_analysis/areDates.md)

<br>

---

<small>D Datei isch am 31 January 2026 at 15:30:25 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>