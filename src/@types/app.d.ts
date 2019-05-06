import 'react'
import { RouteComponentProps } from 'react-router'

declare type Omit<T, K> = Pick<T, Exclude<keyof T, K>>

declare module 'react' {
	interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
		jsx?: boolean
		global?: boolean
	}
}

declare module 'react-router-dom' {
	type ReturnedType<T> = T extends RouteComponentProps<any>
		? Pick<T, Exclude<keyof T, keyof RouteComponentProps<any>>>
		: T

	export function withRouter<P>(
		component: React.ComponentType<P>
	): React.ComponentClass<ReturnedType<P>>
}
