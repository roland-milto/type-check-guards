# areIndexesFound

## Beschreibung

`areIndexesFound` prüft, ob ein Wert ein nicht-leeres Array ist, dessen Elemente allesamt gültige Indizes sind, und gibt
in diesem Fall `true` zurück, andernfalls `false`.

### Anwendungsfall

Validiere vom Benutzer bereitgestellte oder externe Daten (z. B. geparstes JSON), von denen erwartet wird, dass sie eine
Liste von Indizes sind, bevor du sie zum Zugriff auf oder zum Slicen von Arrays verwendest.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `areIndexesFound`, um unbekannte Eingaben zu validieren, bevor du deren Elemente als Array-Indizes
> behandelst; es gibt `false` für leere Arrays und für Arrays zurück, die Nicht-Index-Werte enthalten.

### Vorteile

- Gibt nur dann `true` zurück, wenn die Eingabe ein gefülltes Array ist und jedes Element ein gültiger Index ist.
- Bricht früh ab: gibt `false` zurück, sobald ein Nicht-Index-Element gefunden wird.
- Nützlich als Guard, bevor Werte als Array-Positionen oder Offsets verwendet werden.

## Verwendung

### Syntax

Funktion:

- `areIndexesFound(array)`

Parameter:

- `array`: Das Array, das auf Index-Konformität geprüft werden soll.

### Lokaler Funktionen-Import

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // wahr
console.log(areIndexesFound(b)); // falsch
console.log(areIndexesFound(c)); // falsch

if (areIndexesFound(a)) {
  // Hier wird bestätigt, dass `a` ein gefülltes Array von Indizes ist.
  const firstIndex = a[0];
  console.log(firstIndex);
}
```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.areIndexesFound(array)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>Datei wurde erzeugt am 31. Januar 2026 um 00:41:30 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>