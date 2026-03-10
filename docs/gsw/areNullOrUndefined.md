# areNullOrUndefined

## Bschrybig

Prüeft, öb alli Element im gägebe Array `null` oder `undefined` sind.

### Aawändig

Validier, dass e Lischt vo optionale Fälder kei tatsächligi Wärt enthaltet (nume `null`/`undefined`), bevor du
entschiedisch, d'Verarbeitig z'überspringe oder e «kei Wärt aagäh» Zustand z'zeige.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `areNullOrUndefined`, wänn du muesch sicherstelle, dass es Array nume fählendi Wärt (`null`/`undefined`)
> enthaltet. Beacht, dass es bi eme lääre Array `false` zrugg git.

### Vorteil

- Git `true` zrugg nume, wänn jedes Element `null` oder `undefined` isch.
- Git `false` bi lääre Arrays zrugg und hilft so, zwüsche «kei Date» und «alli fählendi Wärt» z'underscheide.
- Funktioniert mit `unknown[]`, drum isch es sicher zum Bruuche, bevor mer d'Typä iischränkt.

## Verwendig

### Syntax

Funktion:

- `areNullOrUndefined(array)`

Parameter:

- `array`: S Array, wo mer wott prüefe.

### Lokale Funktions-Import

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === wahr

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === falsch

const empty = areNullOrUndefined([]);
// empty === falsch
```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.areNullOrUndefined(array)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>D Datei isch am 31 January 2026 at 00:29:48 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>