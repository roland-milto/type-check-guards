# areErrors

## Bschrybig

Prüeft, öb es Array nöd läär isch und nume `Error`-Objekt enthält, und git `true` oder `false` zrugg.

### Aawändig

Validiere, dass es zur Laufziit bereitgstells `unknown[]` (z. B. zämegfassti Fehlschläg, Validierigsergebnis oder
deserialisierti Date) e nöd lääri Liste vo `Error`-Objekt isch, bevor mer drüber iteriert, protokolliert oder wider
wirft.

> **Hinwiis für TypeScript-Nutzer:**
>
> `areErrors` git nume denn `true` zrugg, wänn s e gfüllts Array isch, wo jedes Item es `Error` isch; es git `false`
> zrugg bi eme lääre Array oder wänn irgendeis Element kei `Error` isch.

### Vorteil

- Stellt sicher, dass jedes Element e `Error`-Instanz isch, was e sicheri Fehlerbehandlig und Protokollierig
  ermöglichet.
- Lehnt läär Arrays ab und verhindert so, dass zuefälligi „kei Fehler“-Zueständ als gültigi Fehlerliste behandelt wärde.
- Funktioniert guet als Runtime-Guard, wenn mer mit `unknown[]`-Iigabe umgaht (z. B. vo APIs oder us `catch`-Blöck).

## Verwendig

### Syntax

Funktion:

- `areErrors(array)`

Parameter:

- `array`: S Array, wo uf `Error`-Objekt söll überprüeft werde.

### Lokale Funktions-Import

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value isch es nöd-läärs Array vo Error-Objäkt
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.areErrors(array)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [areErrors](../_analysis/areErrors.md)

<br>

---

<small>D Datei isch am 6 February 2026 at 12:33:41 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>