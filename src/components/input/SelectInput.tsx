import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export default function SelectInput(props: { label: string, error: boolean, options: { label: string, value: any }[], value: any, setValue: (newValue: any) => void }) {
    const {
        label,
        error,
        options,
        value,
        setValue,
    } = props;

    return (
        <FormControl
            fullWidth
            sx={{
                mt: 2
            }}
        >
            <InputLabel id={`label-${label}`}>{label}</InputLabel>
            <Select
                labelId={`label-${label}`}
                label={label}
                value={value}
                error={error}
                onChange={(event: any) => setValue(event.target.value)}

            >
                {
                    options.map((option, index) => {
                        return (
                            <MenuItem key={index} value={option.value}>{option.label}</MenuItem>
                        );
                    })
                }
            </Select>
        </FormControl>
    );
}
