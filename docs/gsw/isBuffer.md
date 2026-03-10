# isBuffer

## Bschrybig

Prüeft, öb en Wert en Node.js-`Buffer` isch, und git `true` oder `false` zrugg.

### Aawändig

Validier Iigabe zur Laufziit (z. B. API-Payloads, Dateidate, oder Message-Buffers), zum sicher z'stelle, dass en Wert en
`Buffer` isch, bevor du en verarbeitisch, und bechunsch zuverlässig `false`, wänn du usserhalb vo Node.js laufsch, wo
`Buffer` villicht nöd existiert.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `isBuffer`, zum `unknown`-Wert uf `Buffer` iizschränke, bevor du Buffer-spezifischi Methode ufrüefsch.

### Vorteil

- Erkennt Node.js-`Buffer`-Instanze sicher mit `Buffer.isBuffer`.
- Git `false` zrugg i Umgebige, wo `Buffer` nöd verfüegbar isch, und vermeidet so Laufziit-Fehler.
- Funktioniert mit `unknown`-Iigab, drum isch es guet für Laufziit-Validierig und Type-Narrowing.

## Verwendig

### Syntax

Funktion:

- `isBuffer(value)`

Parameter:

- `value`: De Wert, wo söll testet werde.

### Lokale Funktions-Import

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // wahr
console.log(isBuffer(b)); // falsch

if (isBuffer(a)) {
  // a isch do es Buffer
  console.log(a.toString("utf8"));
}
```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.isBuffer(value)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>D Datei isch am 31 January 2026 at 16:31:42 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>