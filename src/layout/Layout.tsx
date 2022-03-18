import { Link, Outlet } from 'react-router-dom';

export function Layout() {
    return (
        <>
            <div id="navbar">
                {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/statistikk">Statistikk</Link>
                        </li>
                    </ul>
                </nav>
                <hr />
            </div>
            {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
            <Outlet />
        </>
    );
}
