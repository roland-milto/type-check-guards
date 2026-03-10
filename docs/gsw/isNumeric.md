# isNumeric

## Bschrybig

`isNumeric` bestimmt, öb e gegebnige `value` als numerisch gilt, indem dr uufglösti Typ gege `NUMERIC_TYPES` vergliche
wird.

### Aawändig

Bruuch `isNumeric`, zum Inputs z validiere (z.B. API-Payloads, Formularwert, Konfiguration), bevor du numerischi
Operatione machsch, und zum konsischtänt numerisch-ähnlichi Type (wie `BigInt`) gemäss `NUMERIC_TYPES` z akzeptiere.

> **Hinwiis für TypeScript-Nutzer:**
>
> `isNumeric` isch es Prädikat, wo es Boolean zrugg git; behandl es als Runtime-Check, öb en Wert zum vo dr Library
> definiertä numerische Type-Set ghört.

### Vorteil

- Bruucht `getTypeOf` zäme mit `NUMERIC_TYPES`, zum d Logik fürs Erkenne vo numerische Type z zentralisiere und d
  Prüefige im ganze Codebase konsischtänt z halte.
- Git e eifachs Boolean (`true`/`false`) zrugg, für eifachs Branching und Guard-Style-Verwendig.
- Unterstützt mehri numerischi Darstelligä (z.B. `number`, `BigInt`), wie in `NUMERIC_TYPES` definiert.

## Verwendig

### Syntax

Funktion:

- `isNumeric(value)`

Parameter:

- `value`: Dr Wert, wo uf numerische Typ söll überprüeft werde.

### Lokale Funktions-Import

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // v gilt nach de Typregle vo de Bibliothek als numerisch
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.isNumeric(value)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>D Datei isch am 6 February 2026 at 15:52:40 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>