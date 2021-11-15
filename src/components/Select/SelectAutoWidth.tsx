import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';

export type SelectAutoWidthType = {
    title: string
    value: string
    onChangeCallback: (event: SelectChangeEvent) => void
    values: Array<string>
}


export function SelectAutoWidth(props: SelectAutoWidthType) {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    return (
        <div>
            <FormControl
                sx={{m: 1, minWidth: 150}}
                title={props.title}
            >
                <InputLabel
                    id="demo-simple-select-autowidth-label"
                    title={props.title}
                >
                    {props.title}
                </InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={props.value}
                    onChange={props.onChangeCallback}
                    autoWidth
                    label={props.title}
                >
                    {/*<MenuItem value="">*/}
                    {/*    <em>None</em>*/}
                    {/*</MenuItem>*/}

                        <MenuItem value={props.values[0]}>{props.values[0]}</MenuItem>
                        <MenuItem value={props.values[1]}>{props.values[1]}</MenuItem>
                        <MenuItem value={props.values[2]}>{props.values[2]}</MenuItem>


                </Select>
            </FormControl>
        </div>
    );
}