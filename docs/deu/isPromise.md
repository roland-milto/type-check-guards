# isPromise

## Beschreibung

Bestimmt, ob ein gegebener Wert ein `Promise` ist.

### Anwendungsfall

Verwende `isPromise`, um unbekannte Eingaben zu validieren, bevor du sie als `Promise` behandelst, z. B. beim Umgang mit
Werten aus Plugins, dynamischen Imports oder locker typisierten APIs.

> **Hinweis für TypeScript-Nutzer:**
>
> `isPromise` prüft mittels `instanceof Promise` und gibt daher nur für echte `Promise`-Instanzen `true` zurück (nicht
> für generische Thenables).

### Vorteile

- Bietet eine einfache Laufzeitprüfung, ob ein Wert ein `Promise` ist.
- Hilft dabei, Codepfade abzusichern, die eine echte `Promise`-Instanz erfordern, und gibt dabei zuverlässig `true` oder
  `false` zurück.
- Vermeidet Fehlalarme durch „thenable“-Objekte (z. B. `{ then() {} }`), indem eine tatsächliche `Promise`-Instanz
  vorausgesetzt wird.

## Verwendung

### Syntax

Funktion:

- `isPromise(value)`

Parameter:

- `value`: Der zu prüfende Wert.

### Lokaler Funktionen-Import

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // wahr
console.log(isPromise(b)); // falsch
console.log(isPromise(123)); // falsch
console.log(isPromise(null)); // falsch

```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.isPromise(value)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>Datei wurde erzeugt am 30. Januar 2026 um 23:52:33 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>