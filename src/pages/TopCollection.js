import React, { useState } from 'react';
import { TiArrowSortedDown, TiArrowUnsorted } from 'react-icons/ti';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import BootstrapTable from 'react-bootstrap-table-next';
import Ellipse0 from '../img/Ellipse0.png';
import Ellipse5 from '../img/Ellipse5.png'
import Caret from '../img/caret.png'

function TopCollection() {

  const [active, setActive] = useState("2");

  const handleClick = (event) => {
    setActive(event.target.id);
  }

  function CollectionFormatter(cell, row) {
    console.log(cell);
    return (
      <>
        <div className='d-flex justify-content-start align-items-center' >

          <img src={cell.src.Ellipse5} width="72.71px" height="72.71px" className="rounded-circle me-3" alt="..." />
          <div>
            <h6 style={{ fontSize: "18PX", fontWeight: "800", color: "#010101", marginBottom: "6.92PX" }} >{cell.name}</h6>
            <h6 style={{ fontSize: "16px", fontWeight: "400", color: "#93989A" }}> {cell.name2}</h6>
          </div>
        </div>
      </>
    );
  }

  function hVolumeFormatter(cell, row) {
    return (
      <>
        <div className='d-flex justify-content-center align-items-center' >
          <div>
            <img src={Caret} width="27.7px" height="27.7px" alt="caret" />
          </div>
          <h6 style={{ fontSize: "18PX", fontWeight: "800", color: "#000", padding: '27px 5px' }} >{cell}</h6>

        </div>
      </>
    );
  }
  function vSecondFormatter(cell, row) {
    return (
      <>

        <h6 style={{ fontSize: "18PX", fontWeight: "800", color: "#645CBB", padding: '27px 5px' }} >{cell}</h6>

      </>
    );
  }

  function floorPriceFormatter(cell, row) {
    return (
      <>
        <div className='d-flex justify-content-center align-items-center' >
          <div>
            <img src={Caret} width="27.7px" height="27.7px" alt="caret" />
          </div>
          <h6 style={{ fontSize: "18PX", fontWeight: "800", color: "#000", padding: '27px 5px' }} >{cell}</h6>

        </div>
      </>
    );
  }
  function ownerFormatter(cell, row) {
    return (
      <>
        <h6 style={{ fontSize: "18PX", fontWeight: "800", color: "#000", padding: '27px 5px' }} >{cell}</h6>
      </>
    );
  }

  const columns = [
    {
      dataField: 'collection',
      text: 'Collection',
      headerAlign: 'left',
      align: 'left',
      headerStyle: {
        color: '#93989A',
        fontSize: '16px',
        borderBottom: "0px",
        padding: '20px 0px'
      },
      formatter: CollectionFormatter
    },

    {
      dataField: 'hvolume',
      text: '24h Volume',
      headerAlign: 'center',
      align: 'center',
      sort: true,
      sortCaret: (order, column) => {
        if (!order) return (<span>&nbsp;&nbsp;<TiArrowUnsorted></TiArrowUnsorted></span>);
        else if (order === 'asc') return (<span>&nbsp;&nbsp;<RiArrowUpSLine></RiArrowUpSLine></span>);
        else if (order === 'desc') return (<span>&nbsp;&nbsp;<RiArrowDownSLine></RiArrowDownSLine></span>);
        return null;
      },
      headerStyle: {
        color: '#93989A',
        fontSize: '16px',
        borderBottom: "0px",
        padding: '20px 0px'
      },
      formatter: hVolumeFormatter
    },

    {
      dataField: 'volume',
      text: '24h',
      headerAlign: 'center',
      align: 'center',
      sort: true,
      sortCaret: (order, column) => {
        if (!order) return (<span>&nbsp;&nbsp;<TiArrowUnsorted></TiArrowUnsorted></span>);
        else if (order === 'asc') return (<span>&nbsp;&nbsp;<RiArrowUpSLine></RiArrowUpSLine></span>);
        else if (order === 'desc') return (<span>&nbsp;&nbsp;<RiArrowDownSLine></RiArrowDownSLine></span>);
        return null;
      },
      headerStyle: {
        color: '#93989A',
        fontSize: '16px',
        borderBottom: "0px",
        padding: '20px 0px'
      },
      formatter: vSecondFormatter
    },
    {
      dataField: 'floorprice',
      text: 'Floor Price',
      headerAlign: 'center',
      sort: true,
      sortCaret: (order, column) => {
        if (!order) return (<span>&nbsp;&nbsp;<TiArrowUnsorted></TiArrowUnsorted></span>);
        else if (order === 'asc') return (<span>&nbsp;&nbsp;<RiArrowUpSLine></RiArrowUpSLine></span>);
        else if (order === 'desc') return (<span>&nbsp;&nbsp;<RiArrowDownSLine></RiArrowDownSLine></span>);
        return null;
      },
      headerStyle: {
        color: '#93989A',
        fontSize: '16px',
        borderBottom: "0px",
        padding: '20px 0px'
      },
      formatter: floorPriceFormatter

    }, {
      dataField: 'owner',
      text: 'Owner',
      headerAlign: 'center',
      align: 'center',
      sort: true,
      sortCaret: (order, column) => {
        if (!order) return (<span>&nbsp;&nbsp;<TiArrowUnsorted></TiArrowUnsorted></span>);
        else if (order === 'asc') return (<span>&nbsp;&nbsp;<RiArrowUpSLine></RiArrowUpSLine></span>);
        else if (order === 'desc') return (<span>&nbsp;&nbsp;<RiArrowDownSLine></RiArrowDownSLine></span>);
        return null;
      },
      headerStyle: {
        color: '#93989A',
        fontSize: '16px',
        borderBottom: "0px",
        padding: '20px 0px'
      },
      formatter: ownerFormatter
    }, {
      dataField: 'owners',
      text: 'Owners',
      headerAlign: 'center',

      align: 'center',
      sort: true,
      sortCaret: (order, column) => {
        if (!order) return (<span>&nbsp;&nbsp;<TiArrowUnsorted></TiArrowUnsorted></span>);
        else if (order === 'asc') return (<span>&nbsp;&nbsp;<RiArrowUpSLine></RiArrowUpSLine></span>);
        else if (order === 'desc') return (<span>&nbsp;&nbsp;<RiArrowDownSLine></RiArrowDownSLine></span>);
        return null;
      },
      headerStyle: {
        color: '#93989A',
        fontSize: '16px',
        borderBottom: "0px",
        padding: '20px 0px'
      },
      formatter: ownerFormatter
    }
  ];

  const products = [
    { collection: { src: { Ellipse5 }, name: "Wade", name2: "By Helter" }, hvolume: '17.00', volume: '+ 200.5%', floorprice: '5.5', owner: '4.2K', owners: '100' },
    { collection: { src: { Ellipse5 }, name: "Gilbert", name2: "By Helter" }, hvolume: '44.00', volume: '+ 60.07%', floorprice: '5.5', owner: '3.2K', owners: '180' },
    { collection: { src: { Ellipse5 }, name: "Max", name2: "By Helter" }, hvolume: '21.00', volume: '+ 155,4%', floorprice: '5.5', owner: '6.6K', owners: '36' },
    { collection: { src: { Ellipse5 }, name: "Jorge", name2: "By Helter" }, hvolume: '74.00', volume: '+ 100.1%', floorprice: '5.5', owner: '1.1K', owners: '78' },
    { collection: { src: { Ellipse5 }, name: "Nathaniel", name2: "By Helter" }, hvolume: '32.00', volume: '+ 20.0%', floorprice: '5.5', owner: '5.5K', owners: '95' },
    { collection: { src: { Ellipse5 }, name: "Harvey", name2: "By Helter" }, hvolume: '12.00', volume: '+ 50.6%', floorprice: '5.5', owner: '6.6K', owners: '62' },
    { collection: { src: { Ellipse5 }, name: "Lewis", name2: "By Helter" }, hvolume: '43.00', volume: '+ 40.9%', floorprice: '5.5', owner: '7.7K', owners: '30' },

  ]

  return (
    <div className='container'>
      <div className=' d-flex flex-wrap gap-2 justify-content-center justify-content-sm-between align-item-center mb-4'>
        <div className='d-flex flex-wrap gap-2 flex-grow-1 justify-content-center justify-content-sm-start align-items-center'>
          <p className='text-dark border-0 fw-bold me-4 fs-4 ' >Top Collection</p>
          <div className='rounded-pill trending-search-wrap'>
            <img src={require('../img/search.png')} alt="search" />
            <input  type="search" placeholder="Type to search" aria-label="Search" />
          </div>
        </div>

        <div className='d-flex  top-btn-wrap flex-wrap justify-content-center justify-content-sm-between justify-content-md-end align-item-center gap-3'>

          <button className={active === "1" ? "active" : "rounded-pill text-dark fw-bold filter-btn  "} id={1} onClick={handleClick}>1 Day</button>
          <button className={active === "2" ? "active" : "rounded-pill text-dark fw-bold filter-btn  "} id={2} onClick={handleClick}>7 Day</button>
          <button className={active === "3" ? "active" : "rounded-pill text-dark fw-bold filter-btn  "} id={3} onClick={handleClick}>30 Day</button>
        </div>
      </div>
      <div>

        <BootstrapTable
          keyField='id'
          data={products}
          columns={columns}
          bordered={false}
          // headerClasses="header-class"
          wrapperClasses="table-responsive full-width"
        />

      </div>
    </div>
  )
}

export default TopCollection