# areOneOfType

## Beschreibung

`areOneOfType` prüft, ob alle Elemente in einem nicht leeren Array einem der angegebenen Laufzeittypen entsprechen.

### Anwendungsfall

Validiere eingehende Daten (z. B. geparstes JSON), bei denen ein Feld ein nicht leeres Array sein muss, dessen Elemente
auf eine bekannte Menge primitiver Typen beschränkt sind; gib `false` zurück, wenn das Array leer ist oder einen nicht
erlaubten Typ enthält.

> **Hinweis für TypeScript-Nutzer:**
>
> Diese Funktion gibt einen Boolean zurück und verengt die Array-Elementtypen zur Compile-Zeit nicht; verwende sie als
> Laufzeit-Validierungsschritt vor der weiteren Verarbeitung.

### Vorteile

- Stellt sicher, dass jedes Element in einem Array mindestens einem erlaubten Laufzeittyp entspricht, und gibt nur dann
  `true` zurück, wenn das gesamte Array besteht.
- Lehnt ungültige Eingaben frühzeitig ab: gibt `false` zurück, wenn `array` oder `types` leer ist oder kein gefülltes
  Array ist.
- Nützlich zur Validierung von Sammlungen mit gemischten Typen (z. B. Zahlen und Strings) mit einem einzigen Aufruf von
  `areOneOfType`.

## Verwendung

### Syntax

Funktion:

- `areOneOfType(array, types)`

Parameter:

- `array`: Ein Array von Elementen, die gegen die bereitgestellten Typen geprüft werden sollen.
- `types`: Ein Array von Strings, die die Datentypen darstellen, gegen die geprüft werden soll.

### Lokaler Funktionen-Import

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.areOneOfType(array, types)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>Datei wurde erzeugt am 31. Januar 2026 um 23:36:34 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>