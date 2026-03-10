# isNullOrUndefined

## 설명

주어진 값이 `null` 또는 `undefined`인지 확인합니다.

### 사용 사례

선택적 입력을 검증하거나 API 페이로드를 정규화하거나, 누락되었을 수 있는 값을 역참조하기 전에 코드 경로를 보호하는 등 `null`과 `undefined`를 모두 “값 없음”으로 취급해야 할 때
`isNullOrUndefined`를 사용하세요.

> **TypeScript 사용자를 위한 참고:**
>
> `isNullOrUndefined`를 사용해 속성에 접근하거나 메서드를 호출하기 전에 누락된 값에 대비하세요. 이 함수는 `null`과 `undefined`에 대해서만 `true`를 반환합니다.

### 장점

- `null`과 `undefined`를 한 곳에서 감지할 수 있는 명확하고 재사용 가능한 가드를 제공합니다.
- 조건문과 검증 로직에서 조합하기 쉬운 간단한 불리언(`true`/`false`)을 반환합니다.
- 속성에 접근하거나 메서드를 호출하기 전에 누락된 값을 확인하여 흔한 런타임 오류를 방지하는 데 도움이 됩니다.

## 사용법

### 문법

함수:

- `isNullOrUndefined(value)`

매개변수:

- `value`: `null` 또는 `undefined`인지 확인할 값입니다.

### 로컬 함수 임포트

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // 누락된 값 처리
}

console.log(isNullOrUndefined(b)); // true
console.log(isNullOrUndefined(c)); // false

```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.isNullOrUndefined(value)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>이 파일은 2026년 1월 31일 오전 12:34:14 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>