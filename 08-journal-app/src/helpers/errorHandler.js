
import Swal from 'sweetalert2';
export function errorHandler(error, title = 'Oops!') {
    const { message } = error
    console.warn(title, message, error)
    Swal.fire({ icon: 'error', title: title, text: message });
}