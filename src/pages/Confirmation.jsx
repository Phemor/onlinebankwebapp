import {useLocation} from 'react-router-dom'
import NavigationButtons from '../components/NavigationButtons';

function Confirmation() {
    const location = useLocation()
    const { state } = location
    const success = state?.success

    return (
        <div>
            <NavigationButtons/>
        <div>
            <h1>Payment {success ? 'Successful' : 'Failed'}</h1>
            {success ? (
                <p>Thank You for Your Payment.</p>
            ) : (
                <p>There was an error processing your payment. Please try again.</p>
        )}
        </div>
        </div>
    )
}

export default Confirmation