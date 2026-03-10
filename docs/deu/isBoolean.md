# isBoolean

## Beschreibung

Bestimmt, ob ein gegebener Wert ein `boolean` ist.

### Anwendungsfall

Validiere externe oder untypisierte Daten (z. B. Umgebungsvariablen, JSON-Payloads, Query-Parameter), um
sicherzustellen, dass ein Wert ein `boolean` ist, bevor er in bedingter Logik verwendet wird.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `isBoolean`, um `unknown` auf `boolean` einzugrenzen, bevor boolean-Operationen angewendet werden.

### Vorteile

- Einfache und schnelle Laufzeitprüfung mit `typeof`.
- Hilft, unbekannte Eingaben zu validieren, bevor boolean-spezifische Logik angewendet wird.
- Gibt ein vorhersehbares `boolean`-Ergebnis (`true`/`false`) zurück.

## Verwendung

### Syntax

Funktion:

- `isBoolean(value)`

Parameter:

- `value`: Der zu prüfende Wert.

### Lokaler Funktionen-Import

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // input ist hier ein boolescher Wert
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.isBoolean(value)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>Datei wurde erzeugt am 30. Januar 2026 um 14:36:08 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>