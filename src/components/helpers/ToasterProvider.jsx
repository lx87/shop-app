import { Toaster } from 'sonner'

function toasterProvider() {
    return ( 
        <Toaster
            toastOptions={{
                style: {
                background: '#2d3136',
                color: 'white',
                border: 'none',
                fontSize: '1.2rem',
                textAlign: 'start'
                },
            }}
        />
    );
}

export default toasterProvider;