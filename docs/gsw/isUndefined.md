# isUndefined

## Bschrybig

Prüeft, öb en gegebene Wärt `undefined` isch.

### Aawändig

Bruuch `isUndefined`, zum optionale Inputs z schütze, fehlendi Eigeschafte z erkenne oder zwüsche „nöd aagee“ (
`undefined`) und „explizit leer“ (`null`) z unterscheide.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `isUndefined`, wänn du spezifisch `undefined` (nöd `null`) wotsch erkenne. Es isch sicher, will es uf
`typeof value === "undefined"` basiert.

### Vorteil

- Bietet e klarä, expliziti Prüefig uf `undefined` mit `typeof` und vermidet so Randfäll bi nöd deklarierte Variable.
- Git es eifachs Boolesches Resultat (`true`/`false`) zrugg, passend für Guards, Verzweigige und Validierigslògik.
- Hilft, `undefined` vo andere „leere“ Wärt wie `null`, `0`, `""` oder `NaN` z unterscheide.

## Verwendig

### Syntax

Funktion:

- `isUndefined(value)`

Parameter:

- `value`: De Wärt, wo söll überprüeft werde.

### Lokale Funktions-Import

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // x isch do undefiniert
} else {
  // x isch do nöd undefiniert
}

const a = isUndefined(undefined); // wahr
const b = isUndefined(null);      // falsch

```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.isUndefined(value)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>D Datei isch am 30 January 2026 at 14:02:47 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>