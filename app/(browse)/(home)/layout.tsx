import { Sidebar } from "../_components/sidebar";
import { Navbar } from "../_components/navbar";
import { Container } from "../_components/container";



const BrowseLayout = ({
    children, //extracting children
}: {
    children: React.ReactNode;  // children type
}) => {
    return (
        <>
        <Navbar /> 
        <div className="flex h-full pt-20">
            <Sidebar />
            <Container>
                {children}
            </Container>
        </div>
        </>
    );
};

export default BrowseLayout;