import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import "./MeetingTable.css"



const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: "#03004d",
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(Days, Program, Time) {
    return { Days, Program, Time};
}

const rows = [
    createData('Sundays', "Sunday Service", "7:30am - 9:30am"),
    createData('Tuesdays', "Department Meeting", "6:30pm - 7:30pm"),
    createData('Thursdays', "Destiny Encounter", "6:00pm - 7:30pm"),
    createData('Saturdays', "Morning Glory", "5:30am - 7:00am"),
    
];

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function CustomizedTables() {
    const classes = useStyles();

    return (
        <div className="container_ mb-5">
            <h2 className="head-title">Worship with us on</h2>
            <TableContainer component={Paper} className="table_">
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Day</StyledTableCell>
                        <StyledTableCell align="center">Program</StyledTableCell>
                        <StyledTableCell align="center">Time</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            {/* <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell> */}
                            <StyledTableCell align="center">{row.Days}</StyledTableCell>
                            <StyledTableCell align="center">{row.Program}</StyledTableCell>
                            <StyledTableCell align="center">{row.Time}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    );
}