import React from 'react';
import dialogs from "./style/dialogs.module.css"



const Dialogs = () => {
    return (
        <div className={dialogs.main_content__dialog_block}>
            <h2 className={dialogs.dialog_block}>Dialogs</h2>
            <div className={dialogs.dialog_block__content_dialog}>
                <div className={dialogs.content_dialog__name_users}>
                    <div className={dialogs.name_users__item}>Victor</div>
                    <div className={dialogs.name_users__item}>Oleg</div>
                    <div className={dialogs.name_users__item}>Sasha</div>
                    <div className={dialogs.name_users__item}>Marina</div>
                </div>
                <div className={dialogs.content_dialog__message}>
                    <div className={dialogs.message_box}>
                        <div className={dialogs.message__message_container_item}>
                            <div className={dialogs.message__user_avatar}>
                                <img src='https://i.pinimg.com/564x/24/33/0b/24330b259cfe7429541beddee43f4cea.jpg' />
                            </div>
                            <div className={dialogs.message__user_message}>
                                <p>Hello</p>
                            </div>
                        </div>
                        <div className={dialogs.message__message_container_item}>
                            <div className={dialogs.message__user_avatar}>
                                <img src='https://i.pinimg.com/564x/24/33/0b/24330b259cfe7429541beddee43f4cea.jpg' />
                            </div>
                            <div className={dialogs.message__user_message}>
                                <p>How ary you?</p>
                            </div>
                        </div>
                        <div className={dialogs.message__message_container_item}>
                            <div className={dialogs.message__user_avatar}>
                                <img src='https://i.pinimg.com/564x/24/33/0b/24330b259cfe7429541beddee43f4cea.jpg' />
                            </div>
                            <div className={dialogs.message__user_message}>
                                <p>Go Dota 2</p>
                            </div>
                        </div>
                    </div>
                    <div className={dialogs.message__form_write}>
                        <textarea className={dialogs.form_write__text_area} name="" id=""></textarea>
                        <button className={dialogs.form_write__send_message}>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;