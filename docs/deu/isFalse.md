# isFalse

## Beschreibung

`isFalse` prüft, ob ein gegebener Wert strikt gleich dem booleschen Literal `false` ist.

### Anwendungsfall

Validiere unbekannte Daten (z. B. aus JSON, Query-Parametern oder Benutzereingaben), bei denen nur der explizite
boolesche Wert `false` als gültiges Flag behandelt werden soll und alles andere abgelehnt werden muss.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `isFalse`, wenn du nur das Literal `false` akzeptieren und alle anderen falsy Werte ablehnen musst; es gibt
> nur für `value === false` `true` zurück.

### Vorteile

- Bietet eine strikte Prüfung auf das boolesche Literal `false` ohne Typumwandlung (Coercion).
- Hilft, `false` von anderen falsy Werten wie `0`, `""`, `null` und `undefined` zu unterscheiden.
- Verbessert die Lesbarkeit, indem die Absicht beim Validieren unbekannter Eingaben explizit gemacht wird.

## Verwendung

### Syntax

Funktion:

- `isFalse(value)`

Parameter:

- `value`: Der zu prüfende Wert.

### Lokaler Funktionen-Import

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // input ist hier genau false
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.isFalse(value)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [isFalse](../_analysis/isFalse.md)

<br>

---

<small>Datei wurde erzeugt am 31. Januar 2026 um 16:21:21 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>