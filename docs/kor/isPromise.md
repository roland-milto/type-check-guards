# isPromise

## 설명

주어진 값이 `Promise`인지 여부를 판별합니다.

### 사용 사례

플러그인, 동적 import, 또는 느슨하게 타입이 지정된 API에서 반환된 값을 처리할 때처럼, 알 수 없는 입력을 `Promise`로 취급하기 전에 `isPromise`로 검증하는 데 사용하세요.

> **TypeScript 사용자를 위한 참고:**
>
> `isPromise`는 `instanceof Promise`로 검사하므로, 실제 `Promise` 인스턴스에 대해서만 `true`를 반환합니다(일반적인 thenable은 해당하지 않음).

### 장점

- 값이 `Promise`인지 여부를 간단히 런타임에서 확인할 수 있습니다.
- 실제 `Promise` 인스턴스가 필요한 코드 경로를 보호하는 데 도움이 되며, 예측 가능하게 `true` 또는 `false`를 반환합니다.
- 실제 `Promise` 인스턴스를 요구함으로써 “thenable” 객체(예: `{ then() {} }`)로 인한 오탐을 방지합니다.

## 사용법

### 문법

함수:

- `isPromise(value)`

매개변수:

- `value`: 검사할 값입니다.

### 로컬 함수 임포트

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // 참
console.log(isPromise(b)); // 거짓
console.log(isPromise(123)); // 거짓
console.log(isPromise(null)); // 거짓

```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.isPromise(value)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>이 파일은 2026년 1월 30일 오후 11:53:19 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>