# isRegEx

## Bschrybig

Bestimmt, öb e aagebne Wert e `RegExp`-Instanz isch.

### Aawändig

Validier vom User aagebni oder dynamischi Wärt (z. B. Konfiguration, API-Payloads, Plugin-Inputs), bevor du si als
reguläre Uusdruck behandlisch.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `isRegEx`, zum `unknown`- (oder Union-) Wärt z'präzisiere, bevor du RegExp-spezifischi Eigeschafte oder Methode
> bruuchsch; es git nume denn `true` zrugg, wänn dr Wert e Instanz vo `RegExp` isch.

### Vorteil

- Stellt e eifachi Runtime-Type-Guard zur Verfüegig, zum prüefe, öb e Wert e `RegExp` isch.
- Hilft, Fähler z'verhüete, wänn dr Code e reguläre Uusdruck erwartet (z. B. bevor mer `test`, `exec` ufrüeft oder
  `source` uusliest).
- Funktioniert mit Regex-Literale und mit Instanze, wo über `new RegExp(...)` erstellt worde sind.
- Git es klaars Boolean-Resultat (`true`/`false`) zrugg, ohni bi nöd-Regex-Inputs e Exception z'werfe.

## Verwendig

### Syntax

Funktion:

- `isRegEx(value)`

Parameter:

- `value`: Dr Wert, wo söll überprüeft werde.

### Lokale Funktions-Import

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // input isch do e RegExp da
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.isRegEx(value)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>D Datei isch am 30 January 2026 at 23:29:26 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>