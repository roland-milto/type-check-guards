# areEqual

## Bschrybig

`areEqual` prüeft, öb alli Element i ere Array gliich sind wie en gegebene erwartete Wert, und git nume bi nöd-leere
Arrays `true` zrugg, wänn jedes Item passt.

### Aawändig

Validier, dass e Lischt nume e einzigi erlaubti Wert enthält (z. B. alli Status-Flags sind `true`, alli Rolle sind
`"admin"`, oder alli numerische Iiträg sind gliich wie e erforderligi Konstante), und behandlet leeri Iigab als
ungültig (`false`).

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `areEqual`, wänn du e strängi Prüefig für alli Items bruuchsch; es git `false` zrugg für leeri Arrays und für
> jedi Iigab, wo kei Array isch oder nöd gfüllt isch.

### Vorteil

- Git `true` nume zrugg, wänn jedes Element em erwartete Wert entspricht; suscht git's `false` zrugg.
- Schnäll am End: hört uf z prüefe, sobald es Element gfunde wird, wo nöd passt.
- Schützt vor ungültige Iigab, indem `false` zrugggeh wird, wänn d Iigab kei gfüllti Array isch.

## Verwendig

### Syntax

Funktion:

- `areEqual(value, expected)`

Parameter:

- `value`: D Array, wo söll überprüeft werde.
- `expected`: S Element, wo jedes Array-Item drgäge vergliche wird.

### Lokale Funktions-Import

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.areEqual(value, expected)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [areEqual](../_analysis/areEqual.md)

<br>

---

<small>D Datei isch am 31 January 2026 at 23:50:33 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>