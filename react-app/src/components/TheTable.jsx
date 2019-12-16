import React    from 'react';
import Table from 'react-bootstrap/Table';
import ReactDOM from 'react-dom';

class TheTable extends React.Component {

  render() {
    return (
 
          
                <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>PRODUCT NAME</th>
                    <th>COMPANY</th>
                    <th>PRICE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Samsung RU7300 55" 4K Ultra HD Curved LED Smart TV - Black | UE55RU7300</td>
                    <td>Samsung</td>
                    <td>€679.99</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Samsung N5300 32" Full HD Flat LED Smart TV - Black | UE32N5300AKXX</td>
                    <td>Samsung</td>
                    <td>€299.99</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Sony 32" Full HD LED Smart TV - Black | KDL32WD756BU</td>
                    <td>Sony</td>
              <td>€399.99</td>
                  </tr>
                </tbody>
              </Table>
            );
          }
        
        }

export default TheTable;