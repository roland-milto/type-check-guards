# areFalse

## Beschreibung

`areFalse` prüft, ob alle Elemente in einem bereitgestellten Array strikt der boolesche Wert `false` sind.

### Anwendungsfall

Validiere, dass eine Liste von Feature-Flags, Prüfungen oder Guard-Ergebnissen vollständig `false` ist, bevor du
fortfährst (z. B. um zu bestätigen, dass keine blockierenden Bedingungen vorliegen).

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `areFalse`, wenn du eine strikte Validierung benötigst, dass ein Array nicht leer ist und ausschließlich den
> booleschen Wert `false` enthält.

### Vorteile

- Stellt sicher, dass jedes Element strikt `false` ist (keine Truthy/Falsy-Koerzierung).
- Gibt für Nicht-Arrays oder leere Arrays `false` zurück, indem über `isFilledArray` ein gefülltes Array vorausgesetzt
  wird.
- Bricht zur Effizienz früh beim ersten nicht-`false`-Element ab.

## Verwendung

### Syntax

Funktion:

- `areFalse(array)`

Parameter:

- `array`: Das zu prüfende Array, das Elemente beliebigen Typs enthalten kann.

### Lokaler Funktionen-Import

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // wahr
const b = areFalse([false, true, false]);  // falsch
const c = areFalse([false, "false", false]); // falsch
const d = areFalse([]); // falsch
```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.areFalse(array)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>Datei wurde erzeugt am 31. Januar 2026 um 16:16:45 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>