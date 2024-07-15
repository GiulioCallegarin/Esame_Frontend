import { TextField } from '@mui/material';

export default function TextInput(props: { value: any, setValue: (newValue: any) => void, error: boolean, label: string, type: 'text' | 'number' | 'date' | 'time' }) {
    const {
        label,
        error,
        type,
        value,
        setValue,
    } = props;

    return (
        <TextField
            variant='outlined'
            fullWidth
            label={label}
            error={error}
            value={value}
            type={type || 'text'}
            onChange={(event: any) => setValue(event.target.value)}
            InputLabelProps={{ shrink: true }}
            sx={{
                mt: 2
            }}
        />
    );
}
