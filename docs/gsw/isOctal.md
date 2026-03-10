# isOctal

## Bschrybig

Bestimmt, öb e Wert e gültigi Oktal-Literal-String isch (z. B. `0o755`).

### Aawändig

Validier Benutzer-Yygabe oder Konfigurationswert, wo als Oktal-Literal-String müend aageh werde (zum Bispil
Dateiberechtigungs-Modi wie `0o644`), bevor si parst oder umgwandle wirsch.

> **Hinwiis für TypeScript-Nutzer:**
>
> `isOctal` isch e Type-Guard (`value is string`). Nach em Resultat `true` schränkt TypeScript d'überprüefti Variable uf
`string` ii.

### Vorteil

- Stellt e strängi Type-Guard bereit: git nume `true` zrugg, wänn d'Yygab e String isch, wo em Oktal-Literal-Format
  entspricht.
- Lehnt läär Strings und Strings mit führende/abschlüssende Leerzeiche (ASCII-Control/Space) ab und vermindert so
  zuefälligi Treffer.
- Unterstützt es optionales Vorzeiche und isch nöd gross-/chlii-schrybig für s `0o`/`0O`-Prefix.
- Isch tolerant bi nöd-String-Yygabe, indem `false` zrugggeh wird statt e Fehler z'werfe.

## Verwendig

### Syntax

Funktion:

- `isOctal(value)`

Parameter:

- `value`: De Wert, wo söll überprüeft werde.

### Lokale Funktions-Import

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // wahr
console.log(isOctal(b)); // wahr
console.log(isOctal(c)); // falsch
console.log(isOctal(d)); // falsch

if (isOctal(a)) {
  // a isch do e String
  const normalized = a.toLowerCase();
  console.log(normalized);
}
```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.isOctal(value)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [isOctal](../_analysis/isOctal.md)

<br>

---

<small>D Datei isch am 30 January 2026 at 15:41:21 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>