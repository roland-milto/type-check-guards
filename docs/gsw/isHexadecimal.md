# isHexadecimal

## Bschrybig

`isHexadecimal` prüeft, öb en gegebene Wert es hexadezimales String-Literal mit obligatorischem `0x`/`0X`-Prefix isch.

### Aawändig

Bruuch `isHexadecimal`, zum Konfigurationswert, API-Payload-Fälder oder CLI-Argument z validiere, wo müend als
hexadezimali String-Literal (z. B. IDs, Masks oder Addresses) aagee werde und kei umgebendi Leerzeiche dörfed enthalte.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `isHexadecimal`, wänn du Benutzer-Input oder serialisierti Date als sträng hexadezimali Literal-Strings (
> inklusive em `0x`/`0X`-Prefix) validiere muesch, bevor du si parschisch oder umwandelisch.

### Vorteil

- Validiert, dass en Wert en String isch und emene stränge hexadezimale Literal-Format entspricht (bruucht s `0x`/`0X`
  -Prefix).
- Lehnt Strings mit füehrende oder abschliessende Leerzeiche ab und hilft so, e versehentlichi Akzeptanz vo
  ufgfüettertem Input z vermiide.
- Unterstützt es optionales Vorzeiche und isch für Prefix und Ziffern nöd fallabhängig, und git voruusgsehbar `true`/
  `false` zrugg.

## Verwendig

### Syntax

Funktion:

- `isHexadecimal(value)`

Parameter:

- `value`: De Wert, wo söll überprüeft werde.

### Lokale Funktions-Import

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // wahr
isHexadecimal("-0Xff"); // wahr
isHexadecimal("1A2B"); // falsch (Prefix fählt)
isHexadecimal(" 0x1A2B"); // falsch (füehrendi Leerzeiche)
isHexadecimal(0x1a2b); // falsch (kei String)

```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.isHexadecimal(value)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [isHexadecimal](../_analysis/isHexadecimal.md)

<br>

---

<small>D Datei isch am 31 January 2026 at 22:58:44 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>