// src/types.ts
export interface TableData {
    name: string;
    designation: string;
    areaOfWork: string;
}

export const tableData: TableData[] = [
    { name: "Mr. L. C. Khandelwal", designation: "Head, Accounts Cell", areaOfWork: "Overall" },
    { name: "Mr. Mukul Saxena", designation: "Sr. Accountant", areaOfWork: "Fee submission & related work" },
    { name: "Mr. Neeraj Arya", designation: "Sr. Accountant", areaOfWork: "Fee submission & related work" },
    { name: "Mr. Nikhil Khandelwal", designation: "Accountant", areaOfWork: "Fee submission & related work" },
    { name: "Mr. Mukesh Khandelwal", designation: "Procurement in charge", areaOfWork: "Purchase" },
    { name: "Mr. Rajesh Srivastava", designation: "Store in charge", areaOfWork: "Store Inventory & Management" },
    { name: "Mr. Dashrath Deen", designation: "Account Executive", areaOfWork: "Fee Submission & related work" },
];



export interface AcountCellTableDataType {
    name: string;
    designation: string;
    areaOfWork: string;
};

export const AcountCellTableData: AcountCellTableDataType[] = [
    { name: "Mr. L. C. Khandelwal", designation: "Head, Accounts Cell", areaOfWork: "Overall" },
    { name: "Mr. Mukul Saxena", designation: "Sr. Accountant", areaOfWork: "Fee submission & related work" },
    { name: "Mr. Neeraj Arya", designation: "Sr. Accountant", areaOfWork: "Fee submission & related work" },
    { name: "Mr. Nikhil Khandelwal", designation: "Accountant", areaOfWork: "Fee submission & related work" },
    { name: "Mr. Mukesh Khandelwal", designation: "Procurement In charge", areaOfWork: "Purchase" },
    { name: "Mr. Rajesh Srivastava", designation: "Store In charge", areaOfWork: "Store Inventory & Management" },
    { name: "Mr. Dashrath Deen", designation: "Account Executive", areaOfWork: "Fee Submission & related work" },
];