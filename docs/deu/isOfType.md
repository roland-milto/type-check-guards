# isOfType

## Beschreibung

Bestimmt, ob ein gegebener `value` zu einem angegebenen Typ-String passt, wobei für Primitive `typeof` und für komplexe
Typen ein Fallback verwendet wird.

### Anwendungsfall

Validiere und verenge `unknown`-Eingaben (z. B. API-Antworten, Benutzereingaben, geparstes JSON), indem du prüfst, ob
ein Wert einem erwarteten Typ-String entspricht, bevor du typspezifische Operationen ausführst.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `isOfType`, um bei der Arbeit mit `unknown`-Werten nach Laufzeittypen zu verzweigen; es gibt `true`/`false`
> zurück und behandelt `null` und `undefined` explizit.

### Vorteile

- Prüft Primitive über direktes `typeof` für Geschwindigkeit und Klarheit.
- Behandelt `null` und `undefined` korrekt, die `typeof` allein nicht wie beabsichtigt unterscheiden kann.
- Unterstützt komplexe oder benutzerdefinierte Typ-Strings über einen Fallback-Vergleich mittels `getTypeOf`.
- Gibt ein einfaches boolesches Ergebnis (`true`/`false`) zurück, geeignet für Guards und Verzweigungen.

## Verwendung

### Syntax

Funktion:

- `isOfType(value, type)`

Parameter:

- `value`: Der Wert, der gegen den `type` geprüft werden soll.
- `type`: Die String-Repräsentation des Typs, gegen den geprüft werden soll.

### Lokaler Funktionen-Import

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // input ist hier eine Zahl
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // input ist hier eine Zeichenkette
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));
```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.isOfType(value, type)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>Datei wurde erzeugt am 30. Januar 2026 um 16:59:15 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>