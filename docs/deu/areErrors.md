# areErrors

## Beschreibung

Prüft, ob ein Array nicht leer ist und ausschließlich `Error`-Objekte enthält, und gibt `true` oder `false` zurück.

### Anwendungsfall

Validiere, dass ein zur Laufzeit bereitgestelltes `unknown[]` (z. B. aggregierte Fehlschläge, Validierungsergebnisse
oder deserialisierte Daten) eine nicht leere Liste von `Error`-Objekten ist, bevor du darüber iterierst, protokollierst
oder erneut wirfst.

> **Hinweis für TypeScript-Nutzer:**
>
> `areErrors` gibt nur dann `true` zurück, wenn es sich um ein gefülltes Array handelt, in dem jedes Element ein `Error`
> ist; es gibt `false` zurück bei einem leeren Array oder wenn irgendein Element kein `Error` ist.

### Vorteile

- Stellt sicher, dass jedes Element eine `Error`-Instanz ist, wodurch eine sichere Fehlerbehandlung und Protokollierung
  möglich wird.
- Lehnt leere Arrays ab und verhindert so, dass versehentliche „keine Fehler“-Zustände als gültige Fehlerlisten
  behandelt werden.
- Eignet sich gut als Runtime-Guard beim Umgang mit `unknown[]`-Eingaben (z. B. aus APIs oder `catch`-Blöcken).

## Verwendung

### Syntax

Funktion:

- `areErrors(array)`

Parameter:

- `array`: Das Array, das auf `Error`-Objekte geprüft werden soll.

### Lokaler Funktionen-Import

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value ist ein nicht-leeres Array von Error-Objekten
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.areErrors(array)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [areErrors](../_analysis/areErrors.md)

<br>

---

<small>Datei wurde erzeugt am 6. Februar 2026 um 12:33:19 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>