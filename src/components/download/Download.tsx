import React from 'react'
import Accordian from '../../utils/custom/Accordian'
import Classes from "../../utils/styles/Global.module.css";
import { EntrepreneurshipItems } from '../../data/accordianItemsData'

const DownloadPage: React.FC = () => {
    return (
        <div className={`${Classes.container} pt-7 md:py-10 lg:py-14`}>
            <Accordian isMode="entrepreneurship" items={EntrepreneurshipItems} />
        </div>
    )
}

export default DownloadPage
