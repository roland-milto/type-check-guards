# isNull

## Апісанне

Вызначае, ці з'яўляецца перададзенае `value` значэннем `null`.

### Выкарыстанне

Выкарыстоўвайце `isNull` для валідацыі ўваходных даных або палёў payload API, дзе `null` з'яўляецца значным
значэннем-сігналам і павінна апрацоўвацца інакш, чым `undefined` або іншыя значэнні.

> **Падказка для карыстальнікаў TypeScript:**
>
> Выкарыстоўвайце `isNull`, калі трэба адрозніваць `null` ад `undefined` і іншых «falsy» значэнняў; ён вяртае `true`
> толькі для `null`.

### Перавагі

- Забяспечвае дакладную праверку на `null`, не змешваючы яго з `undefined`.
- Надзейна працуе для любога тыпу ўваходных даных, бо прымае `unknown`.
- Простая, хуткая і без пабочных эфектаў; вяртае толькі `true` або `false`.

## Выкарыстанне

### Сінтаксіс

Функцыя:

- `isNull(value)`

Параметры:

- `value`: Значэнне, якое трэба праверыць на `null`.

### Лакальны імпарт функцыі

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // праўда
console.log(isNull(b)); // няпраўда

if (isNull(a)) {
  // a тут null
}
```

### Глабальны імпарт аб’екта

Каб імпартаваць функцыі як глабальныя метады аб’екта, выкарыстоўвайце:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступны метад будзе даступны глабальна:

- `Type.isNull(value)`

## Аналіз функцый

Таблічны аналіз таго, які вынік атрымліваецца пры перадачы розных параметраў у функцыі, задокументаваны
тут: [isNull](../_analysis/isNull.md)

<br>

---

<small>Файл быў створаны 31 January 2026 at 15:38:37 (UTC) з выкарыстаннем *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ад *
*[Roland Milto](https://roland-milto.de/)**.</small>