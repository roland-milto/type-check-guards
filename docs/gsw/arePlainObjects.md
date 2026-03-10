# arePlainObjects

## Bschrybig

Prüeft, öb alli Element vo eme Array eifachi Objekt sind, und git nume denn `true` zrugg, wänn jedes Element
qualifiziert.

### Aawändig

Validier externi oder nöd typisierti Date (z.B. parste JSON, API-Payloads, Formular-Übermittlige), zum sicher z sii,
dass du es nöd-läärs Array becho hesch, wo jede Itrag es eifachs Objekt isch, bevor du drüber iteriersch und Eigeschafte
uuslisch.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `arePlainObjects`, zum unbekannte Input z validiere, bevor du’s i TypeScript als `Record<string, unknown>[]` (
> oder e strängeri Objekt-Form) behandlisch.

### Vorteil

- Stellt sicher, dass jedes Element im Input-Array es eifachs Objekt isch, und git nume denn `true` zrugg, wänn alli
  Items passe.
- Lehnt ungültigi Inputs früeh ab (kei Arrays oder läär Arrays), indem `false` zrugggeh wird.
- Behandlet sowohl Objekt-Literal-Objekt wie au `Object.create(null)`-Objekt als gültigi eifachi Objekt.

## Verwendig

### Syntax

Funktion:

- `arePlainObjects(array)`

Parameter:

- `array`: S Array, wo uf eifachi Objekt-Element söll überprüeft werde.

### Lokale Funktions-Import

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // wahr
const b = arePlainObjects([{}, Object.create(null)]); // wahr
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // falsch
const d = arePlainObjects([] as unknown[]); // falsch
```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.arePlainObjects(array)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>D Datei isch am 30 January 2026 at 16:25:16 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>