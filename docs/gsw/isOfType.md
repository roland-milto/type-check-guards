# isOfType

## Bschrybig

Bestimmt, öb e gegebene `value` zu ere bestimmte Type-String passt, mit `typeof` für Primitive und eme Fallback für
komplexi Type.

### Aawändig

Validier und verengere `unknown`-Inputs (z.B. API-Antworte, Benutzerigab, parste JSON), indem du prüefsch, öb e Wert vom
erwartete Type-String isch, bevor du typ-spezifischi Operatione usfüehrsch.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `isOfType`, zum bi Runtime-Typen z verzweige, wänn du mit `unknown`-Werte schaffsch; es git `true`/`false`
> zrugg und behandelt `null` und `undefined` explizit.

### Vorteil

- Prüeft Primitive mit em direkte `typeof` für Gschwindigkeit und Klarheit.
- Handhabt `null` und `undefined` korrekt, wo `typeof` allei nöd so unterscheide cha wie gwünscht.
- Unterstützt komplexi oder benutzerdefinierti Type-Strings über e Fallback-Vergliich mit `getTypeOf`.
- Git es eifachs Boolean-Resultat (`true`/`false`) zrugg, geeignet für Guards und Verzweigige.

## Verwendig

### Syntax

Funktion:

- `isOfType(value, type)`

Parameter:

- `value`: De Wert, wo gege de `type` söll prüeft werde.
- `type`: D String-Darstellige vom Typ, wo drgege söll prüeft werde.

### Lokale Funktions-Import

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // input isch do e Zahl do
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // input isch do e Zeichenchätti do
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));

```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.isOfType(value, type)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>D Datei isch am 30 January 2026 at 16:59:46 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>