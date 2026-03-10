# isFloat

## Beschreibung

`isFloat` bestimmt, ob ein gegebener `value` eine endliche Gleitkommazahl ist (eine `number`, die keine Ganzzahl ist).

### Anwendungsfall

Validiere vom Benutzer bereitgestellte numerische Eingaben, bei denen Bruchwerte erforderlich sind (z. B. Preise,
Messwerte, Raten), und lehne Ganzzahlen, `NaN` und Unendlichkeiten ab.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `isFloat`, wenn du nur endliche, nicht-ganzzahlige numerische Eingaben akzeptieren musst; es lehnt Ganzzahlen
> und nicht-endliche Zahlen ab.

### Vorteile

- Gibt nur für endliche, nicht-ganzzahlige Zahlen `true` zurück (schließt Ganzzahlen, `NaN`, `Infinity` und `-Infinity`
  aus).
- Funktioniert mit jedem Eingabetyp (`unknown`) und grenzt sicher ein, indem `typeof value === "number"` geprüft wird.
- Verwendet integrierte numerische Guards (`Number.isInteger`, `Number.isFinite`) für vorhersehbares Verhalten.

## Verwendung

### Syntax

Funktion:

- `isFloat(value)`

Parameter:

- `value`: Der Wert, der darauf geprüft werden soll, ob er eine Gleitkommazahl ist.

### Lokaler Funktionen-Import

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // Wert ist zur Laufzeit eine Zahl; er ist endlich und keine ganze Zahl
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}
```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.isFloat(value)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [isFloat](../_analysis/isFloat.md)

<br>

---

<small>Datei wurde erzeugt am 30. Januar 2026 um 16:07:24 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>