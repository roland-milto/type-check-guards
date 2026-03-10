# isEmpty

## Beschreibung

Bestimmt, ob ein gegebener Wert leer ist, und gibt `true` für `null`, `undefined`, leere/aus Leerzeichen bestehende
Strings, leere Arrays, leere `Map`/`Set` oder Objekte ohne eigene aufzählbare Eigenschaften zurück.

### Anwendungsfall

Verwende `isEmpty`, um Eingaben zu validieren und fehlende/leere Werte über mehrere Datentypen hinweg zu erkennen (z. B.
Formularfelder, API-Payloads, Konfigurationsobjekte), bei denen `null`, `undefined`, Leerzeichen-Strings, leere
Collections und Objekte ohne Eigenschaften als leer behandelt werden sollen.

> **Hinweis für TypeScript-Nutzer:**
>
> `isEmpty` ist ein Hilfsprogramm, das einen Boolean zurückgibt (kein TypeScript-Typ-Prädikat), daher schränkt es Typen
> nicht von selbst ein; verwende es für Validierung/Verzweigungen statt für Compile-Time-Narrowing.

### Vorteile

- Behandelt `null` und `undefined` bei Leerheitsprüfungen als `true`.
- Betrachtet Strings, die nur aus Leerzeichen bestehen, als leer, indem vor der Längenprüfung getrimmt wird.
- Unterstützt gängige Container-Typen (Arrays, `Map`, `Set`) sowie einfache Objekte ohne eigene aufzählbare
  Eigenschaften.
- Vermeidet das Zählen geerbter Eigenschaften durch die Verwendung von `hasOwnProperty`-Prüfungen.
- Gibt ein einfaches boolesches Ergebnis (`true`/`false`) zurück, geeignet für Guards und Validierung.

## Verwendung

### Syntax

Funktion:

- `isEmpty(value)`

Parameter:

- `value`: Der Wert, der auf Leerheit geprüft werden soll.

### Lokaler Funktionen-Import

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.isEmpty(value)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>Datei wurde erzeugt am 6. Februar 2026 um 16:18:03 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>