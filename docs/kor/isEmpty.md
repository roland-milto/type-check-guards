# isEmpty

## 설명

주어진 값이 비어 있는지 여부를 판단하며, `null`, `undefined`, 빈/공백 문자열, 빈 배열, 빈 `Map`/`Set`, 또는 자체 열거 가능한 속성이 없는 객체에 대해 `true`를 반환합니다.

### 사용 사례

`isEmpty`를 사용하여 여러 데이터 타입 전반에서 입력을 검증하고 누락/공백 값을 감지하세요(예: 폼 필드, API 페이로드, 설정 객체). 이때 `null`, `undefined`, 공백 문자열, 빈 컬렉션,
속성이 없는 객체는 비어 있는 것으로 처리되어야 합니다.

> **TypeScript 사용자를 위한 참고:**
>
> `isEmpty`는 불리언을 반환하는 유틸리티(타입스크립트 타입 프레디케이트가 아님)이므로, 자체적으로 타입을 좁히지 않습니다. 컴파일 타임 타입 좁히기보다는 검증/분기 용도로 사용하세요.

### 장점

- 비어 있음 검사에서 `null`과 `undefined`를 `true`로 처리합니다.
- 길이를 확인하기 전에 공백을 트리밍하여 공백만 있는 문자열을 비어 있는 것으로 간주합니다.
- 일반적인 컨테이너 타입(배열, `Map`, `Set`)과 자체 열거 가능한 속성이 없는 일반 객체를 지원합니다.
- `hasOwnProperty` 검사를 사용하여 상속된 속성을 세지 않습니다.
- 가드 및 검증에 적합한 단순한 불리언 결과(`true`/`false`)를 반환합니다.

## 사용법

### 문법

함수:

- `isEmpty(value)`

매개변수:

- `value`: 비어 있는지 확인할 값입니다.

### 로컬 함수 임포트

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.isEmpty(value)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>이 파일은 2026년 2월 6일 오후 4:19:16 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>