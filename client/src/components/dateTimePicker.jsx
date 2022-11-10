import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { ThemeProvider, createTheme } from '@mui/material/styles';


function PostingDateTimePicker({date, onChange}) {
    
    // const theme1 = createTheme({
    //     components: {
    //         MuiDateTimePicker: {
    //         styleOverrides: {
    //           root: {
    //             color: '#fff',
    //             fontSize: '1rem',
    //           },
    //         },
    //       },
    //     },
    // });

    return (
        <div className="date-picker-container">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    // label="Date"
                    value={date}
                    onChange={onChange}
                />
            </LocalizationProvider>
        </div>
    );
}

export default PostingDateTimePicker;