# arePrimitives

## Beschreibung

`arePrimitives` prüft, ob alle Elemente in einem bereitgestellten, nicht-leeren Array primitive Typen sind.

### Anwendungsfall

Validiere, dass eingehende Daten (z. B. Query-Parameter, CSV-Zeilenwerte oder eine Liste von IDs/Tags) nur primitive
Werte enthalten, bevor du sie serialisierst, hashst, protokollierst oder an APIs weitergibst, die keine Objekte erhalten
dürfen.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `arePrimitives`, wenn du sicherstellen musst, dass ein `unknown[]` nur primitive Werte (string, number,
> bigint, boolean, symbol, undefined oder null) enthält, bevor du es weiterverarbeitest.

### Vorteile

- Gibt `true` nur dann zurück, wenn jedes Element ein primitiver Wert ist, wodurch es eine strikte Absicherung für
  Arrays ohne „Objekte/Funktionen“ ist.
- Bricht früh ab: Gibt `false` zurück, sobald ein nicht-primitives Element gefunden wird.
- Gibt außerdem `false` für Nicht-Arrays und leere Arrays zurück (über die Filled-Array-Prüfung) und verhindert so die
  versehentliche Akzeptanz ungültiger Eingaben.

## Verwendung

### Syntax

Funktion:

- `arePrimitives(array)`

Parameter:

- `array`: Das Array, das darauf geprüft werden soll, ob seine Elemente primitive Typen sind.

### Lokaler Funktionen-Import

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // wahr
const r2 = arePrimitives(b); // wahr
const r3 = arePrimitives(c); // falsch
```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.arePrimitives(array)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>Datei wurde erzeugt am 31. Januar 2026 um 00:04:11 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>