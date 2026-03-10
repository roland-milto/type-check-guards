# areRegExes

## Bschrybig

`areRegExes` prüeft, öb en Wert esch es gfüllts Array, wo nume `RegExp`-Objekt drin het.

### Aawändig

Validierä, dass e Konfigurationsoption (z. B. e Lischt vo Allow/Deny-Pattern) es nid-leers Array vo reguläre Usdrück
isch, bevor mer si zum Matche bruucht.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `areRegExes`, zum `unknown` uf `RegExp[]` iizschränke, bevor du drüber iteriersch oder Pattern zämesetzisch.

### Vorteil

- Stellt sicher, dass en Wert esch es nid-leers Array isch, wo jedes Element e `RegExp`-Instanz isch.
- Bietet e eifachi Boolesche Guard (`true`/`false`) zum Validierä vo Benutzereingabä oder Konfiguration.
- Hilft, Laufziit-Fehler z'verhindere, wenn spöterer Code devo usgaht, dass alli Items RegExp-Operatione unterstützed.

## Verwendig

### Syntax

Funktion:

- `areRegExes(array)`

Parameter:

- `array`: De Wert, wo söll überprüeft werde.

### Lokale Funktions-Import

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // patterns isch do es Array vo RegExp
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.areRegExes(array)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>D Datei isch am 30 January 2026 at 23:18:17 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>