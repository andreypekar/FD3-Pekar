import {EventEmitter} from 'events';

let voteEvents=new EventEmitter(); 
// в потоке voteEvents будут все события, связанные с Мобильными клиентами
// событие "EEditClicked" - кнопка Редактировать
// событие "EDeleteClicked" - кнопка Удалить
// событие "ESaveClicked" - кнопка Сохранить
// событие "ECancelClicked" - кнопка Отмена
// лучше работать не с текстовыми литералами, а объявить переменные с соответствующими значениями

export {voteEvents};
