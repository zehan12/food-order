import Link from "next/link";

const Header = () => {
    return (
        <>
            <header className="flex justify-between items-center w-screen px-40">
                <div className="w-28">
                    <img
                        className="w-full h-full"
                        src={
                            "https://webneel.com/daily/sites/default/files/images/daily/06-2013/5-burger-king-tomato-king-logo-parody.jpg"
                        }
                        alt="logo"
                    />
                </div>
                <nav>
                    <ul className="flex justify-evenly gap-6">
                        <li>
                            <Link className="hover:text-blue-600" href="/">Home</Link>
                        </li>
                        <li>
                            <Link className="hover:text-blue-600" href="/restaurant">Login</Link>
                        </li>
                        <li>
                            <Link className="hover:text-blue-600" href="/profile">Profile</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;
