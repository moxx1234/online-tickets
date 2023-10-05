'use client'
import { GiHamburgerMenu } from "react-icons/gi"
import { CgClose } from "react-icons/cg"
import toggleMenu from "../../utils/toggleMenu"
import { useState } from "react"

export default function MenuToggler() {
	const [isOpen, setIsOpen] = useState(false)

	const switchState = () => {
		toggleMenu()
		setIsOpen(open => !open)
	}

	return (
		<button onClick={switchState} className="cursor-pointer relative z-10">
			{isOpen ? <CgClose size="2rem" /> : <GiHamburgerMenu size="2rem" />}
		</button>
	)
}