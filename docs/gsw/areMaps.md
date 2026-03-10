# areMaps

## Bschrybig

`areMaps` bestimmt, öb es gäbigs Array nöd leer isch und alli sini Element `Map`-Instanze sind.

### Aawändig

Unbekannti Iigabe (z. B. us JSON-Parsing, externe APIs oder dynamische Quelle) validiere, bevor mer si als nöd leeri
Lischt vo `Map`-Objekt behandelt.

> **Hinwiis für TypeScript-Nutzer:**
>
> Git bi eme leere Array `false` zrugg; es git nume denn `true`, wänn s Array gfüllt isch und jedes Element e `Map`
> isch.

### Vorteil

- Stellt sicher, dass jedes Element e `Map`-Instanz isch, und git nume denn `true` zrugg, wänn s ganze Array d Prüefig
  besteht.
- Lehnt leeri Arrays absichtlich ab und verhindert so, dass „kei Date“ us Verseh als gültigi Iigab akzeptiert wird.
- Nützlich als Guard, bevor mer `Map`-spezifischi Operatione (z. B. `.get()`, `.set()`, Iteration) über e Sammlig
  usfüehrt.

## Verwendig

### Syntax

Funktion:

- `areMaps(array)`

Parameter:

- `array`: S Array, wo söll überprüeft werde.

### Lokale Funktions-Import

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  // items isch garantiert e nid-läärs Array vo Map-Instanze zur Laufzyt
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // falsch bi: lääre Arrays, oder Arrays wo irgend e nid-Map-Wärt enthalte
}

```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.areMaps(array)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [areMaps](../_analysis/areMaps.md)

<br>

---

<small>D Datei isch am 31 January 2026 at 16:12:35 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>