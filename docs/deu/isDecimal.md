# isDecimal

## Beschreibung

`isDecimal` prüft, ob ein Wert eine Dezimal-String-Repräsentation ohne führende/nachgestellte Leerzeichen und mit einem
gültigen Dezimalformat ist.

### Anwendungsfall

Validiere Formularfelder, API-Payloads oder Konfigurationswerte, die als Dezimal-String (optional mit Vorzeichen) ohne
umgebende Leerzeichen angegeben werden müssen, bevor sie geparst oder gespeichert werden.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `isDecimal`, um Benutzereingaben zu validieren, bevor du sie konvertierst (z. B. mit `Number(value)`),
> insbesondere wenn Leerzeichen abgelehnt werden müssen.

### Vorteile

- Validiert strikt, dass die Eingabe eine Zeichenkette ist und einem Dezimal-Literal-Muster entspricht.
- Lehnt führende und nachgestellte Leerzeichen (einschließlich Steuerzeichen) ab, um mehrdeutiges Parsen zu vermeiden.
- Schnelle Vorprüfungen (Typprüfung sowie erstes/letztes Zeichen), bevor der Regex ausgeführt wird.
- Gibt ein einfaches boolesches Ergebnis (`true`/`false`) zurück, geeignet für Guards und Eingabevalidierung.

## Verwendung

### Syntax

Funktion:

- `isDecimal(value)`

Parameter:

- `value`: Der Wert, der auf ein Dezimal-String-Format geprüft werden soll.

### Lokaler Funktionen-Import

```ts
import { isDecimal } from "@type-check/guards";

const inputs: unknown[] = ["123.45", "0.99", "-42.0", 123.45, " 123.45", "123.45 "];

for (const v of inputs) {
  if (isDecimal(v)) {
    // v ist hier eine Zeichenkette (zur Laufzeit validiert)
    console.log("decimal:", v);
  } else {
    console.log("not decimal:", v);
  }
}

```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.isDecimal(value)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [isDecimal](../_analysis/isDecimal.md)

<br>

---

<small>Datei wurde erzeugt am 31. Januar 2026 um 15:51:54 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>