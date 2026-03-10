# isDecimal

## Bschrybig

`isDecimal` prüeft, öb en Wert e Dezimal-String-Darstellige isch, ohni führendi/abschlüssendi Leerzeiche und mit emene
gültige Dezimalformat.

### Aawändig

Validier Formularfälder, API-Payloads oder Konfigurationswert, wo als Dezimal-String (optional mit Vorzeiche) ohni
irgendwelli umgebendi Leerzeiche müend agäh werde, bevor si parst oder gspeicheret werde.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `isDecimal`, zum Benutzer-Iigabe z validiere, bevor du si umwandelisch (z.B. mit `Number(value)`), bsunders
> wenn Leerzeiche müend abglehnt werde.

### Vorteil

- Validiert strikt, dass d Iigab e String isch und emene Dezimal-Literal-Muster entspricht.
- Lehnt führendi und abschlüssendi Leerzeiche (inklusive Kontrollzeiche) ab, zum zwüschetüüti Parsings z vermiide.
- Schnelli Vorprüefige (Typprüefig und erschts/letschts Zeiche) bevor d Regex lauft.
- Git es eifachs Boolean-Resultat (`true`/`false`) zrugg, passend für Guards und Iigabvalidierig.

## Verwendig

### Syntax

Funktion:

- `isDecimal(value)`

Parameter:

- `value`: De Wert, wo uf es Dezimal-String-Format söll überprüeft werde.

### Lokale Funktions-Import

```ts
import { isDecimal } from "@type-check/guards";

const inputs: unknown[] = ["123.45", "0.99", "-42.0", 123.45, " 123.45", "123.45 "];

for (const v of inputs) {
  if (isDecimal(v)) {
    // v isch do e String da (zur Laufzyyt validiert)
    console.log("decimal:", v);
  } else {
    console.log("not decimal:", v);
  }
}

```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.isDecimal(value)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [isDecimal](../_analysis/isDecimal.md)

<br>

---

<small>D Datei isch am 31 January 2026 at 15:52:24 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>