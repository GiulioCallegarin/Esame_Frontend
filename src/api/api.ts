import axios from "axios";

axios.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error),
);

// eslint-disable-next-line @typescript-eslint/ban-types
const createRequestBackend = (params: { url: string, method: string, data: {}, params: {} } | { url: string, method: string }) => {
    const requestParams = {
        ...params,
        baseURL: import.meta.env.VITE_BASE_URL,
        headers: {
            accept: 'application/json',
        },
    };
    return requestParams;
};

async function GetStudents() {
    const params = createRequestBackend({
        url: 'Students',
        method: 'GET',
    });
    const res = await axios.request(params);
    return res.data;
}
async function GetProfessors() {
    const params = createRequestBackend({
        url: 'Professors',
        method: 'GET',
    });
    const res = await axios.request(params);
    return res.data;
}
async function GetAppointments() {
    const params = createRequestBackend({
        url: 'Appointments',
        method: 'GET',
    });
    const res = await axios.request(params);
    return res.data;
}
async function CreateAppointment(appointment: App.CreateAppointmentRequest) {
    const params = createRequestBackend({
        url: 'Appointments',
        method: 'POST',
        data: appointment,
    });
    const res = await axios.request(params);
    return res.data;
}
async function ConfirmAppointment(appointmentId: string) {
    const params = createRequestBackend({
        url: 'Appointments/Confirm',
        method: 'POST',
        params: {
            appointmentId
        },
    });
    const res = await axios.request(params);
    return res.data;
}


export const api = {
    GetStudents,
    GetProfessors,
    GetAppointments,
    CreateAppointment,
    ConfirmAppointment
};