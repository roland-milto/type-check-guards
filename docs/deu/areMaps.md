# areMaps

## Beschreibung

`areMaps` bestimmt, ob ein gegebenes Array nicht leer ist und alle seine Elemente `Map`-Instanzen sind.

### Anwendungsfall

Validiere unbekannte Eingaben (z. B. aus JSON-Parsing, externen APIs oder dynamischen Quellen), bevor du sie als nicht
leere Liste von `Map`-Objekten behandelst.

> **Hinweis für TypeScript-Nutzer:**
>
> Gibt für ein leeres Array `false` zurück; es gibt nur dann `true` zurück, wenn das Array gefüllt ist und jedes Element
> eine `Map` ist.

### Vorteile

- Stellt sicher, dass jedes Element eine `Map`-Instanz ist, und gibt nur dann `true` zurück, wenn das gesamte Array die
  Prüfung besteht.
- Lehnt leere Arrays absichtlich ab und verhindert so, dass „keine Daten“ versehentlich als gültige Eingabe akzeptiert
  werden.
- Nützlich als Guard, bevor `Map`-spezifische Operationen (z. B. `.get()`, `.set()`, Iteration) über eine Sammlung
  ausgeführt werden.

## Verwendung

### Syntax

Funktion:

- `areMaps(array)`

Parameter:

- `array`: Das zu prüfende Array.

### Lokaler Funktionen-Import

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  // items ist zur Laufzeit garantiert ein nicht-leeres Array von Map-Instanzen
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // false für: leere Arrays oder Arrays, die einen beliebigen Nicht-Map-Wert enthalten
}

```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.areMaps(array)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [areMaps](../_analysis/areMaps.md)

<br>

---

<small>Datei wurde erzeugt am 31. Januar 2026 um 16:12:13 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>