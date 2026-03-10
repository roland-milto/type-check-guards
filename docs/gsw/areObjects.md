# areObjects

## Bschrybig

`areObjects` prüeft, öb e bereitgstellt gfüllti Array nume Objekte enthält.

### Aawändig

Bruuch `areObjects`, wänn du e unbekannti Array überchunsch (z. B. us em JSON-Parsen oder vo externe APIs) und
sicherstelle muesch, dass si nöd leer isch und dass jedes Element es Objekt isch, bevor du drüber iteriersch und uf
Objekt-Eigeschafte zuegriffscht.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `areObjects`, zum `unknown[]` z validiere, bevor du Items als Objekte behandlisch; es git `false` zrugg bi
> leere Arrays.

### Vorteil

- Git `true` nume zrugg, wänn d Iigab e gfüllti Array isch und jedes Element es Objekt isch.
- Bricht früeh ab und git `false` zrugg, sobald es nöd-Objekt-Element gfunde wird.
- Hilft, unbekannti Iigabe z validiere, bevor mer objekt-spezifischi Operatione usfüehrt.

## Verwendig

### Syntax

Funktion:

- `areObjects(array)`

Parameter:

- `array`: D Array, wo druf prüeft wird, öb si Objekt-Element het.

### Lokale Funktions-Import

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value isch es gfüllts Array vo Objäkt
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.areObjects(array)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [areObjects](../_analysis/areObjects.md)

<br>

---

<small>D Datei isch am 31 January 2026 at 00:08:47 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>