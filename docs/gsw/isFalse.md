# isFalse

## Bschrybig

`isFalse` prüeft, öb e gegebene Wärt strikt gliich em boolsche Literal `false` isch.

### Aawändig

Unbekannti Date valideere (z. B. us JSON, Query-Params oder User-Input), wo nume dr expliziti boolschi Wärt `false` als
gültige Flag söll gälte, und alles andere söll abglehnt werde.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `isFalse`, wänn du nume s Literal `false` akzeptiere und alli andere falsy Wärt abwiise muesch; es git nume
> denn `true` zrugg, wänn `value === false`.

### Vorteil

- Bietet e strängi Prüefig uf s boolsche Literal `false` ohni Typumwandlig (Coercion).
- Hilft, `false` vo andere falsy Wärt wie `0`, `""`, `null` und `undefined` z unterscheide.
- Verbessert d Läsebarkeet, will d Absicht bi dr Validierig vo unbekanntem Input explizit gmacht wird.

## Verwendig

### Syntax

Funktion:

- `isFalse(value)`

Parameter:

- `value`: Dr Wärt, wo söll überprüeft werde.

### Lokale Funktions-Import

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // input is da gnau false do
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.isFalse(value)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [isFalse](../_analysis/isFalse.md)

<br>

---

<small>D Datei isch am 31 January 2026 at 16:21:39 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>