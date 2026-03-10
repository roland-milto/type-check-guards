# areStrings

## Beschreibung

`areStrings` prüft, ob ein Array nicht leer ist und alle seine Elemente Zeichenketten sind, und gibt nur in diesem Fall
`true` zurück.

### Anwendungsfall

Validiere externe oder vom Benutzer bereitgestellte Daten (z. B. Query-Parameter, JSON-Payloads, CSV-Felder), um
sicherzustellen, dass du eine nicht leere Liste von Zeichenketten hast, bevor du sie verarbeitest.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `areStrings`, um unbekannte Arrays zu validieren, bevor du Logik anwendest, die nur für Zeichenketten gedacht
> ist; für leere Arrays gibt es `false` zurück.

### Vorteile

- Stellt sicher, dass jedes Element eine Zeichenkette ist, und lehnt Arrays mit gemischten Typen ab, indem `false`
  zurückgegeben wird.
- Lehnt leere Arrays ab, sodass `true` nur eine nicht leere Liste von Zeichenketten anzeigt.
- Nützlich als schnelle Laufzeitprüfung, bevor ausschließlich auf Zeichenketten anwendbare Operationen ausgeführt
  werden (z. B. `trim`, `toLowerCase`).

## Verwendung

### Syntax

Funktion:

- `areStrings(value)`

Parameter:

- `value`: Expected type `string[]`.

### Lokaler Funktionen-Import

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // input ist zur Laufzeit ein nicht-leeres string[]
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.areStrings(value)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>Datei wurde erzeugt am 30. Januar 2026 um 13:17:47 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>