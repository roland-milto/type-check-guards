# isBoolean

## Bschrybig

Bestimmt, öb en gegebene Wert es `boolean` isch.

### Aawändig

Validier externi oder nöd typisierti Date (z.B. Umgebigsvariable, JSON-Payloads, Query-Parameter), zum sicherzstelle,
dass en Wert es `boolean` isch, bevor du en i bedingter Logik bruuchsch.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `isBoolean`, zum `unknown` uf `boolean` iizschränke, bevor du boolean-Operatione aawändisch.

### Vorteil

- Eifachi und schnälli Runtime-Prüefig mit `typeof`.
- Hilft, unbekannti Iigab z validiere, bevor boolean-spezifischi Logik aagwendet wird.
- Git es voruusgsehbars `boolean`-Resultat zrugg (`true`/`false`).

## Verwendig

### Syntax

Funktion:

- `isBoolean(value)`

Parameter:

- `value`: De Wert, wo söll überprüeft werde.

### Lokale Funktions-Import

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // input isch do es es Boolesch
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.isBoolean(value)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>D Datei isch am 30 January 2026 at 14:36:23 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>