# isBuffer

## Beschreibung

Prüft, ob ein Wert ein Node.js-`Buffer` ist, und gibt `true` oder `false` zurück.

### Anwendungsfall

Validiere Eingaben zur Laufzeit (z. B. API-Payloads, Dateidaten oder Nachrichtenpuffer), um sicherzustellen, dass ein
Wert ein `Buffer` ist, bevor du ihn verarbeitest, und erhalte zuverlässig `false`, wenn du außerhalb von Node.js
ausführst, wo `Buffer` möglicherweise nicht existiert.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `isBuffer`, um `unknown`-Werte auf `Buffer` einzugrenzen, bevor du Buffer-spezifische Methoden aufrufst.

### Vorteile

- Erkennt Node.js-`Buffer`-Instanzen sicher mit `Buffer.isBuffer`.
- Gibt in Umgebungen, in denen `Buffer` nicht verfügbar ist, `false` zurück und vermeidet so Laufzeitfehler.
- Funktioniert mit `unknown`-Eingaben und eignet sich damit für Laufzeitvalidierung und Typ-Einschränkung.

## Verwendung

### Syntax

Funktion:

- `isBuffer(value)`

Parameter:

- `value`: Der zu prüfende Wert.

### Lokaler Funktionen-Import

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // wahr
console.log(isBuffer(b)); // falsch

if (isBuffer(a)) {
  // a ist hier ein Buffer
  console.log(a.toString("utf8"));
}
```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.isBuffer(value)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>Datei wurde erzeugt am 31. Januar 2026 um 16:31:22 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>