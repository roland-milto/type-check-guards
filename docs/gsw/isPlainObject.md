# isPlainObject

## Bschrybig

Prüeft, öb es gegebnigs `value` es eifachs Objekt isch, und git `true` zrugg, wänn ja, susch `false`.

### Aawändig

Validier, dass es `unknown`-Input (z. B. parstes JSON, externi Date oder Funktions-Argument) es eifachs Objekt isch,
bevor mer Keys listet oder s i es typisierts Konfigurationsobjekt abbildet.

> **Hinwiis für TypeScript-Nutzer:**
>
> `isPlainObject` isch nützlich, zum `unknown` z verengere, bevor mer’s wie es record-ähnlichs Objekt behandelt; es git
> nume denn `true` zrugg, wänn de intern Tag `[object Object]` isch.

### Vorteil

- Bietet e eifachi, zueverlässigi Prüefig, öb e Wert es eifachs Objekt (d. h. `Object` / `{}`) isch, und git `true` oder
  `false` zrugg.
- Hilft, eifachi Objekte vo Arrays, Funktione, `null` und andere nöd-eifache Objekt-Typen z unterscheide.
- Nützlich als Type Guard i TypeScript, zum `unknown`-Wert z verengere, bevor mer uf Objekt-Eigeschafte zuegrifft.

## Verwendig

### Syntax

Funktion:

- `isPlainObject(value)`

Parameter:

- `value`: De Wert, wo uf Status als eifachs Objekt söll prüeft werde.

### Lokale Funktions-Import

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // input isch do es eifachs Objekt
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // wahr
console.log(isPlainObject([])); // falsch
console.log(isPlainObject(null)); // falsch
```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.isPlainObject(value)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>D Datei isch am 6 February 2026 at 12:17:35 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>