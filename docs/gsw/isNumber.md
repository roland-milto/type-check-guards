# isNumber

## Bschrybig

`isNumber` prüeft, öb en Wert e endli, nid-`NaN` Zahle isch.

### Aawändig

Validier numerischi Eingabe us nid-vertraute Quelle (Formular, Query-Params, JSON-Payloads) vor em Rächne, em Spichere
oder Range-Checks, demit nume endli Zahle düregönd (`true`) und alles andere `false` zrugg git.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `isNumber`, zum `unknown`-Wert z validiere, bevor du Arithmetik machsch; es lehnt `NaN`, `Infinity` und
`-Infinity` ab.

### Vorteil

- Git `true` nume für echti JavaScript-Zahle zrugg (Typprüefig plus Ablehnig vo `NaN` und Unendlichkeit).
- Verhindert tüüfi Validierig-Fehler, wo `NaN`, `Infinity` oder `-Infinity` us Verseh als Zahle düregönd.
- Funktioniert guet als Runtime-Guard für unbekannti Input (z.B. JSON, Benutzereingab, externi APIs).
- Eifach, schnäll und ohni Nebenwirkige.

## Verwendig

### Syntax

Funktion:

- `isNumber(value)`

Parameter:

- `value`: De Wert, wo söll überprüeft werde.

### Lokale Funktions-Import

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // input isch e gültigi endli Zahl
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.isNumber(value)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>D Datei isch am 30 January 2026 at 13:09:03 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>