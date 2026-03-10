# areOfType

## Bschrybig

Prüeft, öb alli Element im gähne `array` vom aagähne `type` sind.

### Aawändig

Bruuch `areOfType`, zum unbekannti Iigab (z.B. parsti JSON, API-Payloads, User-Iigab) z validiere, bevor du
typ-spezifischi Operatione uf jedem Element vo eme Array uusfüehrsch.

> **Hinwiis für TypeScript-Nutzer:**
>
> Wyl `areOfType` e Type-Guard isch, schränkt TypeScript s Array innerhalb vo eme `if (areOfType(...)) {}`-Block uf
`Array<DataTypeOf<T>>` i.

### Vorteil

- Stellt e TypeScript-Type-Guard bereit: wänn s `true` zruggit, wird d Iigab uf `Array<DataTypeOf<T>>` iigschränkt.
- Validiert jedes Element gäge dr gforderte Runtime-Typ und verhindert, dass Arrays mit gmischtä Type durechchömed.
- Scheitert schnäll: git `false` zrugg, sobald es Element gfunde wird, wo nöd passt.
- Lehnt Nicht-Arrays und läärä Arrays absichtlich ab (hängt vo `isFilledArray` ab).

## Verwendig

### Syntax

Funktion:

- `areOfType(array, type)`

Parameter:

- `array`: S Array, wo überprüeft werde söll.
- `type`: Dr Typ, wo bi jedem Element im Array drgäge überprüeft wird.

### Lokale Funktions-Import

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values isch jetzt number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // falsch

```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.areOfType(array, type)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>D Datei isch am 30 January 2026 at 17:09:35 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>