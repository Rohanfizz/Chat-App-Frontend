import useProtector from "@/hooks/useProtector";
const ProtectedRoute = ({ children }: any) => {
    let { actualUser } = useProtector();
    return <>{children}</>;
};

export default ProtectedRoute;
