import {Link} from "react-router-dom";

export default function NotFound({ children=null }) {
    return (
        <div className="not-found">
            <div className="not-found-content">
                <p>404 not found!</p>
                <Link to={'/'}>Home</Link>
                {children}
            </div>
        </div>
    )
}