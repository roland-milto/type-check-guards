# areJson

## Bschrybig

Prüeft, öb alli Element vo eme Array JSON-Zeichechette sind, und git nume denn `true` zrugg, wänn s Array gfüllt isch
und jedes Item gültigs JSON isch; suscht git’s `false` zrugg.

### Aawändig

Validier iichommendi Date (z.B. us Query-Params, Umgebigsvariable oder externe APIs), wo du es Array vo JSON-codierte
Zeichechette erwartisch und leeri Arrays oder irgendwelli nöd-JSON-Iiträg wotsch abwiise.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `areJson`, wänn du wotsch validiere, dass es `unknown[]` nume us JSON-Zeichechette besteht, bevor du si
> parschisch (z.B. mit `JSON.parse`).

### Vorteil

- Git `true` zrugg nume denn zrugg, wänn jedes Element e gültigi JSON-Zeichechette isch; suscht git’s `false` zrugg.
- Scheitert schnäll: hört uf z prüefe, sobald es nöd-JSON-Element gfunde wird.
- Leeri Arrays wärde absichtlich abglehnt und liefere bi nöd-gfülltem Input `false`.

## Verwendig

### Syntax

Funktion:

- `areJson(array)`

Parameter:

- `array`: S Array, wo uf JSON-Zeichechette-Element prüeft wird.

### Lokale Funktions-Import

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // wahr
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // falsch
const empty = areJson([]); // falsch

```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.areJson(array)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [areJson](../_analysis/areJson.md)

<br>

---

<small>D Datei isch am 30 January 2026 at 16:15:54 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>