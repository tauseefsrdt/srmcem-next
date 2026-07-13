import React from 'react'
import Classes from "../../utils/styles/Global.module.css";
const termsAndConditions = [
  "Shri Ramswaroop Memorial College of Engineering & Management shall in no event be liable for inability/default under any applicable law(s), including those relating to Contract, Torts, Consumer Protection, or any Civil or Criminal Laws, if it fails to provide the Services made available through www.srmu.ac.in due to any government restrictions, regulations, or unforeseen circumstances beyond reasonable control, including strikes, war, natural calamities, acts of God, or other events of force majeure.",
  "You are required to accept the terms and conditions contained in this Disclaimer Policy to avail of any Service through www.srmcem.ac.in. All terms and conditions of the Agreement are incorporated by reference in this Disclaimer Policy and shall be deemed to be a part of this Disclaimer Policy.",
  "Shri Ramswaroop Memorial College of Engineering & Management reserves the right to update or modify these Terms and Conditions from time to time.",
  "No representation or warranty, direct or implied, is made as to the accuracy, correctness, or completeness of any information contained in this Disclaimer Policy or on www.srmcem.ac.in. The information is subject to errors and omissions and must be independently verified by you. You shall defend, indemnify, and hold harmless Shri Ramswaroop Memorial College of Engineering & Management against all claims in this regard.",
  "Unauthorized duplication, copying, visiting, or otherwise modifying any information on www.srmcem.ac.in may result in civil and criminal prosecution.",
  "You agree not to hold Shri Ramswaroop Memorial College of Engineering & Management liable for any direct, indirect, or consequential damages resulting from the use of www.srmcem.ac.in.",
  "Links to any other sites on www.srmcem.ac.in do not imply endorsements by Shri Ramswaroop Memorial College of Engineering & Management of such sites or their content.",
  "In no event shall Shri Ramswaroop Memorial College of Engineering & Management, its affiliates, licensors, employees, or agents be liable for any damages or losses, including indirect, consequential, special, incidental, or punitive damages resulting from the use of or caused by www.srmu.ac.in, its public posting bulletin boards, its content, or any errors or omissions in its content.",
  "You acknowledge that you have read this Policy and agree to all its terms and conditions.",
];

const refundCancellationPolicy = [
  "Multiple Payments: In case an applicant deposits the Registration Fee multiple times through the same or different modes, the refund of the additional amount (less payment gateway charges) shall be at the sole discretion of the Institute.",
  "Normally, such cases of Refund will be taken up after the end of the Admissions process and shall be returned through RTGS / NEFT / Cheque. In cases of refund for multiple payments, the applicant will be asked via email by the Institution for the bank details.",
  "Refund against the Cancellation of Admission will be as per AICTE/UGC policy on the matter.",
  "Registration Fee will not be refunded under the following circumstances:",
  " - Absence on the allotted date and time for any of the processes of admission. The allotted date and time shall not be altered under any circumstance. Hence, the applicant must be physically present during the allotted dates and times for the admissions process.",
  " - Non-selection of a candidate for admission. The Registration Fee is non-refundable, whether or not you/your ward is selected for admission.",
];

const TermCondition: React.FC = () => {
  return (
    <div className={`${Classes["container"]} py-7 md:py-10 lg:py-14`}>
      <h2 className="text-3xl font-semibold mb-4">Terms & Conditions</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        {termsAndConditions.map((term, index) => (
          <li key={index}>{term}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-4">Refund & Cancellation Policy</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        {refundCancellationPolicy.map((policy, index) => (
          <li key={index}>{policy}</li>
        ))}
      </ul>
    </div>
  )
}

export default TermCondition