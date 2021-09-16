/* Implement the Absolute type. A type that take string, number or bigint. The output should be a positive number string */

namespace TypeAbsolute {
	type Test = -100
	type Result = Absolute<Test> // expected to be "100"

	type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer S}` ? S : `${T}`
}
