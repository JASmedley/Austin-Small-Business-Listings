import * as React from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@mui/material'
import { Link } from 'react-router-dom'
import DeleteIcon from "@mui/icons-material/Delete"
import cookie from 'cookie'

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["loggedin"] ? true : false
  }


const Listings = (props) => {
    const { listings } = props;

    return (
        <Container maxWidth="lg" className="company-container">
            <Table>
                <TableHead>
                    <TableRow >
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Hours</TableCell>
                        <TableCell>Address</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {listings.map((listing,idx) => (
                    <TableRow  key={listing.id}>
                         <Link to={`/${listing.id}`}>
                            <TableCell  height = "50px" >{listing.name}</TableCell>
                        </Link> 
                        <TableCell>{listing.description}</TableCell>
                        <TableCell>{listing.hours}</TableCell>
                        <TableCell>{listing.address}</TableCell>
                        {checkAuth() === true && (
                        <TableCell>
                        <DeleteIcon
                            onClick={() => props.removeListing(idx)}
                            className="icon text-red"
                        />
                        </TableCell>
                    )}  
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Listings