# areObjects

## Beschreibung

`areObjects` prüft, ob ein bereitgestelltes gefülltes Array ausschließlich Objekte enthält.

### Anwendungsfall

Verwende `areObjects`, wenn du ein unbekanntes Array erhältst (z. B. durch JSON-Parsing oder externe APIs) und
sicherstellen musst, dass es nicht leer ist und dass jedes Element ein Objekt ist, bevor du iterierst und auf
Objekteigenschaften zugreifst.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `areObjects`, um `unknown[]` zu validieren, bevor du Elemente als Objekte behandelst; für leere Arrays gibt
> es `false` zurück.

### Vorteile

- Gibt nur dann `true` zurück, wenn die Eingabe ein gefülltes Array ist und jedes Element ein Objekt ist.
- Bricht frühzeitig ab und gibt `false` zurück, sobald ein nicht-Objekt-Element gefunden wird.
- Hilft dabei, unbekannte Eingaben zu validieren, bevor objektspezifische Operationen ausgeführt werden.

## Verwendung

### Syntax

Funktion:

- `areObjects(array)`

Parameter:

- `array`: Das Array, das darauf geprüft werden soll, ob es Objektelemente enthält.

### Lokaler Funktionen-Import

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value ist ein gefülltes Array von Objekten
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.areObjects(array)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [areObjects](../_analysis/areObjects.md)

<br>

---

<small>Datei wurde erzeugt am 31. Januar 2026 um 00:08:31 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>