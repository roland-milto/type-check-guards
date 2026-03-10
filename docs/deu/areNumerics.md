# areNumerics

## Beschreibung

`areNumerics` prüft, ob ein Wert ein nicht-leeres Array ist, in dem alle Elemente numerisch sind.

### Anwendungsfall

Verwende `areNumerics`, um externe oder untypisierte Daten (z. B. JSON-Payloads, Query-Parameter, Formulareingaben) zu
validieren, bevor Summen, Durchschnittswerte oder andere numerische Operationen berechnet werden. So wird
sichergestellt, dass die Eingabe ein nicht-leeres numerisches Array ist; andernfalls wird `false` zurückgegeben.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `areNumerics`, um `unknown`-Eingaben abzusichern, bevor du sie als numerisches Array behandelst; es gibt
`false` für Nicht-Arrays und leere Arrays zurück.

### Vorteile

- Gibt nur dann `true` zurück, wenn die Eingabe ein nicht-leeres Array ist und jedes Element numerisch ist.
- Scheitert schnell: bricht die Prüfung ab, sobald ein nicht-numerisches Element gefunden wird, und gibt `false` zurück.
- Hilft, unbekannte Eingaben sicher zu validieren, bevor numerische Operationen durchgeführt werden.

## Verwendung

### Syntax

Funktion:

- `areNumerics(array)`

Parameter:

- `array`: Das Array, das auf numerische Elemente geprüft werden soll.

### Lokaler Funktionen-Import

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // wahr
console.log(areNumerics(b)); // wahr
console.log(areNumerics(c)); // falsch
console.log(areNumerics(d)); // falsch
console.log(areNumerics(e)); // falsch

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null

```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.areNumerics(array)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>Datei wurde erzeugt am 6. Februar 2026 um 16:04:40 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>