# areTrue

## Bschrybig

Prüeft, ob es nöd-läärs Array nume d boolesche Wärte `true` enthält.

### Aawändig

Bruuch `areTrue`, zum validiere, dass e Set vo Vorbedingige oder Feature-Flags alli aktiviert sind (alli Wärte sind
`true`), bevor du wiiter machsch, und behandl lääri oder falsch formatierti Iigabe als nöd erfüllt (`false`).

> **Hinwiis für TypeScript-Nutzer:**
>
> `areTrue` git bi eme lääre Array und bi Arrays, wo irgendein Wert nöd strikt `true` isch, `false` zrugg.

### Vorteil

- Git nume `true` zrugg nume, wänn jedes Element strikt `true` isch und s Array nöd läär isch.
- Bricht schnäll ab: git `false` zrugg, sobald e Wert gfunde wird, wo nöd `true` isch.
- Lehnt ungültigi Iigabe (kei Arrays oder lääri Arrays) ab, indem `false` zrugggeh wird.

## Verwendig

### Syntax

Funktion:

- `areTrue(array)`

Parameter:

- `array`: S Array, wo söll druf prüeft werde, ob alli Wärte `true` sind.

### Lokale Funktions-Import

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.areTrue(array)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [areTrue](../_analysis/areTrue.md)

<br>

---

<small>D Datei isch am 30 January 2026 at 13:51:15 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>