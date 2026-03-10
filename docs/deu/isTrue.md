# isTrue

## Beschreibung

`isTrue` bestimmt, ob ein gegebener Wert strikt gleich `true` ist.

### Anwendungsfall

Verwende `isTrue`, um Flags, Feature-Toggles oder Konfigurationswerte zu validieren, bei denen nur das Literal `true`
akzeptiert werden soll und alles andere als `false` behandelt werden muss.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `isTrue`, wenn du nur das boolesche Literal `true` akzeptieren musst, nicht nur truthy Werte.

### Vorteile

- Bietet eine strikte Prüfung auf das boolesche Literal `true` (keine Typumwandlung).
- Hilft, `true` von truthy Werten wie `1`, `"true"` oder `{}` zu unterscheiden.
- Einfaches, vorhersehbares Verhalten, geeignet für Guards und Validierungs-Pipelines.

## Verwendung

### Syntax

Funktion:

- `isTrue(value)`

Parameter:

- `value`: Der zu prüfende Wert.

### Lokaler Funktionen-Import

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // wahr
const b = isTrue(1);         // falsch
const c = isTrue("true");   // falsch

if (isTrue(a)) {
  // a ist hier wahr
}
```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.isTrue(value)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [isTrue](../_analysis/isTrue.md)

<br>

---

<small>Datei wurde erzeugt am 30. Januar 2026 um 13:42:06 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>