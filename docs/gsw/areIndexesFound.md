# areIndexesFound

## Bschrybig

`areIndexesFound` prüeft, öb en Wärt e nöd-leeri Array isch, wo alli Element gültigi Index sind, und git `true` zrugg,
wänn das so isch, und susch `false`.

### Aawändig

Validier vom Benutzer aagee oder externi Date (z. B. parste JSON), wo als Lischte vo Index erwartet werde, bevor mer sie
zum Zuegriff uf Arrays oder zum Slice vo Arrays bruucht.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `areIndexesFound`, zum unbekannti Yygabe z'validiere, bevor du ihri Element als Array-Index behandlisch; es git
`false` zrugg für leeri Arrays und für Arrays, wo nöd-Index-Wärt enthalte.

### Vorteil

- Git `true` nume zrugg, wänn d'Yygab e gfùllti Array isch und jedes Element e gültige Index isch.
- Bricht schnäll ab: git `false` zrugg, sobald es Element gfunde wird, wo kei Index isch.
- Nützlich als Guard, bevor mer Wärt als Array-Positione oder Offsets bruucht.

## Verwendig

### Syntax

Funktion:

- `areIndexesFound(array)`

Parameter:

- `array`: D'Array, wo uf Index-Konformität söll überprüeft werde.

### Lokale Funktions-Import

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // wahr
console.log(areIndexesFound(b)); // falsch
console.log(areIndexesFound(c)); // falsch

if (areIndexesFound(a)) {
  // Da isch `a` als es gfùllts Array vo Index bestätigt.
  const firstIndex = a[0];
  console.log(firstIndex);
}

```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.areIndexesFound(array)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>D Datei isch am 31 January 2026 at 00:41:58 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>