# isOfType

## Апісанне

Вызначае, ці адпавядае зададзенае `value` указанаму радку тыпу, выкарыстоўваючы `typeof` для прымітываў і запасны
варыянт для складаных тыпаў.

### Выкарыстанне

Валідаваць і звужаць `unknown`-увод (напрыклад, адказы API, увод карыстальніка, распарсены JSON), правяраючы, ці
з'яўляецца значэнне чаканым радком тыпу, перад выкананнем аперацый, спецыфічных для тыпу.

> **Падказка для карыстальнікаў TypeScript:**
>
> Выкарыстоўвайце `isOfType` для разгалінавання па тыпах падчас выканання пры працы са значэннямі `unknown`; ён вяртае
`true`/`false` і яўна апрацоўвае `null` і `undefined`.

### Перавагі

- Правярае прымітывы праз прамы `typeof` для хуткасці і яснасці.
- Карэктна апрацоўвае `null` і `undefined`, якія адзін толькі `typeof` не можа адрозніць так, як задумана.
- Падтрымлівае складаныя або карыстальніцкія радкі тыпаў праз запасное параўнанне з выкарыстаннем `getTypeOf`.
- Вяртае просты булеў вынік (`true`/`false`), прыдатны для ахоўнікаў і разгалінавання.

## Выкарыстанне

### Сінтаксіс

Функцыя:

- `isOfType(value, type)`

Параметры:

- `value`: Значэнне, якое трэба праверыць адносна `type`.
- `type`: Радковае прадстаўленне тыпу, з якім трэба параўнаць.

### Лакальны імпарт функцыі

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // input тут з'яўляецца лікам
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // input тут з'яўляецца радком
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));
```

### Глабальны імпарт аб’екта

Каб імпартаваць функцыі як глабальныя метады аб’екта, выкарыстоўвайце:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступны метад будзе даступны глабальна:

- `Type.isOfType(value, type)`

## Аналіз функцый

Таблічны аналіз таго, які вынік атрымліваецца пры перадачы розных параметраў у функцыі, задокументаваны
тут: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>Файл быў створаны 30 January 2026 at 16:58:37 (UTC) з выкарыстаннем *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ад *
*[Roland Milto](https://roland-milto.de/)**.</small>