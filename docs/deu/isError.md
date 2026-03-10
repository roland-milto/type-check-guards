# isError

## Beschreibung

Prüft, ob ein gegebener `value` eine Instanz von `Error` ist.

### Anwendungsfall

Verwende `isError`, wenn du einen `unknown`-Wert erhältst (z. B. aus einem `catch`-Block, einem Callback oder einer
externen Bibliothek) und du sicher feststellen musst, ob es sich um einen `Error` handelt, bevor du `message`, `name`
oder `stack` ausliest.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `isError`, um `unknown`-Werte (z. B. aus `catch`) abzusichern, bevor du sie als `Error` behandelst.

### Vorteile

- Bietet eine einfache Laufzeitprüfung, ob ein Wert eine `Error`-Instanz ist.
- Hilft dabei, unbekannte Eingaben einzugrenzen, bevor auf `Error`-Eigenschaften wie `message` oder `stack` zugegriffen
  wird.
- Reduziert das Risiko von Laufzeitausnahmen beim Umgang mit Werten aus `catch`, externen APIs oder untypisierten
  Quellen.

## Verwendung

### Syntax

Funktion:

- `isError(value)`

Parameter:

- `value`: Der Wert, der gegen den `Error`-Typ geprüft werden soll.

### Lokaler Funktionen-Import

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));

```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.isError(value)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [isError](../_analysis/isError.md)

<br>

---

<small>Datei wurde erzeugt am 6. Februar 2026 um 12:45:09 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>