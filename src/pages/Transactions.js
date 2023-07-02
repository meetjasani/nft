import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { IoIosCheckmarkCircleOutline, IoIosCheckmarkCircle } from 'react-icons/io';
import { RiArrowDownSFill } from 'react-icons/ri';
import { BsFilter } from 'react-icons/bs';
import { TbArrowsSort } from 'react-icons/tb';
import { FiSearch } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { VscGitMerge } from 'react-icons/vsc';
import { AiOutlineCheck } from 'react-icons/ai';

// import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
// import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

function Transactions() {

    function IdFormatter(cell, row) {
        return (
            <>
                <span style={{ color: "#26272B", fontSize: '20px', fontWeight: '600' }} >
                    {cell}
                </span>
            </>

        );
    }
    function DescFormatter(cell, row) {
        return (
            <>
                <span style={{ color: "#26272B", fontSize: '19px', fontWeight: '700' }} >
                    {cell}
                </span>
            </>

        );
    }
    function WalletFormatter(cell, row) {
        return (
            <>
                <span style={{ color: "#26272B", fontSize: '19px', fontWeight: '500' }} >
                    {cell}
                </span>
            </>

        );
    }
    function CateFormatter(cell, row) {
        return (
            <>
                <span style={{ color: "#26272B", fontSize: '19px', fontWeight: '600' }} >
                    {cell}
                </span>
            </>

        );
    }
    function feeFormatter(cell, row) {
        return (
            < >
                <span style={{ color: "#F71111", fontSize: '18px', fontWeight: '700' }} >{cell}</span>
            </>
        );
    }

    function amountFormatter(cell, row) {
        return (
            <>
                <span style={{ color: "rgb(100, 92, 187)", fontSize: '18px', fontWeight: '700' }} >
                    {cell}
                </span>
            </>
        );
    }
    function actionFormatter(cell, row) {
        return (
            <>
                <div className='d-flex justify-content-end align-items-center'>
                    <button type="button" className='bg-transparent border-0 write-icon'><IoIosCheckmarkCircleOutline></IoIosCheckmarkCircleOutline></button>
                    <button type="button" className='d-flex justify-content-center align-items-center drag-drop'><RiArrowDownSFill style={{ fontSize: "16px", color: "#4D53E3" }} ></RiArrowDownSFill></button>
                    {/* <button type="button" className='bg-transparent border-0' > <IoIosCheckmarkCircle style={{ fontSize: "24px", color: "#03DB80" }}></IoIosCheckmarkCircle> </button> */}
                </div>
            </>
        );
    }

    const columns = [{
        dataField: 'productId',
        text: 'Transaction ID',
        headerAlign: 'left',
        align: 'left',
        formatter: IdFormatter
    }, {
        dataField: 'description',
        text: 'Description',
        headerAlign: 'left',
        align: 'left',
        formatter: DescFormatter
    }, {
        dataField: 'walletaccount',
        text: 'Wallet Account',
        headerAlign: 'left',
        align: 'left',
        formatter: WalletFormatter
    }, {
        dataField: 'category',
        text: 'Category',
        headerAlign: 'left',
        align: 'left',
        formatter: CateFormatter
    }, {
        dataField: 'fee',
        text: 'Fee',
        headerAlign: 'left',
        align: 'left',
        formatter: feeFormatter

    }, {
        dataField: 'amount',
        text: 'Account',
        headerAlign: 'left',
        align: 'left',
        formatter: amountFormatter,


    }, {
        dataField: 'action',
        text: 'Actions',
        headerAlign: 'right',
        align: 'right',
        formatter: actionFormatter
    }
    ];

    const selectRow = {
        mode: 'checkbox',
        clickToSelect: true
    };

    const products = [
        { id: "0", productId: '#8757ghyrhfD', description: 'ORIG ID:32...', walletaccount: 'TOTAL BUS CHK (870)', category: 'Rent Expense', fee: '$02.00', amount: '$110.00' },
        { id: "1", productId: '#8757ghyrhfD', description: 'ORIG ID:38...', walletaccount: 'TOTAL BUS CHK (820)', category: 'Rent Expense', fee: '$03.00', amount: '$120.00' },
        { id: "2", productId: '#8757ghyrhfD', description: 'ORIG ID:34...', walletaccount: 'TOTAL BUS CHK (170)', category: 'Rent Expense', fee: '$02.00', amount: '$210.00' },
        { id: "3", productId: '#8757ghyrhfD', description: 'ORIG ID:32...', walletaccount: 'TOTAL BUS CHK (890)', category: 'Rent Expense', fee: '$06.00', amount: '$150.00' },
        { id: "4", productId: '#8757ghyrhfD', description: 'ORIG ID:32...', walletaccount: 'TOTAL BUS CHK (470)', category: 'Rent Expense', fee: '$02.00', amount: '$310.00' },
        { id: "5", productId: '#8757ghyrhfD', description: 'ORIG ID:36...', walletaccount: 'TOTAL BUS CHK (870)', category: 'Rent Expense', fee: '$09.00', amount: '$110.00' },
        { id: "6", productId: '#8757ghyrhfD', description: 'ORIG ID:32...', walletaccount: 'TOTAL BUS CHK (860)', category: 'Rent Expense', fee: '$05.00', amount: '$140.00' },
        { id: "7", productId: '#8757ghyrhfD', description: 'ORIG ID:32...', walletaccount: 'TOTAL BUS CHK (770)', category: 'Rent Expense', fee: '$02.00', amount: '$230.00' },
    ]
    return (
        <div className="container">
            <div className='d-flex gap-2 flex-wrap justify-content-center justify-content-sm-between align-items-center transaction-section'>
                <p >Transactions</p>
                <div className='d-flex flex-wrap align-items-center justify-content-between gap-1 transaction-btn-two'>
                    <button
                        type="button"
                        className="add-transaction"
                    >Add Transactions</button>
                    <button
                        type="button"
                        className="more-transaction"
                    >More</button>
                </div>
            </div>
            <div className='transaction-select d-flex align-items-center justify-content-between px-2 mx-auto mx-sm-0 '>
                <p>All accounts</p>
                <select style={{ border: "0px" }} aria-label="Default select example">
                    <option selected>$20,222.97</option>
                    <option value="1">$30,22.80</option>
                    <option value="2">$66,63.44</option>
                    <option value="3">$85,30.25</option>
                </select>
            </div>


            <div className='headerbar gap-2  justify-content-center justify-content-sm-between transaction-main-table'>
                <div className='d-flex flex-wrap align-items-center gap-3 select-all'>
                    <div>
                        <label htmlFor="vehicle1"> Select all</label>
                    </div>
                    <div className='d-flex icon-btns justify-content-start align-items-center gap-2 btn-crud' >
                        <button
                            type="button"
                            className="bg-transparent d-flex justify-content-center align-items-center p-1 curser-pointer"
                        >
                            <RiDeleteBinLine style={{ fontSize: "26px", color: "#DADFE3" }} onMouseOver="style.color='#0F0'"></RiDeleteBinLine>
                        </button>
                        <button
                            type="button"
                            className="bg-transparent d-flex justify-content-center align-items-center p-1 curser-pointer "
                        >
                            <MdOutlineModeEditOutline style={{ fontSize: "26px", color: "#DADFE3" }}></MdOutlineModeEditOutline>
                        </button>
                        <button
                            type="button"
                            className="bg-transparent d-flex justify-content-center align-items-center p-1 curser-pointer "
                        >
                            <VscGitMerge style={{ fontSize: "26px", color: "#DADFE3" }}></VscGitMerge>
                        </button>
                        <button
                            type="button"
                            className="bg-transparent d-flex justify-content-center align-items-center p-1 curser-pointer"
                        >
                            <AiOutlineCheck style={{ fontSize: "26px", color: "#DADFE3" }}></AiOutlineCheck>
                        </button>
                    </div>
                </div>
                <div className=' d-flex align-items-center justify-content-center justify-content-sm-end gap-2 trans-sort-filter'>
                    <div className=' d-flex align-items-center justify-content-center curser-pointer'>
                        <BsFilter style={{ fontSize: "22px" }} className="me-2" ></BsFilter>
                        <p>Filter</p>
                    </div>
                    <div className='d-flex align-items-center justify-content-center curser-pointer '>
                        <TbArrowsSort style={{ fontSize: "22px" }} className="me-2"></TbArrowsSort>
                        <p>Sort</p>
                    </div>
                    <div className='d-flex align-items-center justify-content-center curser-pointer '>
                        <FiSearch style={{ fontSize: "22px" }} className="me-2"></FiSearch>
                        <p>Search</p>
                    </div>
                </div>
            </div>

            <BootstrapTable
                hover
                keyField='id'
                data={products}
                columns={columns}
                selectRow={selectRow}
                bordered={false}
                wrapperClasses="table-responsive full-width"
                headerClasses="transaction-header"
            />


        </div>
    )
}

export default Transactions