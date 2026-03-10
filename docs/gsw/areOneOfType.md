# areOneOfType

## Bschrybig

`areOneOfType` prüeft, öb alli Element i ere nöd-läärä Array eine vo de aagebne Runtime-Type sind.

### Aawändig

Validier iichommendi Date (z. B. parseds JSON), wo es Feld e nöd-läärä Array muess sii, wo sini Items uf e bekannti
Mengi vo primitive Type beschränkt sind; gib `false` zrugg, wänn d Array läär isch oder irgendein nöd erlaubte Typ
enthaltet.

> **Hinwiis für TypeScript-Nutzer:**
>
> Die Funktion git es Boolean zrugg und verengt d Array-Element-Type zur Compile-Ziit nöd; bruch sie als
> Runtime-Validierigsschritt vor em wiitere Verarbeite.

### Vorteil

- Stellt sicher, dass jedes Element i ere Array mindeschtens eim erlaubte Runtime-Typ entspricht, und git nume denn
  `true` zrugg, wänn d ganz Array bestoht.
- Lehnt ungültigi Iigabe früeh ab: git `false` zrugg, wänn `array` oder `types` läär isch oder kei gfüllti Array isch.
- Nützlich zum Validierä vo gmischt-typige Sammlige (z. B. Zahle und Strings) mit eim einzelne Ufruef vo `areOneOfType`.

## Verwendig

### Syntax

Funktion:

- `areOneOfType(array, types)`

Parameter:

- `array`: E Array vo Element, wo gege d aagebne Type söll überprüeft werde.
- `types`: E Array vo Strings, wo d Date-Type repräsentiered, gege die überprüeft werde söll.

### Lokale Funktions-Import

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.areOneOfType(array, types)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>D Datei isch am 31 January 2026 at 23:36:56 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>