declare namespace App {
    interface CreateAppointmentRequest {
        studentId: string
        professorId: string
        date: string,
        time: string,
        description: string,
    }
    interface Appointment {
        appointmentId: string
        studentName: string
        professorName: string
        date: string,
        time: string,
        description: string,
        confirmed: boolean
    }
    interface Student {
        studentId: string
        firstName: string
        lastName: string
    }
    interface Professor {
        professorId: string
        firstName: string
        lastName: string
        specialization: string
        receptionAvailability: string
        prefersVideo: boolean
    }
}