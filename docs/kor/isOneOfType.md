# isOneOfType

## 설명

`isOneOfType`은 주어진 `value`가 제공된 타입 문자열 중 최소 하나와 일치하는지 판단하며, 어떤 일치가 발견되면 `true`를, 그렇지 않으면 `false`를 반환합니다.

### 사용 사례

느슨하게 타입이 지정되었거나 외부에서 들어온 데이터(예: 파싱된 JSON, 쿼리 파라미터)를 검증할 때, 추가 로직을 진행하기 전에 `number` 또는 `string`과 같은 여러 허용 가능한 런타임 타입을
허용하여 확인합니다.

> **TypeScript 사용자를 위한 참고:**
>
> 여러 허용 타입 중 어느 하나와 값이 일치하는지 런타임에서 검사하고 싶을 때 `isOneOfType`을 사용하세요. 최소 하나의 타입이 일치하면 `true`를, 그렇지 않으면 `false`를 반환합니다.

### 장점

- 단일 호출로 값을 여러 허용 타입과 비교하여, 첫 번째로 일치하는 경우 `true`를 반환합니다.
- `unknown` 입력과 함께 동작하므로 런타임 경계(예: 외부 데이터, 사용자 입력)에서 유용합니다.
- 조건문 로직 및 조기 반환과 잘 결합되는 간단한 불리언 결과(`true`/`false`)를 제공합니다.

## 사용법

### 문법

함수:

- `isOneOfType(value, types)`

매개변수:

- `value`: 지정된 타입들과 비교하여 검사할 값입니다.
- `types`: 값의 가능한 타입을 나타내는 타입 문자열 배열입니다.

### 로컬 함수 임포트

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // input은 런타임에서 객체입니다
}

console.log(isOneOfType(3, ["number", "string"])); // true
console.log(isOneOfType("hello", ["number", "boolean"])); // false

```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.isOneOfType(value, types)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [isOneOfType](../_analysis/isOneOfType.md)

<br>

---

<small>이 파일은 2026년 2월 6일 오후 1:52:51 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>