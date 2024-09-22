import Navbar from '../sections/Navbar';

const MainLayout = ({children}) => {
    return (
        <main className="max-w-7xl max-auto">
            <Navbar />
                {children}
            {/* <Footer /> */}
        </main>
    );
};

export default MainLayout;