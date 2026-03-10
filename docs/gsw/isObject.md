# isObject

## Bschrybig

Bestimmt, öb e gegebnige `value` es `object` isch (ohni `null`).

### Aawändig

Bruuch `isObject`, zum unbekannti Inputs (z. B. parsti JSON, API-Responses, Event-Payloads) z validiere, bevor du uf
Eigeschafte zuegrifsch, demit sicher isch, dass dr Wärt es Objekt isch und nöd `null`.

> **Hinwiis für TypeScript-Nutzer:**
>
> `isObject` isch e Runtime-Guard, wo es Boolean zrugg git; es schränkt nöd uf e spezifischi Objekt-Form i. Kombiniers
> mit zuesätzliche Prüefige (z. B. öb Eigeschafte vorhande sind), wänn du stärcheres Typing bruuchsch.

### Vorteil

- Git `true` nume zrugg für Wärt, wo nöd `null` sind und wo dr `typeof` `"object"` isch.
- Verhindert dr tüüf JavaScript-Fähler, bi dem `null` susch als Objekt würd behandelt werde.
- Funktioniert für eifachi Objekte und iigebaute Objekt-Instanze (z. B. `Date`, `RegExp`).
- Eifachi, schnälli Runtime-Prüefig, guet für defensivs Programmiere und Input-Validierig.

## Verwendig

### Syntax

Funktion:

- `isObject(value)`

Parameter:

- `value`: Dr Wärt, wo söll druf prüeft werde, öb er es `object` isch.

### Lokale Funktions-Import

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // input isch es nöd-null Objekt zur Laufzyt
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.isObject(value)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [isObject](../_analysis/isObject.md)

<br>

---

<small>D Datei isch am 31 January 2026 at 00:18:32 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>