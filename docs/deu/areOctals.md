# areOctals

## Beschreibung

`areOctals` bestimmt, ob der bereitgestellte Wert ein nicht-leeres Array gültiger Oktalzeichenketten ist.

### Anwendungsfall

Verwende `areOctals` beim Validieren von Benutzereingaben, Konfigurationswerten oder API-Payloads, die Oktalliterale
enthalten müssen (z. B. Dateiberechtigungsmodi wie `0o755`), und du leere Arrays oder ungültige Einträge durch Rückgabe
von `false` ablehnen möchtest.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `areOctals`, um sicherzustellen, dass du ein nicht-leeres `unknown[]` hast, bei dem jeder Eintrag eine
> gültige Oktalzeichenkette ist, bevor du konvertierst (z. B. über `Number(...)` oder eigenes Parsing).

### Vorteile

- Validiert, dass ein Wert ein nicht-leeres Array ist, in dem jedes Element eine Oktalzeichenkette ist, und gibt nur
  dann `true` zurück, wenn alle Elemente bestehen.
- Scheitert früh: Gibt `false` zurück, sobald ein nicht-oktalisches Element gefunden wird.
- Nützlich als Guard vor dem Parsen oder Konvertieren von Oktalzeichenketten, um Laufzeitfehler und inkonsistente
  Eingabebehandlung zu vermeiden.

## Verwendung

### Syntax

Funktion:

- `areOctals(array)`

Parameter:

- `array`: Der zu prüfende Wert.

### Lokaler Funktionen-Import

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  // value ist ein nicht-leeres Array von Oktalzeichenketten
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.areOctals(array)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [areOctals](../_analysis/areOctals.md)

<br>

---

<small>Datei wurde erzeugt am 30. Januar 2026 um 14:44:43 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>