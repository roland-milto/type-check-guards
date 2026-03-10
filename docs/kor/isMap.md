# isMap

## 설명

주어진 `value`가 `Map`인지 확인하며, `Map`이면 `true`를 반환하고 그렇지 않으면 `false`를 반환합니다.

### 사용 사례

JSON 파싱, 외부 API, 사용자 입력 등에서 `unknown` 값을 받았을 때 `Map` 작업을 수행하기 전에 해당 값이 `Map`인지 보장해야 한다면 `isMap`을 사용하세요.

> **TypeScript 사용자를 위한 참고:**
>
> `isMap`은 값이 `Map`이면 `true`를, 그렇지 않으면 `false`를 반환하는 런타임 가드입니다. `Map` API를 호출하기 전에 `unknown`을 좁히는 데 사용하세요.

### 장점

- 값이 `Map`인지 여부를 빠르게 런타임에서 확인할 수 있습니다.
- `get`, `set`, `has` 같은 `Map` 메서드가 필요한 코드 경로를 가드하여 타입 오류를 방지하는 데 도움이 됩니다.
- `unknown` 입력을 처리할 때 가벼운 검증 단계로 잘 동작합니다.

## 사용법

### 문법

함수:

- `isMap(value)`

매개변수:

- `value`: 확인할 값입니다.

### 로컬 함수 임포트

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.isMap(value)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [isMap](../_analysis/isMap.md)

<br>

---

<small>이 파일은 2026년 1월 31일 오후 4:05:03 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>