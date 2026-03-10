# arePrimitives

## Bschrybig

`arePrimitives` prüeft, öb alli Element i eme übergäbne, nöd-lääre Array primitive Type sind.

### Aawändig

Validier, dass iichommendi Date (z. B. Query-Parameter, CSV-Zeilewärt oder e Lischt vo IDs/Tags) nume primitive Wärt
enthaltet, bevor du sie serialisierisch, hashisch, loggsch oder a APIs wiitergisch, wo kei Objekte dörfed übercho.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `arePrimitives`, wänn du sicherstelle muesch, dass es `unknown[]` nume primitive Wärt enthaltet (string,
> number, bigint, boolean, symbol, undefined oder null), bevor du wiiter verarbeitisch.

### Vorteil

- Git `true` nume zrugg, wänn jedes Element e primitive Wert isch, und isch drum e strängi Prüefig für Arrays ohni
  „Objekt/Funktione“.
- Bricht schnäll ab: git `false` zrugg, sobald es nöd-primitive Element gfunde wird.
- Git au `false` zrugg für nöd-Arrays und für läärni Arrays (über d Prüefig uf es gfüllts Array), und verhindert so,
  dass ungültigi Input us Verseh akzeptiert wird.

## Verwendig

### Syntax

Funktion:

- `arePrimitives(array)`

Parameter:

- `array`: S Array, wo soll druf prüeft werde, öb d Element vom primitive Typ sind.

### Lokale Funktions-Import

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // wahr
const r2 = arePrimitives(b); // wahr
const r3 = arePrimitives(c); // falsch
```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.arePrimitives(array)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>D Datei isch am 31 January 2026 at 00:04:37 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>