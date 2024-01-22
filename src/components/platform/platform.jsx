import React, { useState } from 'react'
import "./platform.css"
import Button from '../button/button'
import Modal from '../modal/modal'

const Platform = ({id="", name="", value="", notification="", del}) => {
    const [isOpen, setOpen] = useState(false)

    return (
        <div className='platform'>
            <div className='platform-data'>
                <div className='platform-title'>
                    {name}
                </div>
                <div>
                    Количество мест: {value}
                </div>
            </div>
            <div className='platform-data'>
                <div className='platform-id'>
                    ID: {id}
                </div>
                <div>
                    <i onClick={() => (setOpen(true))} className="fa fa-remove platform-del"></i>
                </div>
            </div>
            <Modal isOpen={isOpen} onClose={() => setOpen(false)} title={"Удалить самолет из базы данных"}>
                <div className="platform-bottom">
                 Внимание! Удаление самолёта приведёт к удалению его данных и рейсов с бронями. Вы уверены?
                </div>
                <div className="platform-bottom">
                    <Button onClick={() => setOpen(false)}>Отменить действие</Button>
                    <div className='notification'>{notification}</div>
                    <Button onClick={() => del()} type={"danger"}>Удалить</Button>
                </div>
            </Modal>
        </div>
    )
}

export default Platform
