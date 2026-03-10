# areBuffers

## Bschrybig

`areBuffers` prüeft, öb dr übergeh Wert es nöd-leers, gfüllts Array isch, wo jedes Element es `Buffer` isch; git i dem
Fall `true` zrugg und susch `false`.

### Aawändig

Validier iichömmendi Chunk-Arrays (z. B. vo Streams, Datei-Uplods oder Netzwerk-Päckli), zum sicher z stelle, dass alli
Teil `Buffer`-Instanze sind, bevor mer si zämefüegt, dekodiert oder a kryptografischi bzw. binär-verarbeitendi Funktione
wiitergit.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `areBuffers`, zum `unknown[]` z validiere, bevor du Buffer-spezifischi APIs wie `Buffer.concat` ufruefsch,
> demit d Funktion nume denn `true` zrugg git, wänn jedes Element es `Buffer` isch.

### Vorteil

- Stellt sicher, dass jedes Element i de Iigab e Node.js-`Buffer`-Instanz isch, und git nume denn `true` zrugg, wänn s
  ganze Array passt.
- Lehnt ungültigi Iigabe früeh ab, indem es es nöd-leers, gfüllts Array verlangt; git `false` zrugg bi leere Arrays oder
  bi nöd-Arrays.
- Nützlich als Guard, bevor mer nume-Buffer-Operatione macht (z. B. Zämefüege, Hashing, binäri Protokoll).

## Verwendig

### Syntax

Funktion:

- `areBuffers(array)`

Parameter:

- `array`: S Array, wo uf Buffer-Instanze söll überprüeft werde.

### Lokale Funktions-Import

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.areBuffers(array)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>D Datei isch am 31 January 2026 at 16:25:16 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>