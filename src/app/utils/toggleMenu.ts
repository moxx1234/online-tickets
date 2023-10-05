export default function toggleMenu() {
	const menu = document.getElementById('menu'),
		isOpen = menu?.dataset.open === 'true'

	if (!menu) throw new Error('Menu not found!')

	if (isOpen) menu.dataset.open = 'false'
	else menu.dataset.open = 'true'
}