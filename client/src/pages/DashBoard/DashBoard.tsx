import Editor from "../../components/Editor/Editor";

const DashBoard = () => {

    return (
        <div id="dashboard_page">
            <h1 className="text-3xl font-bold">DashBoard Page</h1>
            <h3 className="text-lg">Welcome, User! How has your day been?</h3>
                <Editor />
        </div>
    )
}
export default DashBoard;