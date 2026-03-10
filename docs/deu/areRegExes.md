# areRegExes

## Beschreibung

`areRegExes` prüft, ob ein Wert ein gefülltes Array ist, das ausschließlich `RegExp`-Objekte enthält.

### Anwendungsfall

Validiere, dass eine Konfigurationsoption (z. B. eine Liste von Allow-/Deny-Mustern) ein nicht-leeres Array regulärer
Ausdrücke ist, bevor du sie zum Abgleichen verwendest.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `areRegExes`, um `unknown` auf `RegExp[]` einzugrenzen, bevor du iterierst oder Muster zusammensetzt.

### Vorteile

- Stellt sicher, dass ein Wert ein nicht-leeres Array ist, in dem jedes Element eine `RegExp`-Instanz ist.
- Bietet eine einfache boolesche Prüfung (`true`/`false`) zur Validierung von Benutzereingaben oder Konfigurationen.
- Hilft, Laufzeitfehler zu vermeiden, wenn späterer Code davon ausgeht, dass alle Elemente Operationen mit regulären
  Ausdrücken unterstützen.

## Verwendung

### Syntax

Funktion:

- `areRegExes(array)`

Parameter:

- `array`: Der zu prüfende Wert.

### Lokaler Funktionen-Import

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // patterns ist hier ein Array von RegExp
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.areRegExes(array)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>Datei wurde erzeugt am 30. Januar 2026 um 23:17:38 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>