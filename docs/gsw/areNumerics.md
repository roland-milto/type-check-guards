# areNumerics

## Bschrybig

`areNumerics` prüeft, öb en Wert e nid-lääri Array isch, wo alli Element numerisch sind.

### Aawändig

Bruuch `areNumerics`, zum externi oder nid typisierti Date (z.B. JSON-Payloads, Query-Parameter, Formular-Yygabe)
z'validiere, bevor du Summene, Durchschnitt oder anderi numerischi Operatione berechnisch. So stellsch sicher, dass
d'Yygab e nid-lääri numerischi Array isch, und susch wird `false` zrugggeh.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `areNumerics` als Guard für `unknown`-Yygabe, bevor du si als numerischi Array behandlisch; es git `false`
> zrugg für Nid-Arrays und für lääri Arrays.

### Vorteil

- Git nume `true` zrugg nume, wänn d'Yygab e nid-lääri Array isch und jedes Element numerisch isch.
- Schlaat schnäll fehl: hört uf z'prüefe, sobald es nid-numerischs Element gfunde wird, und git `false` zrugg.
- Hilft, unbekannti Yygabe sicher z'validiere, bevor numerischi Operatione usgfüehrt wärde.

## Verwendig

### Syntax

Funktion:

- `areNumerics(array)`

Parameter:

- `array`: D'Array, wo uf numerischi Element söll überprüeft werde.

### Lokale Funktions-Import

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // wahr
console.log(areNumerics(b)); // wahr
console.log(areNumerics(c)); // falsch
console.log(areNumerics(d)); // falsch
console.log(areNumerics(e)); // falsch

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null

```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.areNumerics(array)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>D Datei isch am 6 February 2026 at 16:05:13 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>