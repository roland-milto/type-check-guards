# isFinite

## Апісанне

Вызначае, ці з’яўляецца зададзенае `value` канечным `number`.

### Выкарыстанне

Выкарыстоўвайце `isFinite`, каб правяраць невядомае ўваходнае значэнне (напрыклад, з JSON, форм або API) перад
выкананнем лікавых вылічэнняў, гарантуючы, што значэнне — гэта рэальны, канечны лік.

> **Падказка для карыстальнікаў TypeScript:**
>
> `isFinite` вяртае `true` толькі для канечных лікаў; ён вяртае `false` для `NaN`, `Infinity` і любога значэння, якое не
> з’яўляецца лікам.

### Перавагі

- Выкарыстоўвае ўбудаваны `Number.isFinite` для надзейнай праверкі на канечнасць.
- Вяртае `true` толькі для канечных лікаў; вяртае `false` для `NaN`, `Infinity` і ўваходных значэнняў, якія не
  з’яўляюцца лікам.
- Просты прэдыкат без пабочных эфектаў, прыдатны для валідацыі і ахоўнай логікі.

## Выкарыстанне

### Сінтаксіс

Функцыя:

- `isFinite(value)`

Параметры:

- `value`: Значэнне, якое трэба праверыць на канечнасць.

### Лакальны імпарт функцыі

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers ёсць: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // value тут з'яўляецца скончаным лікам
  const doubled = value * 2;
  console.log(doubled);
}
```

### Глабальны імпарт аб’екта

Каб імпартаваць функцыі як глабальныя метады аб’екта, выкарыстоўвайце:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступны метад будзе даступны глабальна:

- `Type.isFinite(value)`

## Аналіз функцый

Таблічны аналіз таго, які вынік атрымліваецца пры перадачы розных параметраў у функцыі, задокументаваны
тут: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>Файл быў створаны 30 January 2026 at 16:28:57 (UTC) з выкарыстаннем *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ад *
*[Roland Milto](https://roland-milto.de/)**.</small>