# isRegEx

## Beschreibung

Bestimmt, ob ein bereitgestellter Wert eine `RegExp`-Instanz ist.

### Anwendungsfall

Validiere vom Benutzer bereitgestellte oder dynamische Werte (z. B. Konfiguration, API-Payloads, Plugin-Inputs), bevor
du sie als regulären Ausdruck behandelst.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `isRegEx`, um `unknown`- (oder Union-)Werte einzugrenzen, bevor du RegExp-spezifische Eigenschaften oder
> Methoden verwendest; es gibt nur dann `true` zurück, wenn es sich um Werte handelt, die Instanzen von `RegExp` sind.

### Vorteile

- Bietet einen einfachen Runtime-Type-Guard, um zu prüfen, ob ein Wert ein `RegExp` ist.
- Hilft, Fehler zu vermeiden, wenn Code einen regulären Ausdruck erwartet (z. B. bevor `test`, `exec` aufgerufen oder
  `source` gelesen wird).
- Funktioniert sowohl mit Regex-Literalen als auch mit Instanzen, die über `new RegExp(...)` erstellt wurden.
- Gibt ein klares boolesches Ergebnis (`true`/`false`) zurück, ohne bei Nicht-Regex-Eingaben eine Exception zu werfen.

## Verwendung

### Syntax

Funktion:

- `isRegEx(value)`

Parameter:

- `value`: Der zu prüfende Wert.

### Lokaler Funktionen-Import

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // input ist hier ein regulärer Ausdruck
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.isRegEx(value)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>Datei wurde erzeugt am 30. Januar 2026 um 23:29:03 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>