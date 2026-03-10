# isBinary

## Bschrybig

`isBinary` bestimmt, öb e Wert e Binär-String isch (optional mit `0b`/`0B`-Präfix) und git `true` oder `false` zrugg.

### Aawändig

Validier vom User aagee Strings (z.B. Formularfälder, CLI-Args, Konfig-Wärt), zum sicher z stelle, dass si nume
Binärziffere enthalte, optional mit eme `0b`/`0B`-Präfix, bevor s wiiter verarbeitisch.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `isBinary` als Type Guard, bevor du e String zu `BigInt`/`Number` parschisch oder umwandelisch, zum ungültigi
> Inputs z vermeide.

### Vorteil

- Akzeptiert Binär-Strings mit oder ohni s `0b`/`0B`-Präfix.
- Lehnt läär Strings und Strings mit führende/abschlüssende Leerzeiche (ASCII ≤ 32) ab.
- Git `true`/`false` zrugg, ohni e Exception z schiesse, drum isch s sicher bi unbekannte Inputs.

## Verwendig

### Syntax

Funktion:

- `isBinary(value)`

Parameter:

- `value`: Dr Wert, wo söll überprüeft werde.

### Lokale Funktions-Import

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); // wahr
const b = isBinary("1010");   // wahr
const c = isBinary("0b1020"); // falsch
const d = isBinary(0b1010);     // falsch

```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.isBinary(value)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [isBinary](../_analysis/isBinary.md)

<br>

---

<small>D Datei isch am 31 January 2026 at 23:09:54 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>