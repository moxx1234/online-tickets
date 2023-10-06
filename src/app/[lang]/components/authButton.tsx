'use client'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function AuthButton({
	authIn,
	authOut
}: {
	authIn: string,
	authOut: string
}) {
	const { data: session } = useSession()

	return (
		<div className='text-center'>
			{session ?
				<>
					<p>{session.user?.name}</p>
					<button onClick={() => signOut()}>{authOut}</button>
				</>
				:
				<>
					<button onClick={() => signIn()}>{authIn}</button>
				</>
			}
		</div>
	)
}