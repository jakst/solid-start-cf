// @refresh reload
import { createSignal } from "solid-js"
import "./app.css"

if (process.env.abc !== "123") throw new Error("abc is not 123")

export default function App() {
	const [count, setCount] = createSignal(0)

	return (
		<main>
			<h1>Hello world!</h1>
			<button class="increment" onClick={() => setCount(count() + 1)}>
				Clicks: {count()}
			</button>
			<p>
				Visit{" "}
				<a href="https://start.solidjs.com" target="_blank">
					start.solidjs.com
				</a>{" "}
				to learn how to build SolidStart apps.
			</p>
		</main>
	)
}
