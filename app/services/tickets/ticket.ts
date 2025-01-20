import { initTicketElementTemplate } from '../../templates/ticketInfo';
import { IVipTicket, TicketType, ITicket } from '../../models/ticket/ticket'
import { postTicketData } from '@rest/tickets'

/*  - перенести все методы ниже в раздел services (сюда импортировать и вызывать)
    - Указать в методах возвращающие типы, в теле функции также указать типы чтобы не было ошибок
*/

let ticketPostInstance;

export function initTicketInfo(ticket: TicketType | IVipTicket): void {
	const targetElement: Element = document.querySelector('.ticket-info');

	const ticketDescription: string = ticket?.description;
	const ticketOperator: string = ticket?.tourOperator;
	let vipClientType: string;
	if ('vipStatus' in ticket) {
		vipClientType = ticket.vipStatus;
	}

	const ticketElemsArr: [string, string, string] = [
		ticketDescription,
		ticketOperator,
		vipClientType,
	]
	let ticketElemTemplate: string;

	ticketElemsArr.forEach((el, i) => {
		ticketElemTemplate += initTicketElementTemplate(el, i);
	})

	targetElement.innerHTML = ticketElemTemplate;
}

function initUserData() {
	const userInfo: NodeListOf<HTMLElement> = document.querySelectorAll('.user-info > p');
	let userInfoObj;
	userInfo.forEach(el => {
		const inputDataName: string = el.getAttribute('data-name');
		if (inputDataName) {
			const inputElems: HTMLInputElement = el.querySelector('input');
			userInfoObj[inputDataName] = inputElems.value;
		}
	})

	console.log('userInfoObj', userInfoObj)
	return userInfoObj
}

function initPostData(data): void {
	initUserData();
	postTicketData(data).then(data => {
		if (data.success) {
		}
	})
}

export function registerConfirmButton(): void {
	const targetEl = document.getElementById('accept-order-button')
	if (targetEl) {
		targetEl.addEventListener('click', () => {
			initPostData(ticketPostInstance);
		})
	}
}
