
/* Общие методы используются для вставки текста в header   footer*/

/*  -
    - Указать в методах возвращающие типы, типы для параметров, в теле функции также указать типы
*/

function initTitle(
	ticketName: string,
	selector: string,
	headerOrFooter: string
): void {
    const headerElement: HTMLElement = document.querySelector(headerOrFooter);
    const targetItem: HTMLElement = headerElement.querySelector(selector);
    if (targetItem) {
        targetItem.innerText = ticketName;
    }
}

export function initHeaderTitle(ticketName: string, selector: string): void {
    initTitle(ticketName, selector, 'header')
}

export function initFooterTitle(ticketName: string, selector: string): void {
	initTitle(ticketName, selector, 'footer')
}