import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from '../redux/action';
const TAX_RATE = 0.1;

export default function Cart() {
  const states = useSelector((state) => state.handleCart)

  function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }
 

  function subtotal(items) {
    return items.map(({ price,qty }) => price*qty).reduce((sum, i) => sum + i, 0);
  }


  
  const invoiceSubtotal = subtotal(states);
  const invoiceTaxes = TAX_RATE * invoiceSubtotal;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal;
  const dispatch = useDispatch()


  const handleAdd = (item) => {
      dispatch(addCart(item))
  }
  const handleDel = (item) => {
      dispatch(delCart(item))
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              Details
            </TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Desc</TableCell>
            <TableCell align="right">Qty.</TableCell>
            <TableCell align="right">Unit</TableCell>
            <TableCell align="right">Sum</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {states.map((state) =>
          (
            <TableRow key={state.title}>
              <TableCell>
                <div>
                  {state.title}
                </div>
                <img src={state.image} />
              </TableCell>
              <TableCell align="right">

                <Button onClick={()=>handleDel(state)}>-</Button>
                <Button onClick={()=>handleAdd(state)}>+</Button>
                {state.qty}
              </TableCell>
              <TableCell align="right">{state.price}</TableCell>
              <TableCell align="right">{ccyFormat(state.price*state.qty)}</TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tax</TableCell>
            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
              0
            )} %`}</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
        </TableBody>

      </Table>
    </TableContainer>
  );
}