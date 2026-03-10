# isFinite

## Bschrybig

Bestimmt, öb e gegebnigi `value` e endlichi `number` isch.

### Aawändig

Bruuch `isFinite`, zum unbekannti Iigabe (z. B. us JSON, Formular oder APIs) z validiere, bevor du numerischi Berächnige
machsch, demit dr Wert e echt, endlichi Zahle isch.

> **Hinwiis für TypeScript-Nutzer:**
>
> `isFinite` git nume bi endliche Zahle `true` zrugg; es git `false` zrugg für `NaN`, `Infinity` und jede Wert, wo kei
> Zahle isch.

### Vorteil

- Bruucht s iigebaute `Number.isFinite` für e verlässliche Prüefig uf Endlichkeit.
- Git nume bi endliche Zahle `true` zrugg; git `false` zrugg für `NaN`, `Infinity` und Iigabe, wo kei Zahle sind.
- Eifachs, ohni Nebewürkige, e Prädikat wo sich guet für Validierig und Guard-Logik eignet.

## Verwendig

### Syntax

Funktion:

- `isFinite(value)`

Parameter:

- `value`: De Wert, wo uf Endlichkeit söll prüeft werde.

### Lokale Funktions-Import

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers isch: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // value isch do e endligi Zahl
  const doubled = value * 2;
  console.log(doubled);
}
```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.isFinite(value)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>D Datei isch am 30 January 2026 at 16:29:55 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>