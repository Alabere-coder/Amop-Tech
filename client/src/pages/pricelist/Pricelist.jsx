import './pricelist.css'
import Table from 'react-bootstrap/Table';



const Pricelist = () => {
  return (
    <main>
      {/* <div className="top__container" style={{}}>
      </div> */}
      <div className='container'>
        <div className="main__container">
          <h4 className='d-flex align-items-center justify-content-center'>PRICE LIST</h4>
          <p className='d-flex justify-content-center'>The following is a general repair 
            summary guide for the most common repairs.</p>
          <div className="list__container">
            <div className="list__wrapper">
              <Table striped bordered hover variant="dark" >
                <thead>
                  <tr> 
                    <th><h6>DEVICE</h6></th>
                    <th><h6>GLASS / TP</h6></th>
                    <th><h6>TP & LCD</h6></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Tecno</td>
                    <td>#2500</td>
                    <td>#9000</td>
                  </tr>
                  <tr>
                    <td>Tecno</td>
                    <td>#2500</td>
                    <td>#9000</td>
                  </tr>
                  <tr>
                    <td>Tecno</td>
                    <td>#2500</td>
                    <td>#9000</td>
                  </tr>
                  <tr>
                    <td>Tecno</td>
                    <td>#2500</td>
                    <td>#9000</td>
                  </tr>
                  <tr>
                    <td>Tecno</td>
                    <td>#2500</td>
                    <td>#9000</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="list__wrapper">
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th><h6>DEVICE</h6></th>
                    <th><h6>GLASS / TP</h6></th>
                    <th><h6>TP & LCD</h6></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Itel</td>
                    <td>#2500</td>
                    <td>#9000</td>
                  </tr>
                  <tr>
                    <td>Itel</td>
                    <td>#2500</td>
                    <td>#9000</td>
                  </tr>
                  <tr>
                    <td>Itel</td>
                    <td>#2500</td>
                    <td>#9000</td>
                  </tr>
                  <tr>
                    <td>Itel</td>
                    <td>#2500</td>
                    <td>#9000</td>
                  </tr>
                  <tr>
                    <td>Itel</td>
                    <td>#2500</td>
                    <td>#9000</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
          <div className="list__container">
            <div className="list__wrapper">
              <Table striped bordered hover variant="dark" >
                <thead>
                  <tr> 
                    <th><h6>DEVICE</h6></th>
                    <th><h6>GLASS / TP</h6></th>
                    <th><h6>TP & LCD</h6></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Tecno</td>
                    <td>#2500</td>
                    <td>#9000</td>
                  </tr>
                  <tr>
                    <td>Tecno</td>
                    <td>#2500</td>
                    <td>#9000</td>
                  </tr>
                  <tr>
                    <td>Tecno</td>
                    <td>#2500</td>
                    <td>#9000</td>
                  </tr>
                  <tr>
                    <td>Tecno</td>
                    <td>#2500</td>
                    <td>#9000</td>
                  </tr>
                  <tr>
                    <td>Tecno</td>
                    <td>#2500</td>
                    <td>#9000</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="list__wrapper">
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th><h6>DEVICE</h6></th>
                    <th><h6>GLASS / TP</h6></th>
                    <th><h6>TP & LCD</h6></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Itel</td>
                    <td>#2500</td>
                    <td>#9000</td>
                  </tr>
                  <tr>
                    <td>Itel</td>
                    <td>#2500</td>
                    <td>#9000</td>
                  </tr>
                  <tr>
                    <td>Itel</td>
                    <td>#2500</td>
                    <td>#9000</td>
                  </tr>
                  <tr>
                    <td>Itel</td>
                    <td>#2500</td>
                    <td>#9000</td>
                  </tr>
                  <tr>
                    <td>Itel</td>
                    <td>#2500</td>
                    <td>#9000</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="list__wrapper">
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th><h6>ADDITIONAL SERVICES</h6></th>
                    <th><h6>TECNO</h6></th>
                    <th><h6>INFINIX</h6></th>
                    <th><h6>ITEL</h6></th>
                    <th><h6>IPHONE</h6></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Battery Replacement</td>
                    <td>#2500</td>
                    <td>#9000</td>
                  </tr>
                  <tr>
                    <td>Diagnostic Services</td>
                    <td>#2500</td>
                    <td>#9000</td>
                  </tr>
                  <tr>
                    <td>Liquid Damage</td>
                    <td>#2500</td>
                    <td>#9000</td>
                  </tr>
                  <tr>
                    <td>Camera Replacement</td>
                    <td>#2500</td>
                    <td>#9000</td>
                  </tr>
                  <tr>
                    <td>Charging Port</td>
                    <td>#2500</td>
                    <td>#9000</td>
                  </tr>
                  <tr>
                    <td>MIC / Mouth-Piece</td>
                    <td>#2500</td>
                    <td>#9000</td>
                  </tr>
                  <tr>
                    <td>Down Panel</td>
                    <td>#2500</td>
                    <td>#9000</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </main>
    
  )
}

export default Pricelist