import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function DistanceSlider({distance, onChange}) {


    const theme = createTheme({
        components: {
          MuiSlider: {
            styleOverrides: {
              root: {
                color: '#334155',
              },
            },
          },
        },
    });

    const marks = [
        {
          value: 1,
          label: '1 Mile',
        },
        {
          value: 2,
          label: '2 Miles',
        },
        {
          value: 3,
          label: '3 Miles',
        },
        {
          value: 4,
          label: '4 Miles',
        },
    ];
    
    return (
        <>        
            <Box sx={{ width: 400 }}>
                <ThemeProvider theme={theme}>
                <Slider 
                    value={distance} 
                    onChange={onChange}
                    min={.25}
                    step={.25}
                    max={5}
                    // valueLabelDisplay="auto"
                    marks={marks}
                    className="distance-slider"
                />
                </ThemeProvider>
            </Box>        
        </>
    );
}

export default DistanceSlider;