import React from 'react'
import PdfDownloadCard from '../../utils/custom/PdfDownloadCard'
import { listOfHolidaysData } from '../../data/ListOfHolidaysData'

const ListOfHolidays: React.FC = () => {
  return <PdfDownloadCard data={listOfHolidaysData} />
}

export default ListOfHolidays
