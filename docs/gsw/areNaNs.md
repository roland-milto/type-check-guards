# areNaNs

## Bschrybig

`areNaNs` prüeft, öb alli Element i enem Array `NaN` sind, und git nume denn `true` zrugg, wänn jedes Element `NaN`
isch.

### Aawändig

Validier iichommendi Date, wo `NaN` als Sentinel-Wärt bruucht wird, und du sicherstelle muesch, dass s ganze Array
usschliesslich us `NaN` besteht (z.B. zum Erkenne vo ere komplett fehlende numerische Serie).

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `areNaNs`, wänn du validiere muesch, dass es Array nume dr numerisch `NaN`-Wärt enthält (ohni
> String-zu-Zahl-Umwandlig).

### Vorteil

- Git `true` zrugg nume denn zrugg, wänn jedes Element `NaN` isch (strängi Prüefig über alli Element).
- Zwingt kei Strings zu Zahle; Wärte wie "NaN" bliibed nöd-`NaN` und mache s Resultat `false`.
- Git `false` zrugg bi nöd-gfüllte Arrays und verhindert so es versehentlichs `true` bi leerem Input.

## Verwendig

### Syntax

Funktion:

- `areNaNs(array)`

Parameter:

- `array`: S Array, wo uf `NaN`-Wärt söll überprüeft werde.

### Lokale Funktions-Import

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); // wahr
const b = areNaNs([NaN, 1, NaN]); // falsch
const c = areNaNs([NaN, "NaN", NaN]); // falsch
const d = areNaNs([NaN, null, NaN]); // falsch
const e = areNaNs([] as unknown[]); // falsch
```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.areNaNs(array)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [areNaNs](../_analysis/areNaNs.md)

<br>

---

<small>D Datei isch am 30 January 2026 at 15:51:29 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>