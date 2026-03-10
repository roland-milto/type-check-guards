# isObject

## 설명

주어진 `value`가 `object`인지(`null` 제외) 판별합니다.

### 사용 사례

프로퍼티에 접근하기 전에 알 수 없는 입력(예: 파싱된 JSON, API 응답, 이벤트 페이로드)을 검증할 때 `isObject`를 사용하여, 값이 `null`이 아닌 객체임을 보장하세요.

> **TypeScript 사용자를 위한 참고:**
>
> `isObject`는 boolean을 반환하는 런타임 가드이며, 특정 객체 형태로까지 좁혀 주지는 않습니다. 더 강한 타입 지정이 필요하다면 추가 검사(예: 프로퍼티 존재 여부)를 함께 사용하세요.

### 장점

- `typeof`가 `"object"`인 `null`이 아닌 값에 대해서만 `true`를 반환합니다.
- `null`이 객체로 취급되는 흔한 JavaScript 함정을 방지합니다.
- 일반 객체와 내장 객체 인스턴스(예: `Date`, `RegExp`) 모두에 대해 동작합니다.
- 방어적 프로그래밍과 입력 검증에 적합한 간단하고 빠른 런타임 검사입니다.

## 사용법

### 문법

함수:

- `isObject(value)`

매개변수:

- `value`: `object`인지 확인할 값입니다.

### 로컬 함수 임포트

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // input은 런타임에서 null이 아닌 객체입니다
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.isObject(value)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [isObject](../_analysis/isObject.md)

<br>

---

<small>이 파일은 2026년 1월 31일 오전 12:19:05 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>