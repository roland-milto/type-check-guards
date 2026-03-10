# areBinaries

## Bschrybig

Prüeft, öb de aagebni Wert es nid-leers Array vo gültige Binär-Strings esch, und git nume denn `true` zrugg, wenn alli
Iträg d'Validierig bestönd.

### Aawändig

Bruuch `areBinaries`, wenn du e unbekannti Lischt (z.B. us JSON, Formular oder APIs) überchunsch und sicherstelle
muesch, dass es es nid-leers Array vo Binär-Strings esch, bevor du s'parsisch oder verarbeitisch.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `areBinaries`, zum unbekannte Input z'validiere, bevor du Binär-Strings i Numbers/BigInts umwandelisch; es
> stellt sicher, dass s'Array nid leer esch und jedes Element en gültige Binär-String esch.

### Vorteil

- Validiert, dass en Wert esch es nid-leers Array, wo jedes Element en gültige Binär-String esch.
- Git es eifachs boolesches Resultat (`true`/`false`) zrugg, passend für Guards, früehi Returns und Input-Validierig.
- Verhindert nachfolgendi Parsing-Fähler, indem Arrays abglehnt wärde, wo irgend en nid-binäre Itrag enthalte.

## Verwendig

### Syntax

Funktion:

- `areBinaries(array)`

Parameter:

- `array`: De Wert, wo söll überprüeft werde.

### Lokale Funktions-Import

```ts
import { areBinaries } from "@type-check/guards";

const a = ["0b1010", "1101"];
const b = ["1010", "1020"];

console.log(areBinaries(a)); // wahr
console.log(areBinaries(b)); // falsch
console.log(areBinaries([])); // falsch
```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.areBinaries(array)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [areBinaries](../_analysis/areBinaries.md)

<br>

---

<small>D Datei isch am 31 January 2026 at 23:14:34 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>