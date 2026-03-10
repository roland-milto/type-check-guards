# isFloat

## Bschrybig

`isFloat` bestimmt, öb e gegebnigi `value` e endligi Gleitkommazahl isch (es `number`, wo kei Ganzzahl isch).

### Aawändig

Validier numerischi Iigabe vo Benutzer, wo Bruchwert bruucht werde (z. B. Priise, Messige, Rate), und weis Ganzzahligi,
`NaN` und Unendligkeite zrugg.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `isFloat`, wänn du nume endligi, nöd-ganzzahligi numerischi Iigabe akzeptiere wotsch; es weist Ganzzahligi und
> nöd-endligi Zahle zrugg.

### Vorteil

- Git nume `true` zrugg nume für endligi, nöd-ganzzahligi Zahle (schliesst Ganzzahligi, `NaN`, `Infinity` und
  `-Infinity` uus).
- Funktioniert mit jedere Iigabtyp (`unknown`) und grenzt sicher i, indem `typeof value === "number"` prüeft wird.
- Bruucht iigebaute numerischi Prüefige (`Number.isInteger`, `Number.isFinite`) für voruusgsehbars Verhalte.

## Verwendig

### Syntax

Funktion:

- `isFloat(value)`

Parameter:

- `value`: De Wert, wo söll überprüeft werde, öb er e Gleitkommazahl isch.

### Lokale Funktions-Import

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // value isch e Zahl zur Laufzyt; si isch endlich und kei Ganzzahl
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}

```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.isFloat(value)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [isFloat](../_analysis/isFloat.md)

<br>

---

<small>D Datei isch am 30 January 2026 at 16:07:47 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>