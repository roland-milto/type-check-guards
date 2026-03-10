# isNaN

## Bschrybig

Bestimmt, öb de aagebni `value` es `NaN` vom Typ `number` isch, ohni Strings umz'wandle.

### Aawändig

Validier nöd vertrauenswürdigi oder locker typisierti Inputs (z. B. API-Payloads, Formularwärt, parsti JSON), zum de
spezielli `NaN`-Wert z'erkenne und explizit z'handle, während Nicht-Zahl-Inputs als nöd `NaN` behandlet wärde.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `isNaN`, wänn du de spezielli numerisch Wert `NaN` wotsch erkenne und gliichziitig sicherstelle, dass de Input
> würkli es `number` isch (kei String-zu-Zahl-Umwandlig).

### Vorteil

- Prüeft, öb en Wert `NaN` isch, ohni dass Nicht-Zahle (z. B. Strings) i Zahle umgwandle wärde.
- Git nume `true` zrugg für Wärt, wo sowol vom Typ `number` sind als au `NaN`.
- Sicher für `unknown`-Inputs und vermidet Falsch-Positiv durch impliziti Umwandlige.

## Verwendig

### Syntax

Funktion:

- `isNaN(value)`

Parameter:

- `value`: De Wert, wo söll prüeft werde, öb er es `NaN` vom Typ `number` isch.

### Lokale Funktions-Import

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // wahr
console.log(isNaN(b)); // falsch
console.log(isNaN(c)); // falsch

if (isNaN(a)) {
  // a isch e Zahl und speziell NaN
}
```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.isNaN(value)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [isNaN](../_analysis/isNaN.md)

<br>

---

<small>D Datei isch am 30 January 2026 at 15:46:09 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>