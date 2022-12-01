/***
 * withConfirmation: true if popup needs confirmation
 * title: popup's title
 * description (optional): popup's description
 * buttons (optional): popup's buttons
 */
const Popup = (withConfirmation, title, description, buttons) => {
    if (withConfirmation) {
        webPopupConfirmation(title, description, buttons)
    } else {
        alert(title)
    }
}

const webPopupConfirmation = (title, description, buttons) => {
    const result = window.confirm([title, description].filter(Boolean).join('\n'))
    if (result) {
        const confirm = buttons.find(({ style }) => style !== 'cancel');
        confirm?.onPress?.();
    }
    const cancel = buttons.find(({ style }) => style === 'cancel');
    cancel?.onPress?.();
}

export default Popup