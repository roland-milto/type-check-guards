# isSet

## 설명

주어진 값이 `Set`인지 여부를 판별합니다.

### 사용 사례

외부 소스(예: JSON 파싱, 사용자 입력, 또는 서드파티 API)에서 들어오는 입력을 검증하여, `Set` 연산을 수행하기 전에 값이 `Set`인지 확인합니다.

> **TypeScript 사용자를 위한 참고:**
>
> `Set` 전용 API인 `.add`, `.has`, `.size` 등을 호출하기 전에 `isSet`을 사용해 `unknown` 값을 좁히세요.

### 장점

- 값이 `Set`인지 확인하기 위한 간단한 런타임 검사를 제공합니다.
- 값이 `Set`이 아닐 때 조기에 분기할 수 있어 타입 오류를 방지하는 데 도움이 됩니다.
- `Set`의 내용(비어 있거나 값이 있거나)에 관계없이 동작하며 일관되게 `true`/`false`를 반환합니다.

## 사용법

### 문법

함수:

- `isSet(value)`

매개변수:

- `value`: 확인할 값입니다.

### 로컬 함수 임포트

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  // a는 런타임에서 Set이다
  console.log(a.size);
}

console.log(isSet(b)); // false
```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.isSet(value)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [isSet](../_analysis/isSet.md)

<br>

---

<small>이 파일은 2026년 1월 30일 오후 11:10:10 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>