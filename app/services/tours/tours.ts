/*  - перенести все методы ниже в раздел services (сюда импортировать и вызывать)
-   создать метод initApp который будет здесь вызываться, в теле метода добавить эти имортированные методы
    - Указать в методах возвращающие типы, типы для параметров, в теле функции также указать типы чтобы не было ошибок
*/

import { getTourTemplate } from '../../templates/tours';
import { ITours } from '../../models/tours';
import { openModal } from '@services/modal/modalService';

export function initToursDivElements(data: ITours[]): void {
	if (Array.isArray(data)) {
		const rootElement: Element = document.querySelector('.main-app');
		const tourWrap: Element = document.createElement('div');

		tourWrap.classList.add('tour-wrap');

		// init click for modal
		initTourElemListener(tourWrap);

		let rootElementData: string = '';
		data.forEach((el, i) => {
			rootElementData += getTourTemplate(el, i);
		})

		tourWrap.innerHTML = rootElementData;
		rootElement.appendChild(tourWrap);
	}
}

function initTourElemListener(tourWrap): void {
	tourWrap.addEventListener('click', ev => {
		const targetItem: Element = ev.target as Element;
		const parentItem: Element = targetItem?.parentNode as Element;
		let realTarget: Element;

		if (targetItem.hasAttribute('data-tour-item-index')) {
			realTarget = targetItem;
		} else if (parentItem && parentItem.hasAttribute('data-tour-item-index')) {
			realTarget = parentItem;
		}

		if (realTarget) {
			const dataIndex = realTarget.getAttribute('data-tour-item-index')
			openModal('order', Number(dataIndex));
		}
	})
}
