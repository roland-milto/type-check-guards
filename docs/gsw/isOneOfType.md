# isOneOfType

## Bschrybig

`isOneOfType` bestimmt, öb e gegebne `value` mindeschtens eim vo de bereitgstellte Type-Strings entspricht, und git
`true` zrugg, wänn e Übereinstimmig gfunde wird, und susch `false`.

### Aawändig

Validier locker typisierti oder externi Date (z.B. parsti JSON, Query-Parameter), indem du mehri akzeptabli
Runtime-Type (wie `number` oder `string`) zue lohsch, bevor du mit wiitere Logik wiitermachsch.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `isOneOfType`, wänn du e Runtime-Prüefig wotsch, dass e Wert eine vo mehrere erlaubte Type trifft; es git
`true` zrugg, wänn mindeschtens e Type passt, susch `false`.

### Vorteil

- Prüeft e Wert i eim einzige Ufruef gege mehri erlaubti Type und git bi dr erschte Übereinstimmig `true` zrugg.
- Funktioniert mit `unknown`-Iigabe, was es nützlich macht a Runtime-Grenze (z.B. externi Date, Benutzer-Iigabe).
- Eifachs booleschs Resultat (`true`/`false`), wo sich guet mit bedingter Logik und früehe Returns zämesetze laht.

## Verwendig

### Syntax

Funktion:

- `isOneOfType(value, types)`

Parameter:

- `value`: Dr Wert, wo gege d spezifizierte Type söll prüeft werde.
- `types`: Es Array vo Type-Strings, wo d mögliche Type vom Wert repräsentiered.

### Lokale Funktions-Import

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // input isch es Objekt zur Laufzyyt
}

console.log(isOneOfType(3, ["number", "string"])); // true
console.log(isOneOfType("hello", ["number", "boolean"])); // false

```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.isOneOfType(value, types)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [isOneOfType](../_analysis/isOneOfType.md)

<br>

---

<small>D Datei isch am 31 January 2026 at 23:43:19 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>