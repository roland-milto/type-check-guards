# areNumbers

## Beschreibung

`areNumbers` prüft, ob ein Wert ein nicht-leeres Array ist, in dem alle Elemente Zahlen sind.

### Anwendungsfall

Validiere vom Benutzer oder von einer API bereitgestellte Daten, um sicherzustellen, dass es sich um ein nicht-leeres
Array von Zahlen handelt, bevor Summen, Mittelwerte oder andere numerische Aggregationen berechnet werden.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `areNumbers`, um unbekannte Arrays zu validieren, bevor du numerische Berechnungen durchführst; es gibt
`false` für leere Arrays zurück und für Arrays, die einen beliebigen Nicht-Zahlenwert enthalten.

### Vorteile

- Gibt nur dann `true` zurück, wenn die Eingabe ein nicht-leeres Array ist und jedes Element eine Zahl ist.
- Verhindert Fehlalarme, indem leere Arrays und Nicht-Array-Eingaben abgelehnt werden.
- Nützlich als Guard vor numerischen Operationen (z. B. Summieren, Mittelwert bilden), um Laufzeitfehler zu vermeiden.

## Verwendung

### Syntax

Funktion:

- `areNumbers(array)`

Parameter:

- `array`: Das Array, das darauf geprüft werden soll, ob es Zahlenelemente enthält.

### Lokaler Funktionen-Import

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.areNumbers(array)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [areNumbers](../_analysis/areNumbers.md)

<br>

---

<small>Datei wurde erzeugt am 30. Januar 2026 um 12:44:07 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>