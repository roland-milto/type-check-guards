# isInteger

## Beschreibung

Bestimmt, ob ein gegebener `value` eine sichere Ganzzahl ist.

### Anwendungsfall

Validiere nicht vertrauenswürdige Eingaben (z. B. Query-Parameter, JSON-Payloads, Umgebungsvariablen), bevor du sie als
Ganzzahl für Array-Indizes, Paginierung, Zähler oder Datenbank-IDs verwendest.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `isInteger`, um unbekannte Eingaben zu validieren, bevor du sie als numerische Ganzzahl behandelst; es gibt
> nur dann `true` zurück, wenn `typeof value === "number"` und `Number.isSafeInteger(value)`.

### Vorteile

- Prüft sowohl Typ- als auch numerische Sicherheit: gibt nur dann `true` zurück, wenn die Eingabe eine Zahl und eine
  sichere Ganzzahl ist.
- Verhindert häufige Fallstricke bei numerischer Typumwandlung: Zeichenketten wie "5" geben korrekt `false` zurück.
- Lehnt Nicht-Ganzzahlen und unsichere Ganzzahlen ab und eignet sich damit für IDs, Zähler und Array-Indizierung.

## Verwendung

### Syntax

Funktion:

- `isInteger(value)`

Parameter:

- `value`: Der Wert, der auf Ganzzahl-Eigenschaft geprüft werden soll.

### Lokaler Funktionen-Import

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // wahr
const b = isInteger(-100);   // wahr
const c = isInteger("5");    // falsch
const d = isInteger(5.5);    // falsch
const e = isInteger(null);   // falsch

```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.isInteger(value)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [isInteger](../_analysis/isInteger.md)

<br>

---

<small>Datei wurde erzeugt am 31. Januar 2026 um 00:49:37 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>