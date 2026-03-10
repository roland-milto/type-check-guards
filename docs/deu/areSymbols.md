# areSymbols

## Beschreibung

Prüft, ob eine Eingabe ein gefülltes Array ist, dessen Elemente allesamt Symbole sind, und gibt `true` oder `false`
zurück.

### Anwendungsfall

Validiere, dass ein Konfigurationsfeld (z. B. eine Liste eindeutiger Schlüssel, die als Symbole dargestellt werden) ein
nicht-leeres Array ist, das ausschließlich Symbole enthält, bevor du es in APIs verwendest, die `symbol[]` erfordern.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `areSymbols`, um unbekannte Eingaben zu validieren, bevor du sie als `symbol[]` behandelst; es gibt `false`
> für Nicht-Arrays und leere Arrays zurück.

### Vorteile

- Gibt nur dann `true` zurück, wenn die Eingabe ein nicht-leeres Array ist und jedes Element ein Symbol ist.
- Verhindert Fehlalarme, indem Nicht-Arrays und leere Arrays durch die interne Filled-Array-Prüfung abgewiesen werden.
- Nützlich als Runtime-Type-Guard, um reine Symbol-Listen vor der weiteren Verarbeitung zu validieren.

## Verwendung

### Syntax

Funktion:

- `areSymbols(array)`

Parameter:

- `array`: Das Array, das darauf geprüft werden soll, ob es Symbol-Elemente enthält.

### Lokaler Funktionen-Import

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // a ist zur Laufzeit ein Array, das nur Symbole enthält
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // false
```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.areSymbols(array)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>Datei wurde erzeugt am 30. Januar 2026 um 14:21:17 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>