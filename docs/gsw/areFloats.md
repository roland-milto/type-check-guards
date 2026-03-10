# areFloats

## Bschrybig

`areFloats` prüeft, öb es gäbigs Array gfüllt isch und alli sini Element Float sind.

### Aawändig

Bruuch `areFloats`, wänn du es `unknown[]` überchunsch (z.B. us JSON, Query-Parameter oder externe APIs) und du
sicherstelle muesch, dass es es gfüllt Array isch, wo jedes Item e Float isch, bevor du numerischi Logik wie
Durchschnitt, Interpolation oder statistischi Berechnige laufe lahsch.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `areFloats` zum `unknown[]` z schütze, bevor du s als `number[]` behandlisch, wo nume Floats dinne het; es git
`false` zrugg bi lääre Arrays und bi jedem nöd-Float-Element.

### Vorteil

- Git `true` zrugg nume zrugg, wänn d Iigab e nöd-läärs Array isch und jedes Element e Float isch.
- Bricht schnäll ab: git `false` zrugg, sobald es nöd-Float-Element gfunde wird.
- Hilft, unbekannti Iigabe z validiere, bevor mer Float-spezifischi Berechnige macht.

## Verwendig

### Syntax

Funktion:

- `areFloats(array)`

Parameter:

- `array`: S Array, wo mer uf Float-Element prüeft.

### Lokale Funktions-Import

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // wahr
console.log(areFloats(b)); // falsch
console.log(areFloats(c)); // falsch

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null
```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.areFloats(array)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>D Datei isch am 30 January 2026 at 15:57:25 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>