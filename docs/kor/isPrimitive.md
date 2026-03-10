# isPrimitive

## 설명

`isPrimitive`는 주어진 값이 원시 타입(`null`, `undefined`, `boolean`, `number`, `string`, `bigint`, `symbol`)인지 여부를 판별합니다.

### 사용 사례

런타임에서 입력(예: API 페이로드 필드, 구성 값, 사용자 제공 데이터)을 검증하여, 직렬화/로깅/원시 타입 전용 연산을 적용하기 전에 값이 원시 타입인지 확인합니다.

> **TypeScript 사용자를 위한 참고:**
>
> `isPrimitive`를 사용해 `unknown` 입력을 객체나 함수로 취급하기 전에 가드하세요. 원시 타입에는 `true`를, 객체와 함수에는 `false`를 반환합니다.

### 장점

- 값이 JavaScript 원시 타입인지 여부를 빠르고 할당 없이 확인합니다.
- `null`을 원시 타입으로 올바르게 취급합니다(비록 `typeof null`이 `"object"`이더라도).
- 객체 전용 연산을 수행하기 전에 `unknown` 값을 좁히는 데 도움이 됩니다.

## 사용법

### 문법

함수:

- `isPrimitive(value)`

매개변수:

- `value`: 원시 타입인지 확인할 값입니다.

### 로컬 함수 임포트

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.isPrimitive(value)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>이 파일은 2026년 1월 30일 오후 11:56:45 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>