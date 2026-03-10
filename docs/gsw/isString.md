# isString

## Bschrybig

`isString` bestimmt, öb en gegebene Wert en String isch.

### Aawändig

Benutzerigabä, API-Payload-Fälder oder Konfigurationswärte zur Laufziit validiere, demit sicher isch, dass en Wert en
String isch, bevor mer String-Operatione aawändet (z. B. trimme, splitte, Gross-/Chliischribig umwandle).

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `isString`, zum `unknown` oder locker typisierti Wärte z validiere, bevor du String-Methodä ufruefsch; es git
> nume denn `true` zrugg, wänn `typeof value === "string"`.

### Vorteil

- Eifachi und schnälli Prüefig mit `typeof`.
- Git es vorussägbares Boolesches Resultat zrugg: `true` für Strings, susch `false`.
- Funktioniert für läär und nöd-läär Strings.
- Nützlich als liichtgwichtigi Runtime-Absicherig, bevor mer string-spezifischi Operatione usführt.

## Verwendig

### Syntax

Funktion:

- `isString(value)`

Parameter:

- `value`: De Wert, wo uf String-Typ söll prüeft werde.

### Lokale Funktions-Import

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // input isch do e String
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.isString(value)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [isString](../_analysis/isString.md)

<br>

---

<small>D Datei isch am 30 January 2026 at 13:14:00 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>