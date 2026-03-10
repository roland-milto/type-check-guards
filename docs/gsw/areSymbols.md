# areSymbols

## Bschrybig

Prüeft, ob e Yygab e gfüllti Array isch, wo alli Element Symbol sind, und git `true` oder `false` zrugg.

### Aawändig

Validier, dass es Konfigurationsfeld (z. B. e Lischt vo einzigartige Keys, wo als Symbol repräsentiert sind) e nid-leeri
Array isch, wo nume Symbol enthaltet, bevor du's i APIs bruuchsch, wo `symbol[]` verlange.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `areSymbols`, zum unbekannti Yygabe z'validiere, bevor du si als `symbol[]` behandlisch; es git `false` zrugg
> für nid-Arrays und leeri Arrays.

### Vorteil

- Git `true` nume zrugg, wänn d'Yygab e nid-leeri Array isch und jedes Element es Symbol isch.
- Verhindert falschi Positiv, indem nid-Arrays und leeri Arrays dur d'interni Prüefig uf e gfüllti Array abgwise wärde.
- Nützlich als Runtime-Type-Guard, zum Symbol-only-Listene z'validiere, bevor mer si witerverarbeitet.

## Verwendig

### Syntax

Funktion:

- `areSymbols(array)`

Parameter:

- `array`: D'Array, wo söll druf prüeft wärde, ob si Symbol-Element het.

### Lokale Funktions-Import

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // a isch zur Laufzyyt es Array nume mit Symbol
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // falsch
```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.areSymbols(array)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>D Datei isch am 30 January 2026 at 14:21:46 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>