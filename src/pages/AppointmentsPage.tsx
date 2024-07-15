import { Box, Button, Card, CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { api } from "../api/api";
import SelectInput from "../components/input/SelectInput";
import TextInput from "../components/input/TextInput";

export default function AppointmentsPage() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [student, setStudent] = useState('');
    const [professor, setProfessor] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [description, setDescription] = useState('');
    const [students, setStudents] = useState<App.Student[]>([]);
    const [professors, setProfessors] = useState<App.Professor[]>([]);
    const [appointments, setAppointments] = useState<App.Appointment[]>([]);

    const loadData = async () => {
        setStudents(await api.GetStudents());
        setProfessors(await api.GetProfessors());
        setAppointments(await api.GetAppointments());
        setLoading(false);
    };

    useEffect(() => {
        loadData();
    }, []);

    const handleCreate = async () => {
        if (student !== '' && professor !== '' && date !== '' && time !== '') {
            setError(false);
            setLoading(true);
            await api.CreateAppointment({
                studentId: student,
                professorId: professor,
                date: date,
                time: `${time}:00`,
                description: description,
            });
            setAppointments(await api.GetAppointments());
            setLoading(false);
        }
        else setError(true);
    }

    const handleConfirmAppointment = async (appointmentId: string) => {
        setLoading(true);
        await api.ConfirmAppointment(appointmentId);
        setAppointments(await api.GetAppointments());
        setLoading(false);
    }

    return (
        loading
            ? <Box position='fixed' left='50%' top='50%' sx={{
                transform: 'translate(-50%, -50%)'
            }}
            >
                <CircularProgress />
            </Box>
            : <Box
                p={4}
                maxHeight={`${window.innerHeight - 60}px`}
                display='flex'
                gap={4}
                justifyContent='center'
                alignItems='center'
            >
                <Card
                    elevation={4}
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '30%'
                    }}
                >
                    <Typography variant='h6' color='primary'>
                        Create Appointment
                    </Typography>
                    <Box width='100%'>
                        <SelectInput label='Student' error={error} value={student} setValue={setStudent} options={
                            students.map(student => { return { label: `${student.firstName} ${student.lastName}`, value: student.studentId } })
                        } />
                        <SelectInput label='Professor' error={error} value={professor} setValue={setProfessor} options={
                            professors.map(professor => { return { label: `${professor.firstName} ${professor.lastName}`, value: professor.professorId } })
                        } />
                        <TextInput label='Date' type='date' error={error} value={date} setValue={setDate} />
                        <TextInput label='Time' type='time' error={error} value={time} setValue={setTime} />
                        <TextInput label='Description' type='text' error={error} value={description} setValue={setDescription} />
                        <Button
                            variant='contained'
                            sx={{
                                mt: 3,
                                ml: '50%',
                                transform: 'translateX(-50%)'
                            }}
                            onClick={handleCreate}
                        >
                            Create
                        </Button>
                    </Box>
                </Card>
                <Card
                    elevation={4}
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        height: '100%',
                    }}
                >
                    <Typography variant='h6' color='primary'>
                        Appointments
                    </Typography>
                    {
                        loading
                            ? <CircularProgress />
                            : <TableContainer
                                sx={{
                                    height: '100%'
                                }}
                            >
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ fontWeight: 700 }}>Student</TableCell>
                                            <TableCell sx={{ fontWeight: 700 }}>Professor</TableCell>
                                            <TableCell sx={{ fontWeight: 700 }}>Date</TableCell>
                                            <TableCell sx={{ fontWeight: 700 }}>Time</TableCell>
                                            <TableCell sx={{ fontWeight: 700 }}>Description</TableCell>
                                            <TableCell sx={{ fontWeight: 700 }}>Confirmed</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            appointments.map((appointment, index) => {
                                                return (
                                                    <TableRow key={index}>
                                                        <TableCell sx={{ fontWeight: 700 }}>{appointment.studentName}</TableCell>
                                                        <TableCell sx={{ fontWeight: 700 }}>{appointment.professorName}</TableCell>
                                                        <TableCell sx={{ fontWeight: 700 }}>{appointment.date}</TableCell>
                                                        <TableCell sx={{ fontWeight: 700 }}>{appointment.time}</TableCell>
                                                        <TableCell sx={{ fontWeight: 700 }}>{appointment.description}</TableCell>
                                                        <TableCell sx={{ fontWeight: 700 }}>{appointment.confirmed ? 'True' : <Button
                                                            onClick={() => handleConfirmAppointment(appointment.appointmentId)}
                                                        >Confirm</Button>}
                                                        </TableCell>
                                                    </TableRow>
                                                );
                                            })
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                    }
                </Card>
            </Box >
    );
}
