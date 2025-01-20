
import {Modal} from "../../classess/modal";
import {toursDataArray} from "../../index"; // ссылка на массив с данными
import { ITours } from '../../models/tours';

// Определить типы для метода (возвращающие и для переменных в теле функции)

export function openModal(type: string, i: number): void {

    const data:ITours = toursDataArray[i];
    const tourId:number = data[i]?.id;

    // let modalInfo = {};
    switch (type) {
        case "order":
            const modalId: string = 'tour-modal';
            const modalTemplate = `
            <div> 
                <p data-moda-id="${modalId}" class="close-modal">x</p>
                <p>${data.name}</p>
                <p>${data.description}</p>
                
                <div data-tour-id=${tourId} class="ticket-submit">
                    <a href="/ticket.html">Купить билет</a>
                </div>
            </div>
  `
            const modal = new Modal(modalId)
            modal.open(modalTemplate);
            const elClickCloseModal = document.querySelector(
				'p.close-modal[data-moda-id="' + modalId + '"]'
            );
            if (elClickCloseModal) {
                elClickCloseModal.addEventListener('click', () => {
                    Modal.removeById(modalId);
                });
            }
            break;
    }
}


