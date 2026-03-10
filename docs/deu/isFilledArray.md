# isFilledArray

## Beschreibung

Prüft, ob `value` ein Array mit mindestens einem Element ist, und gibt `true` oder `false` zurück.

### Anwendungsfall

Verwende `isFilledArray`, um eingehende Daten (z. B. API-Payloads, Formularwerte, Konfiguration) zu validieren, bevor du
iterierst, auf das erste Element zugreifst oder Logik anwendest, die mindestens ein Element erfordert.

> **Hinweis für TypeScript-Nutzer:**
>
> `isFilledArray` ist ein Laufzeit-Guard, der einen booleschen Wert zurückgibt; er schränkt Elementtypen nicht weiter
> ein, außer dass bestätigt wird, dass das Array nicht leer ist.

### Vorteile

- Einfache, schnelle Prüfung auf ein nicht leeres Array mit `Array.isArray` und einer Längenprüfung.
- Hilft, Laufzeitfehler zu vermeiden, wenn Code davon ausgeht, dass ein Array mindestens ein Element hat.
- Klares boolesches Ergebnis: gibt `true` für nicht leere Arrays und andernfalls `false` zurück.

## Verwendung

### Syntax

Funktion:

- `isFilledArray(value)`

Parameter:

- `value`: Der Wert, der darauf geprüft werden soll, ob er ein nicht leeres Array ist.

### Lokaler Funktionen-Import

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // input ist zur Laufzeit ein nicht-leeres Array
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.isFilledArray(value)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>Datei wurde erzeugt am 6. Februar 2026 um 11:46:49 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>