# isFinite

## Beschreibung

Bestimmt, ob ein gegebener `value` eine endliche `number` ist.

### Anwendungsfall

Verwende `isFinite`, um unbekannte Eingaben (z. B. aus JSON, Formularen oder APIs) zu validieren, bevor numerische
Berechnungen durchgeführt werden, und sicherzustellen, dass der Wert eine echte, endliche Zahl ist.

> **Hinweis für TypeScript-Nutzer:**
>
> `isFinite` gibt `true` nur für endliche Zahlen zurück; es gibt `false` für `NaN`, `Infinity` und jeden Wert zurück,
> der keine Zahl ist.

### Vorteile

- Verwendet das eingebaute `Number.isFinite` für eine zuverlässige Endlichkeitsprüfung.
- Gibt `true` nur für endliche Zahlen zurück; gibt `false` für `NaN`, `Infinity` und Eingaben zurück, die keine Zahl
  sind.
- Einfaches, nebenwirkungsfreies Prädikat, geeignet für Validierung sowie Guard-Logik.

## Verwendung

### Syntax

Funktion:

- `isFinite(value)`

Parameter:

- `value`: Der Wert, der auf Endlichkeit geprüft werden soll.

### Lokaler Funktionen-Import

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers ist: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // value ist hier eine endliche Zahl
  const doubled = value * 2;
  console.log(doubled);
}
```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.isFinite(value)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>Datei wurde erzeugt am 30. Januar 2026 um 16:29:31 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>