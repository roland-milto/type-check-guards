# areWeakMaps

## Bschrybig

`areWeakMaps` prüeft, öb e Wert es nöd-läärs Array isch, wo jedes Element e `WeakMap` isch; es git nume denn `true`
zrugg und susch `false`.

### Aawändig

Validier Runtime-Date (z. B. parsti JSON-Date, Plugin-Iigabe oder locker typisierti Konfiguration), zum sicher z stelle,
dass s es nöd-läärs Array vo `WeakMap`-Instanze isch, bevor mer drüber iteriert und `WeakMap`-Methoden ufrüeft; git
`false` zrugg, wänn irgendeis Element kei `WeakMap` isch oder wänn s Array läär isch.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `areWeakMaps`, zum unbekannti Iigabe z validiere, bevor du si als es nöd-läärs `WeakMap[]` behandlisch; für
> lääreri Arrays git s `false` zrugg.

### Vorteil

- Stellt sicher, dass jedes Element im übergähne Array e `WeakMap`-Instanz isch.
- Git für lääreri Arrays `false` zrugg und verhindert so, dass „kei Date“ us Verseh als gültigi Iigab akzeptiert wird.
- Praktisch als Guard, bevor mer uf allne Element `WeakMap`-spezifischi Operatione uusführt.

## Verwendig

### Syntax

Funktion:

- `areWeakMaps(array)`

Parameter:

- `array`: S Array, wo uf `WeakMap`-Instanze söll überprüeft werde.

### Lokale Funktions-Import

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // list isch es nid-läärs Array vo WeakMap-Instanze
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // kei nid-läärs WeakMap[]
}

```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.areWeakMaps(array)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>D Datei isch am 30 January 2026 at 13:37:14 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>